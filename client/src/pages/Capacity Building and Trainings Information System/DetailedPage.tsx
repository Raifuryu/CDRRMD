import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Drawer,
  Flex,
  FloatButton,
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
  Table,
  Typography,
  Upload,
  UploadProps,
  message,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Title } = Typography;

const DeatailedPage = () => {
  interface Barangay {
    id: number;
    fk_city_id: number;
    name: string;
  }

  interface Participant {
    first_name: string;
    middle_name: string;
    last_name: string;
    extension_name: string;
    barangay: string;
    blood_type: string;
  }

  const ParticipantColumn = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Middle Name",
      dataIndex: "middle_name",
      key: "middle_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Barangay",
      dataIndex: "barangay",
      key: "barangay",
    },
    {
      title: "Blood Type",
      dataIndex: "blood_type",
      key: "blood_type",
    },
  ];

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<Barangay[]>([]);

  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingVenue, setTrainingVenue] = useState("");
  const [trainingTrainer, setTrainingTrainer] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState();
  const [trainingEndDate, setTrainingEndDate] = useState();

  const [loading, setLoading] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  const [participants, setParticipants] = useState<Participant[]>([]);

  const showDrawer = () => {
    setDrawerState(true);
  };

  const closeDrawer = () => {
    setDrawerState(false);
  };

  useEffect(() => {
    const trainingDetailsRequest = fetch(
      `http://192.168.1.69:3000/training/${trainingId}`
    ).then((res) => res.json());

    const barangayRequest = fetch("http://192.168.1.69:3000/barangay").then(
      (res) => res.json()
    );

    Promise.all([trainingDetailsRequest, barangayRequest])
      .then(([trainingData, barangayData]) => {
        setTrainingTitle(trainingData.title);
        setTrainingVenue(trainingData.venue);
        setTrainingTrainer(trainingData.trainer);
        setTrainingStartDate(trainingData.start_date);
        setTrainingEndDate(trainingData.end_date);

        setBarangay(barangayData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error appropriately
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFileUpload = (file: File) => {
    Papa.parse<Participant>(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setParticipants(result.data as Participant[]);
        console.log(participants);
        message.success(`${file.name} file uploaded successfully`);
      },
      error: (error) => {
        console.error("CSV parsing error:", error.message);
        message.error(`${file.name} file upload failed.`);
      },
    });
  };

  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file: File) => {
      const isCSV = file.type === "application/vnd.ms-excel";
      if (!isCSV) {
        message.error(`${file.name} is not a CSV file`);
      } else {
        handleFileUpload(file);
      }
      return isCSV;
    },
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      <Divider orientation="left">Training Details</Divider>
      <Flex gap={16}>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>ID</Typography.Title>
            <Input
              defaultValue={trainingId}
              size="large"
              style={{ width: 30 }}
              disabled
            />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Training Title</Typography.Title>
            <Input
              defaultValue={trainingTitle}
              size="large"
              style={{ width: 300 }}
              disabled
            />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Training Venue</Typography.Title>
            <Input
              defaultValue={trainingVenue}
              size="large"
              style={{ width: 200 }}
              disabled
            />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Trainer</Typography.Title>
            <Input
              defaultValue={trainingTrainer}
              size="large"
              style={{ width: 200 }}
              disabled
            />
          </div>
        </Flex>
        <Flex vertical gap={16}>
          <div>
            <Typography.Title level={5}>Training Date</Typography.Title>
            <RangePicker
              defaultValue={[dayjs(trainingStartDate), dayjs(trainingEndDate)]}
              size="large"
              style={{ width: 250 }}
              disabled
            />
          </div>
        </Flex>
      </Flex>
      <Flex gap={16}>
        <Flex vertical gap={16}>
          <FloatButton
            shape="circle"
            type="primary"
            onClick={showDrawer}
            style={{ right: 94 }}
            icon={<PlusOutlined />}
          />
        </Flex>
      </Flex>
      <Drawer
        title="Add Participants"
        width={720}
        onClose={closeDrawer}
        open={drawerState}
        extra={
          <Space>
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button onClick={closeDrawer}>Submit</Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Title level={3}>Add Participants</Title>
          <Divider orientation="left">
            <Title level={3}>Participant Details</Title>
          </Divider>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="first_name"
                label="First Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="John" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="middle_name" label="Middle Name">
                <Input style={{ width: "100%" }} placeholder="The" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="last_name"
                label="Last Name"
                rules={[{ required: true, message: "Doe" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="extension_name" label="Extension Name">
                <Input style={{ width: "100%" }} placeholder="Sr. Jr. III..." />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="brangay"
                label="Barangay"
                rules={[
                  { required: true, message: "Please select a Barangay" },
                ]}
              >
                <Select placeholder="Please select a Barangay">
                  {barangay.map((item, index) => (
                    <Option key={index}>{item.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="blood_type"
                label="Blood Type"
                rules={[
                  { required: true, message: "Please choose Blood Type" },
                ]}
              >
                <Select placeholder="Select Blood Type">
                  <Option value="A+">A+</Option>
                  <Option value="A">A</Option>
                  <Option value="A-">A-</Option>
                  <Option value="AB+">AB+</Option>
                  <Option value="AB">AB</Option>
                  <Option value="AB-">AB-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="B">B</Option>
                  <Option value="B-">B-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="O">O</Option>
                  <Option value="O-">O-</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Divider orientation="left">
              <Title level={3}>Mass Upload Participants</Title>
            </Divider>
          </Row>
          <Row>
            <Col span={12}>
              <Upload {...props} accept=".csv" maxCount={1}>
                <Button icon={<UploadOutlined />}>
                  Upload CSV participants
                </Button>
              </Upload>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table dataSource={participants} columns={ParticipantColumn} />
            </Col>
          </Row>
        </Form>
      </Drawer>
      <Divider orientation="left">Participants</Divider>
      <Table dataSource={[]} columns={[]} />;
    </>
  );
};

export default DeatailedPage;
