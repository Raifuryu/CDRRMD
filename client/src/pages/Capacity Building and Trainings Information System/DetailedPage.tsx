import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import {
  Button,
  Carousel,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Drawer,
  Flex,
  FloatButton,
  Form,
  Input,
  Modal,
  Row,
  Select,
  SelectProps,
  Space,
  Spin,
  Table,
  Typography,
  Upload,
  UploadProps,
  notification,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import {
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
  DeleteRowOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import ButtonCancelTraining from "./ButtonCancelTraining";
import ButtonOpenAAR from "./ButtonOpenAAR";
import ButtonOpenDocumentation from "./ButtonOpenDocumentation";
import ButtonDeleteTraining from "./ButtonDeleteTraining";
import DrawerAddOrganization from "../../components/DrawerAddOrganization";
import ButtonDownloadCertificateCSV from "./ButtonDownloadCertificateCSV";

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Title } = Typography;

const DeatailedPage = () => {
  interface Barangay {
    key: React.Key;
    barangay_id: number;
    fk_city_id: number;
    barangay: string;
  }

  interface Participant {
    training_participant_id: number;
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
    full_address: string;
    sitio: string;
    contact_number: string;
    email_address: string;
  }

  interface Person {
    person_id: string;
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
    training_id: number;
    fk_trainer_id: string;
    fk_trainee_id: number;
    course: string;
    venue: string;
    contact_person: string;
    contact_person_number: string;
    remarks: string;
    start_date: Date;
    end_date: Date;
    after_activity_report: boolean;
    documentations: boolean;
    pax: number;
    status: number;
  }

  interface Course {
    training_course_id: number;
    course: string;
    abbreviation: string;
  }

  interface CompleteOrganization {
    office_id: number;
    fk_barangay_id: number;
    acronym: string;
    office_name: string;
    contact_number: string;
    email_address: string;
    full_address: string;
    sitio: string;
  }

  interface Organization {
    office_id: number;
    acronym: string;
    office_name: string;
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
      render: (value: string) => <div>{value === "true" ? "Yes" : "No"}</div>,
    },
    {
      title: "PWD",
      dataIndex: "isPWD",
      key: "isPWD",
      render: (value: string) => <div>{value === "true" ? "Yes" : "No"}</div>,
    },
    {
      title: "Full Address",
      dataIndex: "full_address",
      key: "full_address",
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
    {
      title: "Code",
      dataIndex: "certificate_code",
      key: "certificate_code",
    },
  ];
  const [messageApi, contextHolder] = notification.useNotification();
  const [participantsForm] = Form.useForm();
  const [trainingForm] = Form.useForm();
  const [existingTrainingParticipants] = Form.useForm();

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<Barangay[]>([]);

  const [persons, setPersons] = useState<Person[]>([]);
  const [trainingParticipantsList, setTrainingParticipantsList] = useState([]);
  const [trainingData, setTrainingData] = useState<Training>();
  const [traineeData, setTraineeData] = useState<CompleteOrganization>();
  const [organization, setOrganization] = useState<Organization[]>();
  const [trainingCourses, setTrainingCourses] = useState<Course[]>([]);
  const [participantsData, setParticipantsData] = useState<Participant[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [totalSelectedPerson, setTotalSelectedPerson] = useState(0);
  const [isMixedTraining, setIsMixedTraining] = useState(false);

  // dummy state
  const [count, setCount] = useState(1);

  const [loading, setLoading] = useState(true);
  const [addParticipantDrawerState, setAddParticipantDrawerState] =
    useState(false);

  const [addParticipantsDrawerState, setAddParticipantsDrawerState] =
    useState(false);

  const [participantsListDrawerState, setParticipantsListDrawerState] =
    useState(false);

  const [documentationModalState, setDocumentationModalState] = useState(false);

  const [isLgbtq, setIsLgbtq] = useState(false);
  const [isPWD, setIsPWD] = useState(false);
  const [isUnemployed, setIsUnemployed] = useState(false);

  const showAddParticipantsDrawer = () => {
    setAddParticipantDrawerState(true);
  };

  const closeAddParticipantsDrawer = () => {
    setAddParticipantDrawerState(false);
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

    const trainingCourseRequest = fetch(
      "http://192.168.1.69:3000/api/training/courses"
    ).then((res) => res.json());

    const barangayRequest = fetch(
      "http://192.168.1.69:3000/api/address/barangays"
    ).then((res) => res.json());

    const personsRequest = fetch("http://192.168.1.69:3000/api/persons").then(
      (res) => res.json()
    );

    Promise.all([
      trainingDetailsRequest,
      trainingCourseRequest,
      barangayRequest,
      personsRequest,
    ])
      .then(([trainingData, trainingCourseData, barangayData, personData]) => {
        setBarangay(barangayData);
        setTrainingCourses(trainingCourseData);
        setTrainingData(trainingData[0]);
        setPersons(personData);
        messageApi["success"]({
          message: "Success",
          description: "Data Fetched Successfully",
          placement: "bottomLeft",
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        messageApi["error"]({
          message: "Error",
          description: "Error updating data" + error,
          placement: "bottomLeft",
        });
      });
  }, [count]);

  useEffect(() => {
    fetch(`http://192.168.1.69:3000/api/training/${trainingId}/trainee`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setTraineeData(data[0]);
        } else {
          setIsMixedTraining(true);
        }
      });
  }, [count]);

  useEffect(() => {
    fetch("http://192.168.1.69:3000/api/agencies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setOrganization(data));
  }, [count]);

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
  }, [count]);

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
          messageApi["error"]({
            message: "Failed to add Participants",
            placement: "bottomLeft",
          });
          throw new Error("Failed to post participants data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Participants data posted successfully:", data);
        messageApi["success"]({
          message: "Participants added successfuly",
          placement: "bottomLeft",
        });
        existingTrainingParticipants.resetFields();
        setTrainingParticipantsList([]);
      })
      .catch((error) => {
        console.error("Error posting participants data:", error.message);
        messageApi["error"]({
          message: "Failed to add Participants",
          placement: "bottomLeft",
        });
      })
      .finally(() => {
        setCount(count + 1);
      });
  };

  const postPerson = (data: {}) => {
    fetch(`http://192.168.1.69:3000/api/persons/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          messageApi["error"]({
            message: "Failed to add Person",
            description: "Failed to Post Person data",
            placement: "bottomLeft",
          });
          throw new Error("Failed to post Person data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Person data posted successfully:", data);
        messageApi["success"]({
          message: "Person added successfuly",
          description: `Person data posted successfully`,
          placement: "bottomLeft",
        });
        participantsForm.resetFields();
      })
      .catch((error) => {
        messageApi["error"]({
          message: "Failed to add Person",
          description: `Error posting Person data: ${error.message}`,
          placement: "bottomLeft",
        });
      })
      .finally(() => {
        setCount(count + 1);
      });
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
        messageApi["success"]({
          message: file.name + ` file uploaded successfully`,
          placement: "bottomLeft",
        });
      },
      error: (error) => {
        console.error("CSV parsing error:", error.message);
        messageApi["error"]({
          message: file.name + ` file upload failed.`,
          placement: "bottomLeft",
        });
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
        // message.error(`${file.name} is not a CSV file`);
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
        messageApi["success"]({
          message: "success",
          description: `${info.file.name} file uploaded successfully`,
          placement: "bottomLeft",
        });
        updateCount();
      } else if (info.file.status === "error") {
        messageApi["error"]({
          message: "Error",
          description: `${info.file.name} file upload failed.`,
          placement: "bottomLeft",
        });
      }
    },
  };

  const documentationProps: UploadProps = {
    name: "file",
    action: `http://192.168.1.69:3000/api/training/${trainingId}/upload/documentation`,
    listType: "picture",

    onChange(info) {
      console.log(info);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        messageApi["success"]({
          message: "success",
          description: `${info.file.name} file uploaded successfully`,
          placement: "bottomLeft",
        });
      } else if (info.file.status === "error") {
        messageApi["error"]({
          message: "Error",
          description: `${info.file.name} file upload failed.`,
          placement: "bottomLeft",
        });
      }
      updateCount();
    },
  };

  // const documentationProps: UploadProps = {
  //   name: "file",

  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     console.log(info);
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  const updateCount = () => {
    setCount(count + 1);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
        value: value.person_id,
      });
    });
  }

  if (loading) {
    return (
      <div className="items-center">
        <Spin />
      </div>
    );
  }

  return (
    <>
      {contextHolder}
      <div className="m-5">
        <Form
          form={trainingForm}
          layout="vertical"
          initialValues={trainingData}
        >
          <div>
            <Title level={2}>Training Details</Title>
            {trainingData?.status === 1 ? (
              <Typography.Title level={4} type="warning">
                Status: Active
              </Typography.Title>
            ) : trainingData?.status === 0 ? (
              <Typography.Title level={4} type="success">
                Status: Done
              </Typography.Title>
            ) : (
              <Typography.Title level={4} type="danger">
                Status: Cancelled
              </Typography.Title>
            )}
          </div>
          <Row gutter={[16, 4]}>
            <Col span={1}>
              <Form.Item
                name="id"
                label="ID"
                initialValue={trainingData?.training_id}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="course" label="Course">
                <Select
                  placeholder="Please select Course"
                  optionFilterProp="label"
                  style={{ width: "100%" }}
                  showSearch
                  disabled
                >
                  {trainingCourses.map((item, index) => (
                    <Option
                      key={index}
                      label={item.course}
                      value={item.training_course_id}
                    >
                      {item.course}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="venue" label="Venue">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="trainer" label="Trainer">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item
                name="start_end_date"
                label="Start - End Date"
                initialValue={[
                  dayjs(trainingData?.start_date),
                  dayjs(trainingData?.end_date),
                ]}
              >
                <RangePicker disabled style={{ width: 250 }} />
              </Form.Item>
            </Col>
            <Col span={1}>
              <Form.Item name="pax" label="Pax">
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="contact_person" label="Contact Person">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="contact_person_number" label="Contact Number">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="remarks" label="Remarks">
                <TextArea
                  disabled
                  rows={1}
                  placeholder="Training Requirements"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 4]}>
            <Col span={"auto"}>
              <Form.Item
                name="upload_aar"
                label="Upload After Activity Report"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload {...AARprops} maxCount={1} accept=".pdf">
                  <Button
                    icon={<UploadOutlined />}
                    disabled={trainingData && trainingData.pax < 5}
                  >
                    Upload (Max: 1)
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item
                name="documentation"
                label="Documentation"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  {...documentationProps}
                  accept="image/png, image/jpeg"
                  multiple
                >
                  <Button
                    icon={<UploadOutlined />}
                    disabled={trainingData && trainingData.pax < 5}
                  >
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item>
                {trainingData?.after_activity_report ? (
                  // <Button>
                  //   <a
                  //     href={`../uploads/trainings/${new Date(
                  //       trainingData.start_date
                  //     ).getFullYear()}/${trainingId}/AAR.pdf`}
                  //     target="_blank"
                  //   >
                  //     Open After Activity Report
                  //   </a>
                  // </Button>
                  <ButtonOpenAAR
                    trainingId={trainingId}
                    trainingYear={new Date(
                      trainingData.start_date
                    ).getFullYear()}
                  />
                ) : (
                  <Button disabled title="Training data not available">
                    After Activity Report
                  </Button>
                )}
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item>
                {trainingData?.documentations ? (
                  <ButtonOpenDocumentation
                    trainingId={trainingId}
                    trainingYear={new Date(
                      trainingData.start_date
                    ).getFullYear()}
                    documentationNumber={1}
                  />
                ) : (
                  <Button disabled title="Training data not available">
                    Documentation 1
                  </Button>
                )}
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item>
                {trainingData?.documentations ? (
                  <ButtonOpenDocumentation
                    trainingId={trainingId}
                    trainingYear={new Date(
                      trainingData.start_date
                    ).getFullYear()}
                    documentationNumber={2}
                  />
                ) : (
                  <Button disabled title="Training data not available">
                    Documentation 2
                  </Button>
                )}
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item>
                {trainingData?.documentations ? (
                  <ButtonOpenDocumentation
                    trainingId={trainingId}
                    trainingYear={new Date(
                      trainingData.start_date
                    ).getFullYear()}
                    documentationNumber={3}
                  />
                ) : (
                  <Button disabled title="Training data not available">
                    Documentation 3
                  </Button>
                )}
              </Form.Item>
            </Col>
            <Col span={"auto"}>
              <Form.Item>
                <ButtonDownloadCertificateCSV
                  training_id={trainingId}
                  disabled={trainingData && trainingData.pax < 5}
                />
              </Form.Item>
            </Col>
            <Col span={"auto"} offset={5}>
              <ButtonDeleteTraining
                trainingId={trainingId}
                trainingStatus={trainingData?.status}
              />
            </Col>
            <Col span={"auto"} offset={0}>
              <ButtonCancelTraining
                trainingId={`${trainingId}`}
                trainingStatus={trainingData?.status}
              />
            </Col>
          </Row>
          {!isMixedTraining ? (
            <div>
              <Row gutter={[16, 4]}>
                <Divider orientation="left">Organization Details</Divider>
                <Col span={8}>
                  <Title level={5}>Organization Name</Title>
                  <Input defaultValue={traineeData?.office_name} disabled />
                </Col>
                <Col span={8}>
                  <Title level={5}>Organization Contact</Title>
                  <Input
                    defaultValue={traineeData?.contact_number}
                    addonBefore="+63"
                    placeholder="123456789"
                    disabled
                  />
                </Col>
                <Col span={8}>
                  <Title level={5}>Organization Email Address</Title>
                  <Input
                    defaultValue={traineeData?.email_address}
                    placeholder=""
                    disabled
                  />
                </Col>
              </Row>
              <Row gutter={[16, 4]}>
                <Col span={8}>
                  <Title level={5}>House/Apt/Bldg. No/St. Name</Title>
                  <Input defaultValue={traineeData?.full_address} disabled />
                </Col>
                <Col span={8}>
                  <Title level={5}>Sitio</Title>
                  <Input defaultValue={traineeData?.sitio} disabled />
                </Col>
                <Col span={8}>
                  <Title level={5}>Organization Barangay</Title>
                  <Input
                    defaultValue={
                      (
                        barangay.find(
                          (item) =>
                            item.barangay_id === traineeData?.fk_barangay_id
                        ) || {}
                      ).barangay
                    }
                    disabled
                  />
                </Col>
              </Row>
            </div>
          ) : (
            <div>
              <Divider orientation="left">Organization Details</Divider>
              <Row>
                <Col>
                  <Typography.Title level={4}>
                    Participants are coming from different offices/agencies
                  </Typography.Title>
                </Col>
              </Row>
            </div>
          )}
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
                htmlType="reset"
                onClick={() => {
                  postTrainingParticipants();
                  closeParticipantsListDrawer();
                }}
              >
                Submit
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" form={existingTrainingParticipants}>
            <Title level={5}>{totalSelectedPerson} Selected</Title>
            <Form.Item name="existing-participants">
              <Select
                optionFilterProp="label"
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select Participants"
                onChange={handleChange}
                optionLabelProp="label"
                options={options}
              />
            </Form.Item>
            <Row>
              <Col span={24}>
                <Button
                  className="mt-5"
                  onClick={() => {
                    showAddParticipantsDrawer();
                  }}
                >
                  Register a Participant
                </Button>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={24}>
                <Button
                  className="mt-5"
                  onClick={() => {
                    setAddParticipantsDrawerState(true);
                  }}
                  disabled
                >
                  Register Multiple Participants
                </Button>
              </Col>
            </Row>
          </Form>
          {/* Add Participants Drawer */}
          <Drawer
            title="Register Participant"
            width={"auto"}
            onClose={closeAddParticipantsDrawer}
            open={addParticipantDrawerState}
            extra={
              <Space>
                <Button
                  icon={<DeleteRowOutlined />}
                  onClick={() => {
                    participantsForm.resetFields();
                    setIsUnemployed(false);
                  }}
                  danger
                >
                  Reset Fields
                </Button>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => participantsForm.submit()}
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
                  isPWD: isPWD.toString() || "false",
                  isUnemployed: isUnemployed.toString() || "false",
                  office: e.office,
                  full_address: e.full_address,
                  sitio: e.sitio,
                  barangay: e.barangay,
                };
                postPerson(user);
                setAddParticipantDrawerState(false);
                setIsUnemployed(false);
              }}
            >
              <Divider orientation="left" orientationMargin="0">
                <Title level={4}>Personnal Information</Title>
              </Divider>
              <Row gutter={16}>
                <Col span={5}>
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
                <Col span={5}>
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
                <Col span={5}>
                  <Form.Item name="extension_name" label="Extension Name">
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Sr. Jr. III..."
                    />
                  </Form.Item>
                </Col>
                <Col span={5}>
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
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={8}>
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
                      <Option value="Unkown">Unknown</Option>
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
              </Row>
              <Row gutter={16}>
                <Col span={"auto"}>
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
                <Col span={"auto"}>
                  <Form.Item name="isPWD" label="PWD" valuePropName="checked">
                    <Checkbox
                      checked={isPWD}
                      defaultChecked={false}
                      onClick={() => {
                        setIsPWD(!isPWD);
                      }}
                    >
                      is PWD
                    </Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              <Divider orientation="left">
                <Title level={5}>Address</Title>
              </Divider>
              <Row gutter={16}>
                <Col span={"auto"}>
                  <Form.Item
                    name="full_address"
                    label="House/Apt/Bldg. No/St. Name"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={"auto"}>
                  <Form.Item name="sitio" label="Sitio">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={"auto"}>
                  <Form.Item name="barangay" label="Barangay">
                    <Select
                      placeholder="Select a Barangay"
                      optionFilterProp="label"
                      showSearch
                    >
                      {barangay.map((item, index) => (
                        <Option
                          key={index}
                          label={item.barangay}
                          value={item.barangay_id}
                        >
                          {item.barangay}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Divider orientation="left">
                <Title level={5}>Contact Information</Title>
              </Divider>
              <Row gutter={16}>
                <Col span={12}>
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
                <Col span={12}>
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
              </Row>
              <Divider orientation="left">
                <Title level={5}>Career Information</Title>
              </Divider>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="isUnemployed"
                    label="Unemployed/Undefined"
                    valuePropName="checked"
                  >
                    <Checkbox
                      checked={true}
                      defaultChecked={false}
                      onClick={() => {
                        setIsUnemployed(!isUnemployed);
                      }}
                    >
                      Unemployed
                    </Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              {!isUnemployed ? (
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="office"
                      label="Office/Agency"
                      rules={
                        isUnemployed
                          ? []
                          : [
                              {
                                required: true,
                                message: "Please select an Office/Agency",
                              },
                            ]
                      }
                    >
                      <Select
                        placeholder="Please select Office"
                        optionFilterProp="label"
                        showSearch
                      >
                        {organization?.map((item, index) => (
                          <Option
                            key={index}
                            label={item.office_name}
                            value={item.office_id}
                          >
                            {item.office_name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="occupation"
                      label="Occupation"
                      rules={
                        isUnemployed
                          ? []
                          : [
                              {
                                required: true,
                                message: "Please enter Occupation",
                              },
                            ]
                      }
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <DrawerAddOrganization updateCount={updateCount} />
                </Row>
              ) : (
                <></>
              )}
            </Form>
          </Drawer>
          <Drawer
            title="Add Multiple Participants"
            width={"auto"}
            onClose={() => setAddParticipantsDrawerState(false)}
            open={addParticipantsDrawerState}
          >
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
                        setAddParticipantsDrawerState(false);
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
                  dataSource={participants.map((item) => ({
                    ...item,
                    key: item.training_participant_id,
                  }))}
                  columns={ParticipantColumn}
                />
              </Col>
            </Row>
          </Drawer>
        </Drawer>

        <Divider orientation="left">Participants</Divider>
        <Table
          dataSource={participantsData.flat().map((item) => ({
            ...item,
            key: `${item.training_participant_id}`,
          }))}
          columns={ParticipantColumn}
        />
      </div>
      <Modal
        centered
        title="Documentation"
        open={documentationModalState}
        onCancel={() => setDocumentationModalState(false)}
        width={1000}
      >
        <Carousel effect="fade">
          {/* {documentationFiles && trainingData ? (
            documentationFiles.map((file, index) => (
              <div key={index}>
                <Image width={200} src={file} />
              </div>
            ))
          ) : (
            <div>No documentation files available</div>
          )} */}
        </Carousel>
      </Modal>
    </>
  );
};

export default DeatailedPage;
