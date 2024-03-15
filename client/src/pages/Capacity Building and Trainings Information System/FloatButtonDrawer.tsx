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
  Row,
  Select,
  Space,
  notification,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DrawerAddOrganization from "./DrawerAddOrganization";

const { RangePicker } = DatePicker;
const { Option } = Select;

interface props {
  updateState: () => void;
}

const FloatButtonDrawer: React.FC<props> = ({ updateState }) => {
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

  // Libraries
  const [messageApi, contextHolder] = notification.useNotification();
  const [trainingForm] = Form.useForm();
  const [count, setCount] = useState(1);

  // Drawers
  const [trainingDrawer, setTrainingDrawer] = useState(false);

  // Datas
  const [trainingCourses, setTrainingCourses] = useState<Course[]>([]);
  const [organizationData, setOrganizationData] = useState<Organization[]>([]);

  // Prop States
  const [checkboxState, setCheckboxState] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("http://192.168.1.69:3000/api/training/courses").then((response) =>
        response.json()
      ),
      fetch("http://192.168.1.69:3000/api/agencies").then((response) =>
        response.json()
      ),
    ]).then(([courses, offices]) => {
      setTrainingCourses(courses);
      setOrganizationData(offices);
    });
  }, [count]);

  const postTraining = async (values: any) => {
    await fetch(
      checkboxState
        ? "http://192.168.1.69:3000/api/training/create/mixed"
        : "http://192.168.1.69:3000/api/training/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .catch((error) => {
        messageApi["error"]({
          message: "Failed to create Training",
          description: "Error adding data:" + error,
        });
      })
      .finally(() => {
        messageApi["success"]({
          message: "Training Created",
          placement: "bottomLeft",
        });
        setCount(count + 1);
      });
    // try {
    //   console.log(values);
    //   await fetch("http://192.168.1.69:3000/api/training/create", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   messageApi["success"]({
    //     message: "Training Created",
    //   });
    // } catch (error) {
    //   console.error("Error adding data:" + error);
    //   console.log(values);
    //   messageApi["error"]({
    //     message: "Failed to create Training",
    //     description: "Error adding data:" + error,
    //   });
    // }
  };

  const updateCount = () => {
    setCount(count + 1);
    console.log(count);
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
            setCheckboxState(false);
            setTrainingDrawer(false);
            updateState();
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
                <Checkbox
                  checked={checkboxState}
                  onChange={(e) => {
                    setCheckboxState(e.target.checked);
                  }}
                >
                  Mixed Participants
                </Checkbox>
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
          {!checkboxState ? (
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="trainee"
                  label="Organization"
                  rules={
                    !checkboxState
                      ? [
                          {
                            required: true,
                            message: "Please select Organization to Train",
                          },
                        ]
                      : []
                  }
                >
                  <Select
                    placeholder="Please select an Organization"
                    optionFilterProp="label"
                    style={{ width: "100%" }}
                    disabled={checkboxState ? true : false}
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
          ) : (
            <></>
          )}
        </Form>
        <DrawerAddOrganization updateCount={updateCount} />
      </Drawer>
    </>
  );
};

export default FloatButtonDrawer;
