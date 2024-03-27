import { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  gridClasses,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "policy_number", headerName: "Number", width: 120 },
  { field: "name", headerName: "Title", width: 500 },
  { field: "date_approved", headerName: "Date Approved", width: 150 },
  { field: "type", headerName: "Type", width: 150 },
  { field: "category", headerName: "Category", width: 190 },
  { field: "view", headerName: "View", sortable: false, width: 50 },
  { field: "edit", headerName: "Edit", sortable: false, width: 50 },
  { field: "delete", headerName: "Delete", sortable: false, width: 70 },
];

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [dateApproved, setDateApproved] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const postData = async () => {
    try {
      await fetch("http://192.168.1.69:3000/api/file/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: number,
          name: name,
          dateApproved: dateApproved,
          category: category,
          type: type,
        }),
      });

      setNumber("");
      setName("");
      setDateApproved("");
      setCategory("");
      setType("");
      getData(); // Update the local state after successful POST
    } catch (error) {
      console.error("Error adding data:" + error);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch("http://192.168.1.69:3000/api/file", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(); // Call getData when the component mounts
  }, []);

  return (
    <>
      <div>
        <div>
          <article className="prose text-center">
            <h1>Data Banking System: Policies</h1>
          </article>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-5 mb-5">
            <div className="overflow-x-auto">
              <DataGrid
                getRowId={(row) => row.policies_id}
                rows={data}
                columns={columns}
                getRowHeight={() => "auto"}
                sx={{
                  [`& .${gridClasses.cell}`]: {
                    py: 1,
                  },
                }}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 100,
                    },
                  },
                  filter: {
                    filterModel: {
                      items: [],
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 50, 100]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
              />
            </div>
          </div>
          <div className="drawer w-25">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-outline  btn-accent drawer-button"
              >
                Add
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <h6>Add Data</h6>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">
                      Resolution/Ordinance/EO Number
                    </span>
                  </div>
                  <input
                    type="text"
                    value={number}
                    placeholder="Number"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Title</span>
                  </div>
                  <input
                    type="text"
                    value={name}
                    placeholder="Title"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Date Approved</span>
                  </div>
                  <input
                    type="text"
                    value={dateApproved}
                    placeholder="Date Approved"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setDateApproved(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    defaultValue={"Click to Drop"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled>Click to Drop</option>
                    <option>CDRRMC</option>
                    <option>Sangguniang Panlungsod</option>
                    <option>City Mayor's Office</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Type</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    defaultValue={"Click to Drop"}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option disabled>Click to Drop</option>
                    <option>Resolution</option>
                    <option>Ordinance</option>
                    <option>Executive Order</option>
                    <option>MOA/MOU</option>
                  </select>
                </label>
                <button
                  className="btn btn-outline btn-success mt-3 btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    postData();
                  }}
                >
                  Submit
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
