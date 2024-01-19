import { useState, useEffect } from "react";
import Table from "./Table";

const CBTISLayout = () => {
  const columns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Trainer", accessorKey: "trainer" },
    { header: "View", accessorKey: "" },
  ];

  const [data, setData] = useState([]);

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
    <div className="flex">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CBTISLayout;
