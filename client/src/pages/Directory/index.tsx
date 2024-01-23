import { useEffect, useState } from "react";
import Table from "../../components/Table";

const columns = [
  {
    header: "ID",
    accessorKey: "id",
    cell: ({ row }: { row: any }) => {
      return row.index;
    },
  },
  { header: "First Name", accessorKey: "first_name", enableColumnFilter: true },
  {
    header: "Middle Name",
    accessorKey: "middle_name",
    enableColumnFilter: true,
  },
  { header: "Last Name", accessorKey: "last_name", enableColumnFilter: true },
  { header: "Office", accessorKey: "acronym", filterFn: "fuzzy" },
  {
    header: "Phone Number",
    accessorKey: "number",
    cell: ({ row }: { row: any }) => {
      return <a href={`tel:${row.original.number}`}>{row.original.number}</a>;
    },
    enableColumnFilter: true,
  },
  { header: "Email Address", accessorKey: "email" },
];

const DirectoryLayout = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://192.168.1.69:3000/directory", {
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
    <>
      <div className="">
        <Table data={data} columns={columns} />
      </div>
    </>
  );
};

export default DirectoryLayout;
