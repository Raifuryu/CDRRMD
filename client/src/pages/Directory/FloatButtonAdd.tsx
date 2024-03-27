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
  Typography,
  notification,
} from "antd";
import dayjs from "dayjs";
import { PlusOutlined, DeleteRowOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import DrawerAddOrganization from "../../components/DrawerAddOrganization";

const { Title } = Typography;
const { Option } = Select;

const FloatButtonAdd = () => {
  interface Organization {
    office_id: number;
    acronym: string;
    office_name: string;
  }

  interface Barangay {
    key: React.Key;
    barangay_id: number;
    fk_city_id: number;
    barangay: string;
  }

  const [messageApi, contextHolder] = notification.useNotification();
  const [participantsForm] = Form.useForm();
  const [organization, setOrganization] = useState<Organization[]>([]);
  const [barangay, setBarangay] = useState<Barangay[]>([]);

  const [isLgbtq, setIsLgbtq] = useState(false);
  const [isPWD, setIsPWD] = useState(false);
  const [isUnemployed, setIsUnemployed] = useState(false);

  const [drawerState, setDrawerState] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const organizationRequest = fetch(
      "http://192.168.1.69:3000/api/agencies/"
    ).then((res) => res.json());

    const barangayRequest = fetch(
      "http://192.168.1.69:3000/api/address/barangays"
    ).then((res) => res.json());

    Promise.all([organizationRequest, barangayRequest])
      .then(([organizationData, barangayData]) => {
        setBarangay(barangayData);
        setOrganization(organizationData);
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

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      {contextHolder}
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        // description="Add Training"
        shape="circle"
        onClick={() => {
          setDrawerState(true);
        }}
        tooltip={<div>Add Contact</div>}
        style={{ transform: "scale(1.2)" }}
      />
      <Drawer
        title="Add Contact"
        width={"auto"}
        onClose={() => setDrawerState(false)}
        open={drawerState}
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
              onClick={() => {
                participantsForm.submit();
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
              key: "",
              id: "",
              first_name: e.first_name,
              middle_name: e.middle_name,
              last_name: e.last_name,
              extension_name: e.extension_name,
              nickname: e.nickname,
              occupation: e.occupation,
              birth_date: dayjs(e["birth_date"]).format("YYYY-MM-DD") || "",
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
            setIsUnemployed(true);
            setDrawerState(false);
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
                rules={[{ required: true, message: "Please enter First Name" }]}
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
                rules={[{ required: true, message: "Please enter Last Name" }]}
              >
                <Input style={{ width: "100%" }} placeholder="Doe" />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item name="extension_name" label="Extension Name">
                <Input style={{ width: "100%" }} placeholder="Sr. Jr. III..." />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item name="nickname" label="Nickname">
                <Input style={{ width: "100%" }} placeholder="John the D" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="birth_date" label="Birth Date">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="birth_place" label="Birth Place">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="blood_type" label="Blood Type">
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
              <Form.Item name="gender" label="Gender">
                <Select placeholder="Select a Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="civil_status" label="Civil Status">
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
              <Form.Item name="email_address" label="Email Address">
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
    </>
  );
};

export default FloatButtonAdd;
