import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button, Divider,
  Drawer,
  Flex,
  Input, Spin, Typography
} from "antd";
import dayjs from "dayjs";

export const DeatailedPage = () => {
  interface barangay {
    id: number;
    fk_city_id: number;
    name: string;
  }

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<barangay[]>([]);

  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingVenue, setTrainingVenue] = useState("");
  const [trainingTrainer, setTrainingTrainer] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState();
  const [trainingEndDate, setTrainingEndDate] = useState();

  const [loading, setLoading] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const showDrawer = () => {
    setDrawerState(true);
  };

  const closeDrawer = () => {
    setDrawerState(false);
  };

  useEffect(() => {
    fetch(`http://192.168.1.69:3000/training/${trainingId}`)
      .then((res) => res.json())
      .then((result) => {
        const firstItem = result[0];

        setTrainingTitle(firstItem.title);
        setTrainingVenue(firstItem.venue);
        setTrainingTrainer(firstItem.trainer);
        setTrainingStartDate(firstItem.start_date);
        setTrainingEndDate(firstItem.end_date);
      });
    fetch(`http://192.168.1.69:3000/barangay`)
      .then((res) => res.json())
      .then((result) => {
        setBarangay(result);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      {/* <div className="flex flex-col">
              <div className="flex prose">
                <h2>Training Information</h2>
              </div>
              <div className="flex flex-row">
                <label className="form-control max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">ID</span>
                  </div>
                  <input
                    type="text"
                    value={trainingId}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setTrainingTitle(e.target.value);
                    }}
                    disabled
                  />
                </label>
      
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Training Title</span>
                  </div>
                  <input
                    type="text"
                    value={trainingTitle}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setTrainingVenue(e.target.value);
                    }}
                    disabled
                  />
                </label>
      
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Training Venue</span>
                  </div>
                  <input
                    type="text"
                    value={trainingVenue}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setTrainingVenue(e.target.value);
                    }}
                    disabled
                  />
                </label>
      
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Trainer</span>
                  </div>
                  <input
                    type="text"
                    value={trainingTrainer}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setTrainingVenue(e.target.value);
                    }}
                    disabled
                  />
                </label>
      
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Training Start Date</span>
                  </div>
                  <input
                    type="text"
                    value={trainingStartDate}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setTrainingStartDate(e.target.value);
                    }}
                    disabled
                  />
                </label>
      
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Training End Date</span>
                  </div>
                  <input
                    type="text"
                    value={trainingEndDate}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => {
                      setTrainingEndDate(e.target.value);
                    }}
                    disabled
                  />
                </label>
              </div>
              <div className="flex prose">
                <h2>Participant Information</h2>
              </div>
              <div className="flex flex-row">
                <div className="flex">
                  <label className="form-control w-full max-w-xs m-2">
                    <div className="label">
                      <span className="label-text">First Name</span>
                    </div>
                    <input
                      type="text"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs m-2">
                    <div className="label">
                      <span className="label-text">Middle Name</span>
                    </div>
                    <input
                      type="text"
                      // value={trainingEndDate}
                      className="input input-bordered w-full max-w-xs"
                      onChange={() => {
                        // setTrainingEndDate(e.target.value);
                      }}
                      // disabled
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs m-2">
                    <div className="label">
                      <span className="label-text">Last Name</span>
                    </div>
                    <input
                      type="text"
                      // value={trainingEndDate}
                      className="input input-bordered w-full max-w-xs"
                      onChange={() => {
                        // setTrainingEndDate(e.target.value);
                      }}
                      // disabled
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs m-2">
                    <div className="label">
                      <span className="label-text">Extension Name</span>
                    </div>
                    <input
                      type="text"
                      // value={trainingEndDate}
                      className="input input-bordered w-full max-w-xs"
                      onChange={() => {
                        // setTrainingEndDate(e.target.value);
                      }}
                      // disabled
                    />
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs m-2">
                    <div className="label">
                      <span className="label-text">Birthdate</span>
                    </div>
                    <Space direction="vertical" size={12}>
                      <DatePicker size="large" />
                    </Space>
                  </label>
                </div>
                <div className="flex">
                  <label className="form-control w-full max-w-xs m-2">
                    <div className="label">
                      <span className="label-text">Blood Type</span>
                    </div>
                    <Select
                      defaultValue="Pick one"
                      size="large"
                      style={{ width: 120 }}
                      options={[
                        { value: "A+", label: "A+" },
                        { value: "A", label: "A" },
                        { value: "A-", label: "A-" },
                        { value: "AB+", label: "AB+" },
                        { value: "AB", label: "AB" },
                        { value: "AB-", label: "AB-" },
                        { value: "B+", label: "B+" },
                        { value: "B", label: "B" },
                        { value: "B-", label: "B-" },
                        { value: "O+", label: "O+" },
                        { value: "O", label: "O" },
                        { value: "O-", label: "O-" },
                      ]}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-row">
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">House Number(Optional)</span>
                  </div>
                  <input
                    type="text"
                    // value={trainingEndDate}
                    className="input input-bordered w-full max-w-xs"
                    onChange={() => {
                      // setTrainingEndDate(e.target.value);
                    }}
                    // disabled
                  />
                </label>
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Sitio(Optional)</span>
                  </div>
                  <input
                    type="text"
                    // value={trainingEndDate}
                    className="input input-bordered w-full max-w-xs"
                    onChange={() => {
                      // setTrainingEndDate(e.target.value);
                    }}
                    // disabled
                  />
                </label>
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">Barangay</span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled>Pick one</option>
                    {barangay.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="form-control w-full max-w-xs m-2">
                  <div className="label">
                    <span className="label-text">City</span>
                  </div>
                  <select className="select select-bordered" disabled>
                    <option>Cagayan de Oro City</option>
                  </select>
                </label>
              </div>
              <div className="flex">
                <button className="btn btn-outline btn-info">Add Participants</button>
                <button className="btn btn-outline btn-success">Submit</button>
              </div>
            </div> */}
      <Divider orientation="left">Training Details</Divider>
      <Flex gap={16}>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>ID</Typography.Title>
            <Input
              defaultValue={trainingId}
              size="large"
              style={{ width: 30 }}
              disabled />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Training Title</Typography.Title>
            <Input
              defaultValue={trainingTitle}
              size="large"
              style={{ width: 300 }}
              disabled />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Training Venue</Typography.Title>
            <Input
              defaultValue={trainingVenue}
              size="large"
              style={{ width: 200 }}
              disabled />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Trainer</Typography.Title>
            <Input
              defaultValue={trainingTrainer}
              size="large"
              style={{ width: 200 }}
              disabled />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Training Date</Typography.Title>
            <RangePicker
              defaultValue={[dayjs(trainingStartDate), dayjs(trainingEndDate)]}
              size="large"
              style={{ width: 250 }}
              disabled />
          </div>
        </Flex>
      </Flex>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={closeDrawer} open={drawerState}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Divider orientation="left">Participants</Divider>
      {/* <Table dataSource={} columns={} />; */}
    </>
  );
};
