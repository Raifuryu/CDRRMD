import { Button } from "antd";

interface props {
  trainingId: string | undefined;
  trainingYear: number;
  documentationNumber: number;
}

const ButtonOpenAAR: React.FC<props> = ({
  trainingId,
  trainingYear,
  documentationNumber,
}) => {
  const openAAR = () => {
    fetch(
      `http://192.168.1.69:3000/api/training/${trainingYear}/${trainingId}/documentations/${documentationNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": `image/jpeg`,
        },
      }
    )
      .then((response) => {
        return response.blob();
      })
      .then((fileBlob) => {
        const file = new Blob([fileBlob], { type: `image/jpeg` });
        const fileURL = URL.createObjectURL(file);

        window.open(fileURL);
      });
  };
  return <Button onClick={openAAR}>Documentation {documentationNumber}</Button>;
};

export default ButtonOpenAAR;
