import { Button, Modal, notification } from "antd";
import { useState } from "react";

interface props {
  trainingId: string | undefined;
  trainingStatus: string | undefined;
}

const ButtonDeleteTraining: React.FC<props> = ({
  trainingId,
  trainingStatus,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    try {
      // Assuming putData is a function that sends a PUT request to update data
      await updateTraining(); // This function should handle the API call to update data
      setIsModalOpen(false); // Close the modal upon successful update
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle errors appropriately, e.g., show an error message to the user
    } finally {
      setLoading(false); // Regardless of success or failure, setLoading back to false
    }
  };

  const updateTraining = () => {
    fetch(`http://192.168.1.69:3000/api/training/${trainingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    })
      .then((response) => {
        if (!response.ok) {
          api.error({
            message: "Failed to Delete Training",
            placement: "bottomLeft",
          });
          throw new Error("Failed to post participants data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Participants data posted successfully:", data);
        api.success({
          message: "Training Delete successfuly",
          placement: "bottomLeft",
        });
      })
      .catch((error) => {
        console.error("Error Delete training data:", error.message);
        api.error({
          message: "Failed to Delete Training",
          description: "Error Delete training data: " + error.message,
          placement: "bottomLeft",
        });
      });
  };
  return (
    <>
      {contextHolder}
      <Button
        onClick={() => setIsModalOpen(true)}
        danger
        disabled={
          trainingStatus === "Cancelled" || trainingStatus === "Completed"
        }
      >
        Delete Training
      </Button>
      <Modal
        title="Delete Training?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button loading={loading} onClick={handleOk} danger>
            Confirm
          </Button>,
        ]}
      ></Modal>
    </>
  );
};

export default ButtonDeleteTraining;
