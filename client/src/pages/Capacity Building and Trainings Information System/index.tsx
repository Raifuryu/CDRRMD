import { useState, useEffect } from "react";
import Table from "../../components/Table";
import { Link } from "react-router-dom";

const CBTISLayout = () => {
  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "title" },
    { header: "Venue", accessorKey: "venue" },
    { header: "Trainer", accessorKey: "trainer" },
    { header: "Start Date", accessorKey: "start_date" },
    { header: "End Date", accessorKey: "end_date" },
    {
      header: "View",
      accessorKey: "",
      cell: ({ row }: { row: any }) => {
        return (
          <Link
            to={`/training/${row.original.id}`}
            className="underline text-info"
          >
            View
          </Link>
        );
      },
    },
  ];

  // const trainingColumn = [
  //   {
  //     title: "Title",
  //     dataIndex: "title",
  //     key: "title",
  //   },
  //   {
  //     title: "Venue",
  //     dataIndex: "venue",
  //     key: "venue",
  //   },
  //   {
  //     title: "Trainer",
  //     dataIndex: "trainer",
  //     key: "trainer",
  //   },
  //   {
  //     title: "Start Date",
  //     dataIndex: "start_date",
  //     key: "start_date",
  //   },
  //   {
  //     title: "End Date",
  //     dataIndex: "end_date",
  //     key: "end_date",
  //   },
  // ];

  const [data, setData] = useState([]);

  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingVenue, setTrainingVenue] = useState("");
  const [trainer, setTrainer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://192.168.1.69:3000/CBTIS", {
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
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Table columns={columns} data={data} />
      </div>
      <div className="flex">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="prose">
                    <h3>Add Training</h3>
                  </div>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Training Title</span>
                    </div>
                    <input
                      type="text"
                      value={trainingTitle}
                      placeholder="Training Title"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setTrainingTitle(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Training Venue</span>
                    </div>
                    <input
                      type="text"
                      value={trainingVenue}
                      placeholder="Training Venue"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setTrainingVenue(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Trainer</span>
                    </div>
                    <input
                      type="text"
                      value={trainer}
                      placeholder="John Doe"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setTrainer(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Start Date</span>
                    </div>
                    <input
                      type="text"
                      value={startDate}
                      placeholder="Start Date"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">End Date</span>
                    </div>
                    <input
                      type="text"
                      value={endDate}
                      placeholder="End Date"
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="flex">
                  <button className="btn btn-outline btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBTISLayout;
