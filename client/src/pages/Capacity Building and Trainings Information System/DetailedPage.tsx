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
  SelectProps,
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
    key: React.Key;
    id: number;
    fk_city_id: number;
    barangay: string;
  }

  interface Participant {
    key: React.Key;
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

  interface Person {
    key: React.Key;
    id: string;
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
    after_activity_report: boolean;
    documentation: boolean;
    pax: number;
    status: number;
  }

  interface Organization {
    key: React.Key;
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
      title: "Birth Place",
      dataIndex: "birth_place",
      key: "birth_place",
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
      key: "barangay",
    },
  ];

  const [participantsForm] = Form.useForm();
  const [trainingForm] = Form.useForm();

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<Barangay[]>([]);

  const [persons, setPersons] = useState<Person[]>([]);
  const [trainingParticipantsList, setTrainingParticipantsList] = useState([]);
  const [trainingData, setTrainingData] = useState<Training>();
  const [organizationData, setOrganizationData] = useState<Organization>();
  const [participantsData, setParticipantsData] = useState<Participant[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [totalSelectedPerson, setTotalSelectedPerson] = useState(0);

  const [loading, setLoading] = useState(true);
  const [addParticipantsDrawerState, setAddParticipantsDrawerState] =
    useState(false);

  const [participantsListDrawerState, setParticipantsListDrawerState] =
    useState(false);

  const [isLgbtq, setIsLgbtq] = useState(false);

  const showAddParticipantsDrawer = () => {
    setAddParticipantsDrawerState(true);
  };

  const closeAddParticipantsDrawer = () => {
    setAddParticipantsDrawerState(false);
  };

  const showParticipantsListDrawer = () => {
    setParticipantsListDrawerState(true);
  };

  const closeParticipantsListDrawer = () => {
    setParticipantsListDrawerState(false);
  };

  useEffect(() => {
    const trainingDetailsRequest = fetch(
      `http://192.168.1.69:3000/api/training/${trainingId}`
    ).then((res) => res.json());

    const barangayRequest = fetch(
      "http://192.168.1.69:3000/api/address/barangay"
    ).then((res) => res.json());

    const personsRequest = fetch("http://192.168.1.69:3000/api/persons").then(
      (res) => res.json()
    );

    Promise.all([trainingDetailsRequest, barangayRequest, personsRequest])
      .then(([trainingData, barangayData, personData]) => {
        setBarangay(barangayData);
        setTrainingData(trainingData[0]);
        setPersons(personData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(
        `http://192.168.1.69:3000/api/training/${trainingId}/participants`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
        `http://192.168.1.69:3000/api/agencies/${trainingData.fk_office_id}`,
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

  const postTrainingParticipants = () => {
    fetch(
      `http://192.168.1.69:3000/api/training/${trainingId}/create/participants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainingParticipantsList),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post participants data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Participants data posted successfully:", data);
        // Optionally, you can update the component state or trigger other actions upon successful posting
      })
      .catch((error) => {
        console.error("Error posting participants data:", error.message);
      });
  };

  const postPerson = (data: {}) => {
    setLoading(true);
    fetch(`http://192.168.1.69:3000/api/persons/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to post participants data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Participants data posted successfully:", data);
        // Optionally, you can update the component state or trigger other actions upon successful posting
      })
      .catch((error) => {
        console.error("Error posting participants data:", error.message);
      })
      .then(() => setLoading(false));
  };

  // const postParticipantsData = async (participants: Participant[]) => {
  //   setLoading(true);
  //   await fetch(
  //     `http://192.168.1.69:3000/api/training/${trainingId}/create/participants`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(participants),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle success, if needed
  //       console.log("Participants data posted successfully:", data);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error posting participants data:", error);
  //     });
  //   setLoading(false);
  // };

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

  const AARprops: UploadProps = {
    name: "file",
    action: `http://192.168.1.69:3000/api/training/${trainingId}/upload/AAR`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(info);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleChange = (value: []) => {
    setTotalSelectedPerson(value.length);
    setTrainingParticipantsList(value);
  };

  const options: SelectProps["options"] = [];

  if (persons) {
    persons.map((value) => {
      options.push({
        label:
          value.first_name + " " + value.middle_name + " " + value.last_name,
        value: value.id,
      });
    });
  }

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      <div className="m-5">
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
              {trainingData?.after_activity_report ? (
                <Form.Item
                  name="upload_aar"
                  label="Upload After Activity Report"
                >
                  <Upload {...AARprops} maxCount={1} accept=".pdf">
                    <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                  </Upload>
                </Form.Item>
              ) : (
                <Button>Open AAR</Button>
              )}
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
              onClick={showParticipantsListDrawer}
              style={{ right: 94 }}
              icon={<PlusOutlined />}
            />
          </Flex>
        </Flex>
        {/* Select Participants List Drawer */}
        <Drawer
          title="Add Participants"
          width={360}
          onClose={closeParticipantsListDrawer}
          open={participantsListDrawerState}
          extra={
            <Space>
              <Button onClick={closeParticipantsListDrawer}>Cancel</Button>
              <Button
                onClick={() => {
                  postTrainingParticipants();
                }}
              >
                Submit
              </Button>
            </Space>
          }
        >
          <Title level={5}>{totalSelectedPerson} Selected</Title>
          <Select
            optionFilterProp="label"
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Participants"
            onChange={handleChange}
            optionLabelProp="label"
            options={options}
            optionRender={(option) => <Space>{option.data.label}</Space>}
          />
          <Button
            className="mt-5"
            onClick={() => {
              showAddParticipantsDrawer();
            }}
          >
            Register a Participant
          </Button>
          {/* Add Participants Drawer */}
          <Drawer
            title="Register Participants"
            width={"auto"}
            onClose={closeAddParticipantsDrawer}
            open={addParticipantsDrawerState}
          >
            <Form
              layout="vertical"
              form={participantsForm}
              onFinish={(e) => {
                let user = {
                  key: "",
                  id: "",
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
                  isLGBTQ: isLgbtq.toString() || "false",
                  street: e.street,
                  sitio: e.sitio,
                  barangay: e.barangay,
                };
                // console.log(user);
                postPerson(user);
                // participantsForm.resetFields();
              }}
            >
              <Divider orientation="left">
                <Title level={4}>Individual Registration</Title>
              </Divider>
              <Row gutter={16}>
                <Col span={4}>
                  <Form.Item
                    name="first_name"
                    label="First Name"
                    rules={[
                      { required: true, message: "Please enter First Name" },
                    ]}
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
                    rules={[
                      { required: true, message: "Please enter Last Name" },
                    ]}
                  >
                    <Input style={{ width: "100%" }} placeholder="Doe" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item name="extension_name" label="Extension Name">
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Sr. Jr. III..."
                    />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    name="nickname"
                    label="Nickname"
                    rules={[
                      { required: true, message: "Please enter Nickname" },
                    ]}
                  >
                    <Input style={{ width: "100%" }} placeholder="John the D" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    name="occupation"
                    label="Occupation"
                    rules={[
                      { required: true, message: "Please enter Occupation" },
                    ]}
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
                    rules={[
                      { required: true, message: "Please enter Birth Date" },
                    ]}
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
                    <Select
                      optionFilterProp="label"
                      placeholder="Please select a Barangay"
                      showSearch
                    >
                      {barangay.map((item, index) => (
                        <Option
                          key={index}
                          label={item.barangay}
                          value={item.id}
                        >
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
                      {
                        required: true,
                        message: "Please enter Contact Number",
                      },
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
                      {
                        required: true,
                        message: "Please enter E-mail Address",
                      },
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
                    rules={[
                      { required: true, message: "Please choose a Gender" },
                    ]}
                  >
                    <Select placeholder="Select a Gender">
                      <Option value="Male">Male</Option>
                      <Option value="Female">Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    name="isLGBTQ"
                    label="LGBTQ+"
                    valuePropName="checked"
                  >
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
                  <Form.Item>
                    <Button icon={<PlusOutlined />} htmlType="submit">
                      Add Participant
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={"Auto"}>
                  <Form.Item>
                    <Button
                      icon={<DeleteRowOutlined />}
                      onClick={() => {
                        participantsForm.resetFields();
                      }}
                      danger
                    >
                      Reset Fields
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Divider orientation="left">
                  <Title level={4}>Multiple Registration(Upload CSV)</Title>
                </Divider>
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
                    <Button
                      icon={<PlusOutlined />}
                      onClick={() => {
                        participants.map((value) => {
                          postPerson(value);
                          setParticipants([]);
                        });
                      }}
                    >
                      Submit All
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={"auto"}>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setParticipants([]);
                    }}
                    danger
                  >
                    Clear Table
                  </Button>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Table
                    dataSource={participants}
                    columns={ParticipantColumn}
                  />
                </Col>
              </Row>
            </Form>
          </Drawer>
        </Drawer>
        <Divider orientation="left">Participants</Divider>
        <Table
          dataSource={participantsData.flat()}
          columns={ParticipantColumn}
        />
      </div>
    </>
  );
};

export default DeatailedPage;
