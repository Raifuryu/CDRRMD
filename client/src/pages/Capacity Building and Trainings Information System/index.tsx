import {
  Button,
  Col,
  DatePicker,
  Divider,
  Drawer,
  FloatButton,
  Form,
  Input,
  Row,
  Select,
  Space,
  Spin,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Option } = Select;
const { Title } = Typography;

const CBTISLayout = () => {
  interface Barangay {
    key: React.Key;
    id: number;
    fk_city_id: number;
    barangay: string;
  }

  interface Training {
    key: React.Key;
    id: number;
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
    key: React.Key;
    id: number;
    office_name: string;
    office_contact_number: string;
    office_email_address: string;
    full_address: string;
    sitio: string;
    barangay: string;
  }

  const trainingColumn: TableColumnsType<Training> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: {
        compare: (a, b) => a.title.length - b.title.length,
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
      title: "Trainer",
      dataIndex: "trainer",
      key: "trainer",
      sorter: {
        compare: (a, b) => a.trainer.length - b.trainer.length,
      },
    },
    {
      title: "Contact Person",
      dataIndex: "contact_person",
      key: "contact_person",
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
      sorter: (a, b) =>
        new Date(a.start_date).getTime() - new Date(b.start_date).getTime(),
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
      sorter: (a, b) => a.status - b.status,
      render: (status: number) => (
        <Title level={5} type={status === 1 ? "warning" : "success"}>
          {status === 1 ? "Active" : "Done"}
        </Title>
      ),
    },
    {
      title: "View",
      dataIndex: "id",
      render: (id: string) => (
        <Link to={`/training/${id}`} className="underline text-info">
          View
        </Link>
      ),
    },
  ];

  const [trainingForm] = Form.useForm();
  const [organizationForm] = Form.useForm();

  const [trainingDrawer, setTrainingDrawer] = useState(false);
  const [organizationDrawer, setOrganizationDrawer] = useState(false);

  const [loading, setLoading] = useState(true);

  const [barangay, setBarangay] = useState<Barangay[]>([]);
  const [trainingData, setTrainingData] = useState<Training[]>([]);
  const [organizationData, setOrganizationData] = useState<Organization[]>([]);

  useEffect(() => {
    const trainingData = fetch("http://192.168.1.69:3000/api/training").then(
      (res) => res.json()
    );

    const barangayData = fetch(
      "http://192.168.1.69:3000/api/address/barangay"
    ).then((res) => res.json());

    const organizationsData = fetch(
      "http://192.168.1.69:3000/api/agencies"
    ).then((res) => res.json());

    Promise.all([trainingData, barangayData, organizationsData])
      .then(([trainingData, barangayData, organizationsData]) => {
        setTrainingData(trainingData);
        setBarangay(barangayData);
        setOrganizationData(organizationsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error appropriately
      })
      .finally(() => setLoading(false));
  }, [loading]);

  const postOrganization = async (values: any) => {
    setLoading(true);
    try {
      await fetch("http://192.168.1.69:3000/api/agencies/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error("Error adding data:" + error);
    } finally {
      setLoading(false);
    }
  };

  const postTraining = async (values: any) => {
    setLoading(true);
    try {
      console.log(values);
      await fetch("http://192.168.1.69:3000/api/training/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.error("Error adding data:" + error);
      console.log(values);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      <div className="flex flex-col">
        <Typography.Title level={1}>
          Capacity Building and Training Information System
        </Typography.Title>
        <div className="flex">
          <Table dataSource={trainingData} columns={trainingColumn} />
        </div>

        <FloatButton
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setTrainingDrawer(true)}
          tooltip={<div>Add Training</div>}
        />

        <Drawer
          title="Add Training"
          width={"auto"}
          onClose={() => {
            setTrainingDrawer(false);
          }}
          open={trainingDrawer}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button
                onClick={() => {
                  setTrainingDrawer(false);
                }}
              >
                Cancel
              </Button>
              <Button
                htmlType="submit"
                onClick={() => {
                  trainingForm.submit();
                }}
              >
                Submit
              </Button>
            </Space>
          }
        >
          <Form
            layout="vertical"
            form={trainingForm}
            onFinish={() => {
              const formData = trainingForm.getFieldsValue();

              const dataArray = {
                title: formData.title,
                venue: formData.venue,
                trainer: formData.trainer,
                trainee: formData.trainee,
                contact_person: formData.contact_person,
                contact_person_number: formData.contact_person_number,
                remarks: formData.remarks,
                start_date: dayjs(formData.start_end_date[0]).format(
                  "YYYY-MM-DD"
                ),
                end_date: dayjs(formData.start_end_date[1]).format(
                  "YYYY-MM-DD"
                ),
              };
              // console.log(dataArray);
              postTraining(dataArray);
              setTrainingDrawer(false);

              trainingForm.resetFields;
            }}
          >
            <Divider orientation="left">Training Details</Divider>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="title"
                  label="Training Title"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Training Title",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="venue"
                  label="Training Venue"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Training Venue",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="trainer"
                  label="Trainer"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Trainer",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="start_end_date"
                  label="Start - End Date"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Start to End Date",
                    },
                  ]}
                >
                  <RangePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="contact_person"
                  label="Contact Person"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Contact Person",
                    },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="contact_person_number"
                  label="Contact Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Contact Number",
                    },
                  ]}
                >
                  <Input placeholder="09123456789" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item name="remarks" label="Remarks">
                  <TextArea rows={6} placeholder="Training Requirements" />
                </Form.Item>
              </Col>
            </Row>
            <Divider orientation="left">Organization Details</Divider>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="trainee"
                  label="Organization"
                  rules={[
                    {
                      required: true,
                      message: "Please select Organization to Train",
                    },
                  ]}
                >
                  <Select
                    placeholder="Please select an Organization"
                    optionFilterProp="label"
                    style={{ width: "100%" }}
                    showSearch
                  >
                    {organizationData.map((item, index) => (
                      <Option
                        key={index}
                        label={item.office_name}
                        value={item.id}
                      >
                        {item.office_name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Button
                onClick={() => {
                  setOrganizationDrawer(true);
                }}
              >
                Add Organization
              </Button>
            </Row>
          </Form>
          <Drawer
            title="Add Organization"
            width={"auto"}
            onClose={() => {
              setOrganizationDrawer(false);
            }}
            open={organizationDrawer}
            styles={{
              body: {
                paddingBottom: 80,
              },
            }}
            extra={
              <Space>
                <Button
                  onClick={() => {
                    setOrganizationDrawer(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  htmlType="submit"
                  onClick={() => organizationForm.submit()}
                >
                  Submit
                </Button>
              </Space>
            }
          >
            {/* Organization */}
            <Form
              layout="vertical"
              form={organizationForm}
              onFinish={() => {
                setLoading(true);
                const formData = organizationForm.getFieldsValue();

                const dataArray = {
                  organization_name: formData.organization_name,
                  acronym: formData.acronym,
                  contact_number: formData.contact_number,
                  email_address: formData.email_address,
                  full_address: formData.full_address,
                  sitio: formData.sitio,
                  barangay: formData.barangay,
                };
                // console.log(organizationForm.getFieldsValue());
                postOrganization(dataArray);
                organizationForm.resetFields();

                setOrganizationDrawer(false);
                setLoading(false);
              }}
            >
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item
                    name="organization_name"
                    label="Organization Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Organization Name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name="acronym" label="Acronym">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="contact_number"
                    label="Organization Contact"
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
                    label="Organization E-mail"
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
              <Divider orientation="left">Organization Address</Divider>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item name="full_address" label="Full Address">
                    <Input placeholder="Enter Home Address" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="sitio" label=" Sitio">
                    <Input placeholder="Input a Sitio" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="barangay"
                    label="Barangay"
                    rules={[
                      { required: true, message: "Please select a Barangay" },
                    ]}
                  >
                    <Select
                      placeholder="Select a Barangay"
                      optionFilterProp="label"
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
              </Row>
            </Form>
          </Drawer>
        </Drawer>
      </div>
    </>
  );
};

export default CBTISLayout;
