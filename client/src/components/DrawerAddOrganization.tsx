import {
  Button,
  Col,
  Divider,
  Drawer,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Space,
  notification,
} from "antd";
const { Option } = Select;

import { useEffect, useState } from "react";

interface props {
  updateCount: () => void;
}

const DrawerAddOrganization: React.FC<props> = ({ updateCount }) => {
  interface Barangay {
    key: React.Key;
    barangay_id: number;
    fk_city_id: number;
    barangay: string;
  }

  const [messageApi, contextHolder] = notification.useNotification();
  const [organizationForm] = Form.useForm();
  const [organizationDrawer, setOrganizationDrawer] = useState(false);
  const [organizationType, setOrganizationType] = useState(1);
  const organizationTypeOptions = [
    { label: "Government", value: 1 },
    { label: "Government-Owned and Controlled Corporation", value: 2 },
    { label: "Civil Society Organization", value: 3 },
  ];

  const [barangay, setBarangay] = useState<Barangay[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.69:3000/api/address/barangays")
      .then((response) => response.json())
      .then((data) => {
        setBarangay(data);
      });
  }, []);

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
      updateCount();
    } catch (error) {
      console.error("Error adding data:" + error);
      messageApi["error"]({
        message: "Failed to add Organization",
        description: "Error adding data:" + error,
        placement: "bottomLeft",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Row>
        <Button
          onClick={() => {
            setOrganizationDrawer(true);
          }}
        >
          Add Organization
        </Button>
      </Row>
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
              onClick={() => {
                organizationForm.submit();
                updateCount();
              }}
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
              organization_type: formData.organization_type,
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
          <Row>
            <Form.Item
              name="organization_type"
              label="Organization Type"
              rules={[
                {
                  required: true,
                  message: "Please Select Organization Type",
                },
              ]}
            >
              <Radio.Group
                options={organizationTypeOptions}
                onChange={({ target: { value } }: RadioChangeEvent) => {
                  setOrganizationType(value);
                }}
                value={organizationType}
              />
            </Form.Item>
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
                label="House/Apt/Bldg. No/St. Name"
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
    </>
  );
};

export default DrawerAddOrganization;
