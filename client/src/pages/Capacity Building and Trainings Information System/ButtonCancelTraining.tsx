import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

const ButtonCancelTraining: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // do update process here
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // update this
  useEffect(() => {
    fetch(``, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
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
      });
  });

  return (
    <>
      <Button type="default" danger onClick={showModal}>
        Cancel Training
      </Button>
      <Modal
        title="Cancel Training"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button loading={loading} onClick={handleOk} danger>
            Confirm
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item>
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ButtonCancelTraining;
