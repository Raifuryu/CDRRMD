import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Drawer,
  FloatButton,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
  notification,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

const FloatButtonDrawer = () => {
  interface Barangay {
    key: React.Key;
    barangay_id: number;
    fk_city_id: number;
    barangay: string;
  }

  interface Course {
    key: React.Key;
    training_course_id: number;
    course: string;
    abbreviation: string;
  }

  interface Organization {
    key: React.Key;
    office_id: number;
    office_name: string;
    office_contact_number: string;
    office_email_address: string;
    full_address: string;
    sitio: string;
    barangay: string;
  }

  const [messageApi, contextHolder] = notification.useNotification();
  const [trainingForm] = Form.useForm();
  const [organizationForm] = Form.useForm();

  const [trainingDrawer, setTrainingDrawer] = useState(false);
  const [organizationDrawer, setOrganizationDrawer] = useState(false);

  const [barangay, setBarangay] = useState<Barangay[]>([]);
  const [trainingCourses, setTrainingCourses] = useState<Course[]>([]);
  const [organizationData, setOrganizationData] = useState<Organization[]>([]);

  useEffect(() => {}, []);

  const postOrganization = async (values: any) => {
    try {
      await fetch("http://192.168.1.69:3000/api/agencies/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      messageApi["success"]({
        message: "Organization Added Successfully",
        placement: "bottomLeft",
      });
    } catch (error) {
      console.error("Error adding data:" + error);
      messageApi["error"]({
        message: "Failed to add Organization",
        description: "Error adding data:" + error,
        placement: "bottomLeft",
      });
    }
  };

  const postTraining = async (values: any) => {
    try {
      console.log(values);
      await fetch("http://192.168.1.69:3000/api/training/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      messageApi["success"]({
        message: "Training Created",
      });
    } catch (error) {
      console.error("Error adding data:" + error);
      console.log(values);
      messageApi["error"]({
        message: "Failed to create Training",
        description: "Error adding data:" + error,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        description="Add"
        shape="square"
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
              trainer: formData.trainer,
              trainee: formData.trainee,
              course: formData.course,
              venue: formData.venue,
              contact_person: formData.contact_person,
              contact_person_number: formData.contact_person_number,
              remarks: formData.remarks,
              start_date: dayjs(formData.start_end_date[0]).format(
                "YYYY-MM-DD"
              ),
              end_date: dayjs(formData.start_end_date[1]).format("YYYY-MM-DD"),
            };
            postTraining(dataArray);
            setTrainingDrawer(false);
            trainingForm.resetFields();
          }}
        >
          <Divider orientation="left">Training Details</Divider>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="course"
                label="Training Course"
                rules={[
                  {
                    required: true,
                    message: "Please enter Training Title",
                  },
                ]}
              >
                <Select
                  placeholder="Please select Course"
                  optionFilterProp="label"
                  style={{ width: "100%" }}
                  showSearch
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
              <Form.Item name="trainer" label="Trainer" initialValue={5}>
                <Select options={[{ value: 5, label: "CDRRMD" }]} disabled />
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
            <Col span={24}>
              <Form.Item name="remarks" label="Remarks">
                <TextArea
                  rows={6}
                  placeholder="Trainers, Training Requirements"
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider orientation="left">Organization Details</Divider>
          <Row gutter={16}>
            <Col span={"auto"}>
              <Form.Item>
                <Checkbox onChange={() => {}}>Mixed Participants</Checkbox>
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
                      value={item.office_id}
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
                Reset Field
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
            <Divider orientation="left">Address</Divider>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="full_address"
                  label="Full Address(Street #, House/Building #, Sitio, Barangay)"
                >
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
                        value={item.barangay_id}
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
    </>
  );
};

export default FloatButtonDrawer;
