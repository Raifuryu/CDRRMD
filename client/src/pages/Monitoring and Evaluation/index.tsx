import {
  DataGrid,
  GridColDef,
  GridToolbar,
  gridClasses,
} from "@mui/x-data-grid";
import { Spin, Typography } from "antd";
import { useEffect, useState } from "react";

const index = () => {
  const [MnEData, setMnEData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: "pillar", headerName: "Pillar", width: 300 },
    { field: "objective_number", headerName: "Obj. Number", width: 100 },
    { field: "objective", headerName: "Objective", width: 300 },
    { field: "outcome", headerName: "Outcome", width: 300 },
    {
      field: "program_project",
      headerName: "Programs and Projects",
      width: 500,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch(`http://192.168.1.69:3000/api/monitoring-and-evaluation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          // Check if data is available before updating the state
          setMnEData(data);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching organization data:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  if (loading) {
    <Spin />;
  }

  return (
    <>
      <Typography.Title className="mt-10">
        LDRRMP 2023-2030 Programs, Projects and Activities
      </Typography.Title>
      <DataGrid
        getRowId={(row) => row.LDRRMP_id}
        rows={MnEData}
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
    </>
  );
};

export default index;
