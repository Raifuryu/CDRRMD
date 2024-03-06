import { Button } from "antd";

interface props {
  trainingId: string | undefined;
  trainingYear: number;
}

const ButtonOpenAAR: React.FC<props> = ({ trainingId, trainingYear }) => {
  const openAAR = () => {
    fetch(
      `http://192.168.1.69:3000/api/training/${trainingYear}/${trainingId}/AAR`,
      {
        method: "GET",
        headers: {
          "Content-Type": `application/pdf`,
        },
      }
    )
      .then((response) => {
        return response.blob();
      })
      .then((fileBlob) => {
        const file = new Blob([fileBlob], { type: `application/pdf` });
        const fileURL = URL.createObjectURL(file);

        window.open(fileURL);
      });
  };
  return <Button onClick={openAAR}>After Activity Report</Button>;
};

export default ButtonOpenAAR;
