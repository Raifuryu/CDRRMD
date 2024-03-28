import { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
  gridClasses,
} from "@mui/x-data-grid";
import FloatButtonAdd from "./FloatButtonAdd";

const columns: GridColDef[] = [
  { field: "first_name", headerName: "First Name", width: 150 },
  { field: "middle_name", headerName: "Middle Name", width: 100 },
  { field: "last_name", headerName: "Last Name", width: 100 },
  {
    field: "extension_name",
    headerName: "Extension Name",
    width: 120,
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 100,
  },
  {
    field: "office_name",
    headerName: "Office Name",
    width: 150,
  },
  {
    field: "acronym",
    headerName: "Office Acronym",
    width: 150,
  },
  {
    field: "contact_number",
    headerName: "Contact Number",
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <a href={`tel:${params.value}`}>{params.value}</a>
    ),
  },
  {
    field: "email_address",
    headerName: "Email Address",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <a href={`mailto:${params.value}`}>{params.value}</a>
    ),
  },
  {
    field: "id",
    headerName: "View",
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <a href={params.value}>View</a>
    ),
  },
];

const DirectoryLayout = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    try {
      const response = await fetch("http://192.168.1.69:3000/api/directory", {
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
    getData();
  }, [count]);

  const updateCount = async () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <DataGrid
          getRowId={(row) => row.id}
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
                pageSize: 20,
              },
            },
            filter: {
              filterModel: {
                items: [],
              },
            },
          }}
          pageSizeOptions={[10, 20, 50, 100]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
        <FloatButtonAdd updateState={updateCount} />
      </div>
    </>
  );
};

export default DirectoryLayout;
