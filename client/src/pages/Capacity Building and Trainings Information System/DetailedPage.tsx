import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import {
  Button,
  Checkbox,
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
import {
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
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
      title: "Extension Name",
      dataIndex: "extension_name",
      key: "extension_name",
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

  const [form] = Form.useForm();

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<Barangay[]>([]);

  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingVenue, setTrainingVenue] = useState("");
  const [trainingTrainer, setTrainingTrainer] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState();
  const [trainingEndDate, setTrainingEndDate] = useState();

  const [loading, setLoading] = useState(true);
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
        const data = trainingData[0];

        setTrainingTitle(data.title);
        setTrainingVenue(data.venue);
        setTrainingTrainer(data.trainer);
        setTrainingStartDate(data.start_date);
        setTrainingEndDate(data.end_date);

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
      skipEmptyLines: true,
      complete: (result) => {
        setParticipants((prevData) => [...prevData, ...result.data]);
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
      const isCSV = file.type === "text/csv";
      if (!isCSV) {
        console.log(file.type);
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
      <Row gutter={[16, 24]}>
        <Col span={3}>
          <Title level={5}>ID</Title>
          <Input defaultValue={trainingId} disabled />
        </Col>
        <Col span={5}>
          <Title level={5}>Training Title</Title>
          <Input defaultValue={trainingTitle} />
        </Col>
        <Col span={5}>
          <Title level={5}>Training Venue</Title>
          <Input defaultValue={trainingVenue} />
        </Col>
        <Col span={5}>
          <Title level={5}>Trainer</Title>
          <Input defaultValue={trainingTrainer} />
        </Col>
        <Col span={6}>
          <Title level={5}>Training Date</Title>
          <RangePicker
            defaultValue={[dayjs(trainingStartDate), dayjs(trainingEndDate)]}
            style={{ width: 250 }}
          />
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        <Col span={8}>
          <Title level={5}>Organization Name</Title>
          <Input />
        </Col>
        <Col span={8}>
          <Title level={5}>Organization Address</Title>
          <Input />
        </Col>
        <Col span={5}>
          <Title level={5}>Organization Barangay</Title>
          <Select placeholder="Please select a Barangay" showSearch>
            {barangay.map((item, index) => (
              <Option key={index} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Title level={5}>Organization Contact</Title>
          <Input addonBefore="+63" placeholder="123456789" />
        </Col>
        <Col span={8}>
          <Title level={5}>Organization Email Address</Title>
          <Input placeholder="" />
        </Col>
        <Col span={3}>
          <Title level={5}>PAX</Title>
          <Input disabled />
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        <Col span={2} offset={22}>
          <Button>Update</Button>
        </Col>
      </Row>
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
      {/* Drawer */}
      <Drawer
        title="Add Participants"
        width={1080}
        onClose={closeDrawer}
        open={drawerState}
        extra={
          <Space>
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button onClick={() => {}}>Submit</Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form}>
          <Title level={3}>Add Participants</Title>
          <Divider orientation="left">
            <Title level={3}>Participant Details</Title>
          </Divider>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="first_name"
                label="First Name"
                rules={[{ required: true, message: "Please enter First Name" }]}
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
                rules={[{ required: true, message: "Please enter Last Name" }]}
              >
                <Input style={{ width: "100%" }} placeholder="Doe" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="extension_name" label="Extension Name">
                <Input style={{ width: "100%" }} placeholder="Sr. Jr. III..." />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="birth_date" label="Birth Date">
                <DatePicker></DatePicker>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="home_address" label="Home Address">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="sitio" label="Sitio">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="barangay"
                label="Barangay"
                rules={[
                  { required: true, message: "Please select a Barangay" },
                ]}
              >
                <Select placeholder="Please select a Barangay" showSearch>
                  {barangay.map((item, index) => (
                    <Option key={index} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="blood_type"
                label="Blood Type"
                rules={[
                  { required: true, message: "Please choose Blood Type" },
                ]}
              >
                <Select placeholder="Select Blood Type" showSearch>
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
            <Col span={4}>
              <Form.Item name="contact_number" label="Contact Number">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="email_address" label="Email Address">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="occupation" label="Occupation">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="civil_status"
                label="Civil Status"
                rules={[
                  { required: true, message: "Please choose Civil Status" },
                ]}
              >
                <Select placeholder="Select Civil Status" showSearch>
                  <Option value="Single">Single</Option>
                  <Option value="Married">Married</Option>
                  <Option value="Widowed">Widowed</Option>
                  <Option value="Annuled">Annuled</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please choose a Gender" }]}
              >
                <Select placeholder="Select a Gender" showSearch>
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="lgbt" label="LGBTQ+">
                <Checkbox>LGBTQ+</Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Upload {...props} accept=".csv" maxCount={1}>
                <Button icon={<UploadOutlined />}>
                  Mass Upload Participants (CSV File Only)
                </Button>
              </Upload>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  htmlType="submit"
                  onClick={() => {
                    setParticipants((prevData) => [
                      ...prevData,
                      form.getFieldsValue(),
                    ]);
                    console.log(participants);
                  }}
                >
                  Add Participant
                </Button>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button
                icon={<DeleteOutlined />}
                onClick={() => {
                  setParticipants([]);
                  form.resetFields();
                }}
                danger
              >
                Clear Participants
              </Button>
            </Col>
          </Row>
          <Row>
            <Divider orientation="left">
              <Title level={3}>Participants List</Title>
            </Divider>
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
