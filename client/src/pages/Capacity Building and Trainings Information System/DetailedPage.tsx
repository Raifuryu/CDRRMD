import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const DeatailedPage = () => {
  interface barangay {
    id: number;
    fk_city_id: number;
    name: string;
  }

  const { trainingId } = useParams();

  const [barangay, setBarangay] = useState<barangay[]>([]);

  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingVenue, setTrainingVenue] = useState("");
  const [trainingTrainer, setTrainingTrainer] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState();
  const [trainingEndDate, setTrainingEndDate] = useState();

  const [loading, setLoading] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const showDrawer = () => {
    setDrawerState(true);
  };

  const closeDrawer = () => {
    setDrawerState(false);
  };

  useEffect(() => {
    fetch(`http://192.168.1.69:3000/training/${trainingId}`)
      .then((res) => res.json())
      .then((result) => {
        const firstItem = result[0];

        setTrainingTitle(firstItem.title);
        setTrainingVenue(firstItem.venue);
        setTrainingTrainer(firstItem.trainer);
        setTrainingStartDate(firstItem.start_date);
        setTrainingEndDate(firstItem.end_date);
        // fetch(`http://192.168.1.69:3000/barangay`)
        //   .then((res) => res.json())
        //   .then((result) => {
        //     setBarangay(result);
        //   });
      })
      .finally(() => setLoading(false));
  }, []);

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
          {/* <Button
            shape="round"
            size="large"
            onClick={showDrawer}
            icon={<PlusOutlined />}
          >
            Add Participants
          </Button> */}
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
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: "Please enter url" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: "Please select an owner" }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
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
