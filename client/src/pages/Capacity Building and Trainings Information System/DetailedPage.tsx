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
import TextArea from "antd/es/input/TextArea";
import {
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
  DeleteRowOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Title } = Typography;

const DeatailedPage = () => {
  interface Barangay {
    id: number;
    fk_city_id: number;
    barangay: string;
  }

  interface Participant {
    first_name: string;
    middle_name: string;
    last_name: string;
    extension_name: string;
    nickname: string;
    gender: string;
    isLGBTQ: string;
    civil_status: string;
    birth_date: string;
    birth_place: string;
    occupation: string;
    blood_type: string;
    barangay: string;
    street: string;
    sitio: string;
    contact_number: string;
    email_address: string;
  }

  interface Training {
    key: React.Key;
    id: number;
    fk_office_id: number;
    title: string;
    venue: string;
    trainer: string;
    contact_person: string;
    contact_person_number: string;
    remarks: string;
    start_date: Date;
    end_date: Date;
    pax: number;
    status: number;
  }

  interface Organization {
    id: number;
    fk_barangay_id: number;
    acronym: string;
    office_name: string;
    office_contact_number: string;
    office_email_address: string;
    full_address: string;
    sitio: string;
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
      title: "Nickname",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
    {
      title: "Birth Date",
      dataIndex: "birth_date",
      key: "birth_date",
    },
    {
      title: "Blood Type",
      dataIndex: "blood_type",
      key: "blood_type",
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Civil Status",
      dataIndex: "civil_status",
      key: "civil_status",
    },
    {
      title: "Contact Number",
      dataIndex: "contact_number",
      key: "contact_number",
    },

    {
      title: "E-mail Address",
      dataIndex: "email_address",
      key: "email_address",
    },
    {
      title: "LGBTQ+",
      dataIndex: "isLGBTQ",
      key: "isLGBTQ",
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
    },
    {
      title: "Sitio",
      dataIndex: "sitio",
      key: "sitio",
    },
    {
      title: "Barangay",
      dataIndex: "barangay",
      key: "lgbtq",
    },
  ];

  const [participantsForm] = Form.useForm();
  const [trainingForm] = Form.useForm();

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<Barangay[]>([]);

  const [trainingData, setTrainingData] = useState<Training>();
  const [organizationData, setOrganizationData] = useState<Organization>();
  const [participantsData, setParticipantsData] = useState<Participant[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [loading, setLoading] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const [isLgbtq, setIsLgbtq] = useState(false);

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
        setBarangay(barangayData);
        setTrainingData(trainingData[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`http://192.168.1.69:3000/training/${trainingId}/participants`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Check if data is available before updating the state
          setParticipantsData(data);

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching organization data:", error);
          setLoading(false);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (trainingData?.fk_office_id) {
      fetch(
        `http://192.168.1.69:3000/organizations/${trainingData.fk_office_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            // Check if data is available before updating the state
            setOrganizationData(data[0]);
          }

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching organization data:", error);
          setLoading(false);
        });
    }
  }, [trainingData]);

  const postParticipantsData = async (participants: Participant[]) => {
    setLoading(true);
    await fetch(
      `http://192.168.1.69:3000/training/${trainingId}/create/participants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(participants),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle success, if needed
        console.log("Participants data posted successfully:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error posting participants data:", error);
      });
    setLoading(false);
  };

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
      <Form form={trainingForm} layout="vertical">
        <Title level={2}>Training Details</Title>
        <Row gutter={[16, 4]}>
          <Col span={1}>
            <Form.Item name="id" label="ID">
              <Input defaultValue={trainingData?.id} disabled />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="title" label="Title">
              <Input defaultValue={trainingData?.title} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="venue" label="Venue">
              <Input defaultValue={trainingData?.venue} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="trainer" label="Trainer">
              <Input defaultValue={trainingData?.trainer} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="start_end_date" label="Start - End Date">
              <RangePicker
                defaultValue={[
                  dayjs(trainingData?.start_date),
                  dayjs(trainingData?.end_date),
                ]}
                style={{ width: 250 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item name="pax" label="Pax">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="contact_person" label="Contact Person">
              <Input defaultValue={trainingData?.contact_person} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="contact_number" label="Contact Number">
              <Input defaultValue={trainingData?.contact_person_number} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="remarks" label="Remarks">
              <TextArea
                defaultValue={trainingData?.remarks}
                rows={1}
                placeholder="Training Requirements"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 4]}>
          <Col span={4}>
            <Form.Item name="upload_aar" label="Upload After Activity Report">
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="documentation" label="Documentation">
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                maxCount={3}
              >
                <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
              </Upload>
            </Form.Item>
          </Col>
          {/* <Col span={4}>
            <Form.Item>
              <Button>Update</Button>
            </Form.Item>
          </Col> */}
        </Row>
        <Row gutter={[16, 4]}>
          <Divider orientation="left">Organization Details</Divider>
          <Col span={8}>
            <Title level={5}>Organization Name</Title>
            <Input defaultValue={organizationData?.office_name} disabled />
          </Col>
          <Col span={8}>
            <Title level={5}>Organization Contact</Title>
            <Input
              defaultValue={organizationData?.office_contact_number}
              addonBefore="+63"
              placeholder="123456789"
              disabled
            />
          </Col>
          <Col span={8}>
            <Title level={5}>Organization Email Address</Title>
            <Input
              defaultValue={organizationData?.office_email_address}
              placeholder=""
              disabled
            />
          </Col>
        </Row>
        <Row gutter={[16, 4]}>
          <Col span={8}>
            <Title level={5}>Full Address</Title>
            <Input defaultValue={organizationData?.full_address} disabled />
          </Col>
          <Col span={8}>
            <Title level={5}>Sitio</Title>
            <Input defaultValue={organizationData?.sitio} disabled />
          </Col>
          <Col span={8}>
            <Title level={5}>Organization Barangay</Title>
            <Input
              defaultValue={
                (
                  barangay.find(
                    (item) => item.id === organizationData?.fk_barangay_id
                  ) || {}
                ).barangay
              }
              disabled
            />
          </Col>
        </Row>
      </Form>
      {/* <Row gutter={[16, 24]}>
        <Col span={2} offset={22}>
          <Button>Update</Button>
        </Col>
      </Row> */}
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
        width={"auto"}
        onClose={closeDrawer}
        open={drawerState}
        extra={
          <Space>
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button
              onClick={() => {
                postParticipantsData(participants);
                setDrawerState(false);
              }}
            >
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          form={participantsForm}
          onFinish={(e) => {
            let user = {
              first_name: e.first_name,
              middle_name: e.middle_name,
              last_name: e.last_name,
              extension_name: e.extension_name,
              nickname: e.nickname,
              occupation: e.occupation,
              birth_date: e["birth_date"].format("YYYY-MM-DD"),
              birth_place: e.birth_place,
              blood_type: e.blood_type,
              gender: e.gender,
              civil_status: e.civil_status,
              contact_number: e.contact_number,
              email_address: e.email_address,
              isLGBTQ: isLgbtq.toString(),
              street: e.street,
              sitio: e.sitio,
              barangay: e.barangay,
            };

            setParticipants((prevData) => [...prevData, user]);
          }}
        >
          <Title level={3}>Add Participants</Title>
          <Divider orientation="left">
            <Title level={3}>Participant Details</Title>
          </Divider>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item
                name="first_name"
                label="First Name"
                rules={[{ required: true, message: "Please enter First Name" }]}
              >
                <Input placeholder="John" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="middle_name" label="Middle Name">
                <Input style={{ width: "100%" }} placeholder="The" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="last_name"
                label="Last Name"
                rules={[{ required: true, message: "Please enter Last Name" }]}
              >
                <Input style={{ width: "100%" }} placeholder="Doe" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="extension_name" label="Extension Name">
                <Input style={{ width: "100%" }} placeholder="Sr. Jr. III..." />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="nickname"
                label="Nickname"
                rules={[{ required: true, message: "Please enter Nickname" }]}
              >
                <Input style={{ width: "100%" }} placeholder="John the D" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="occupation"
                label="Occupation"
                rules={[{ required: true, message: "Please enter Occupation" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item
                name="birth_date"
                label="Birth Date"
                rules={[{ required: true, message: "Please enter Birth Date" }]}
              >
                <DatePicker
                  defaultValue={dayjs("2024-01-30", "YYYY-MM-DD")}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="birth_place"
                label="Birth Place"
                rules={[
                  { required: true, message: "Please enter Birth Place" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="street" label="Street">
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
                    <Option key={index} value={item.id}>
                      {item.barangay}
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
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item
                name="contact_number"
                label="Contact Number"
                rules={[
                  { required: true, message: "Please enter Contact Number" },
                ]}
              >
                <Input addonBefore="+63" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="email_address"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter E-mail Address" },
                ]}
              >
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
                <Select placeholder="Select a Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="isLGBTQ" label="LGBTQ+" valuePropName="checked">
                <Checkbox
                  checked={isLgbtq}
                  defaultChecked={false}
                  onClick={() => {
                    setIsLgbtq(!isLgbtq);
                  }}
                >
                  Member of LGBTQ+ Community
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={"auto"}>
              <Upload {...props} accept=".csv" maxCount={1}>
                <Button icon={<UploadOutlined />}>
                  Mass Upload Participants (CSV File Only)
                </Button>
              </Upload>
            </Col>
            <Col span={"auto"}>
              <Form.Item>
                <Button icon={<PlusOutlined />} htmlType="submit">
                  Add Participant
                </Button>
              </Form.Item>
            </Col>
            <Col span={"Auto"}>
              <Button
                icon={<DeleteRowOutlined />}
                onClick={() => {
                  participantsForm.resetFields();
                }}
                danger
              >
                Reset Fields
              </Button>
            </Col>
            <Col span={6}>
              <Button
                icon={<DeleteOutlined />}
                onClick={() => {
                  setParticipants([]);
                  participantsForm.resetFields();
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
      <Table dataSource={participantsData.flat()} columns={ParticipantColumn} />
    </>
  );
};

export default DeatailedPage;
