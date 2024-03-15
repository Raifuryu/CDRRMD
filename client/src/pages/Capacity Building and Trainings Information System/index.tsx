import {
  Spin,
  Table,
  TableColumnsType,
  TableProps,
  Typography,
  notification,
} from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import FloatButtonDrawer from "./FloatButtonDrawer";

const { Title } = Typography;

const CBTISLayout = () => {
  const [messageApi, contextHolder] = notification.useNotification();

  const [countState, setCountState] = useState(1);
  const [loading, setLoading] = useState(false);

  const [trainingData, setTrainingData] = useState<Training[]>([]);

  interface Training {
    key: React.Key;
    fk_trainer_id: number;
    training_id: number;
    course: string;
    venue: string;
    contact_person: string;
    contact_person_number: string;
    remarks: string;
    start_date: Date;
    end_date: Date;
    pax: number;
    status: number;
  }

  const trainingColumn: TableColumnsType<Training> = [
    {
      title: "ID",
      dataIndex: "training_id",
      key: "training_id",
      sorter: {
        compare: (a, b) => a.training_id - b.training_id,
        multiple: 3,
      },
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
      sorter: {
        compare: (a, b) => a.venue.length - b.venue.length,
      },
    },
    {
      title: "Venue",
      dataIndex: "venue",
      key: "venue",
      sorter: {
        compare: (a, b) => a.venue.length - b.venue.length,
      },
    },
    {
      title: "Trainee",
      dataIndex: "trainee",
      key: "trainee",
      render: (value: string) => (
        <Typography.Text>{value === null ? "Mixed" : value}</Typography.Text>
      ),
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
      key: "contact_person",
      sorter: {
        compare: (a, b) => a.contact_person.length - b.contact_person.length,
      },
    },
    {
      title: "Contact Person Number",
      dataIndex: "contact_person_number",
      key: "contact_person_number",
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
      render: (value: string) => (
        <Typography.Text ellipsis={{ tooltip: true }} style={{ width: 200 }}>
          {value}
        </Typography.Text>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      sorter: {
        compare: (a, b) =>
          new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
        multiple: 1,
      },
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      sorter: (a, b) =>
        new Date(a.end_date).getTime() - new Date(b.end_date).getTime(),
    },
    {
      title: "PAX",
      dataIndex: "pax",
      key: "pax",
      sorter: (a, b) => a.pax - b.pax,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: { compare: (a, b) => a.status - b.status, multiple: 2 },
      render: (status: number) => (
        <Title
          level={5}
          type={status === 1 ? "warning" : status === 0 ? "success" : "danger"}
        >
          {status === 1 ? (
            <span>Active</span>
          ) : status === 0 ? (
            <span>Done</span>
          ) : (
            <span>Cancelled</span>
          )}
        </Title>
      ),
    },
    {
      title: "View",
      dataIndex: "training_id",
      render: (id: string) => (
        <Link to={`/training/${id}`} className="underline text-info">
          View
        </Link>
      ),
    },
  ];

  useEffect(() => {
    fetch("http://192.168.1.69:3000/api/training")
      .then((response) => response.json())
      .then((data) => {
        setTrainingData(data);
        setLoading(false);
        messageApi["success"]({
          message: "Success",
          description: "Data fetched successfully",
          placement: "bottomLeft",
        });
      })
      .catch((error) => {
        messageApi["error"]({
          message: "Error",
          description: "Error details " + error,
          placement: "bottomLeft",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [countState]);

  const updateState = () => {
    setCountState(countState + 1);
  };

  const onChange: TableProps<Training>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      {contextHolder}
      <div className="flex flex-col">
        <Typography.Title level={2}>
          Capacity Building Information System
        </Typography.Title>
        <div className="flex">
          <Table
            dataSource={trainingData.flat().map((item) => ({
              ...item,
              key: `${item.training_id}`,
            }))}
            columns={trainingColumn}
            onChange={onChange}
          />
        </div>
        <FloatButtonDrawer updateState={updateState} />
      </div>
    </>
  );
};

export default CBTISLayout;
