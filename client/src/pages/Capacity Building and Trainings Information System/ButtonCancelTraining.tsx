import React, { useState } from "react";
import { Button, Form, Modal, notification } from "antd";
import TextArea from "antd/es/input/TextArea";

interface props {
  trainingId: string;
  trainingStatus: number | undefined;
}

const ButtonCancelTraining: React.FC<props> = ({
  trainingId,
  trainingStatus,
}) => {
  const [messageApi, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setLoading(true);

    try {
      // Assuming putData is a function that sends a PUT request to update data
      await putData(); // This function should handle the API call to update data
      messageApi["success"]({
        message: "Success",
        description: "Training Cancelled Successfully",
        placement: "bottomLeft",
      });
      console.log("Data updated successfully");
      // Optionally, you can do something after successful update

      setIsModalOpen(false); // Close the modal upon successful update
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle errors appropriately, e.g., show an error message to the user
    } finally {
      setLoading(false); // Regardless of success or failure, setLoading back to false
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const putData = () => {
    const remarks = form.getFieldsValue().remarks;
    fetch(`http://192.168.1.69:3000/api/training/${trainingId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ remarks }),
    })
      .then((response) => {
        if (!response.ok) {
          messageApi["error"]({
            message: "Failed to Update Data",
            placement: "bottomLeft",
          });
          throw new Error("Failed to post participants data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Participants data posted successfully:", data);
        messageApi["success"]({
          message: "Data Updated",
          placement: "bottomLeft",
        });
        // Optionally, you can update the component state or trigger other actions upon successful posting
      })
      .catch((error) => {
        console.error("Error posting participants data:", error.message);
        messageApi["error"]({
          message: "Failed to Update Data",
          placement: "bottomLeft",
        });
      });
  };

  return (
    <>
      {contextHolder}
      <Button
        type="default"
        danger
        onClick={showModal}
        disabled={trainingStatus === 2 || trainingStatus === 0}
      >
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
          <Form.Item label="Remarks" name="remarks">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ButtonCancelTraining;
