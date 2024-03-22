import { Button } from "antd";

interface props {
  training_id: string | undefined;
  disabled: boolean | undefined;
}

const ButtonDownloadCertificateCSV: React.FC<props> = ({
  training_id,
  disabled,
}) => {
  const downloadCertificate = () => {
    fetch(`http://192.168.1.69:3000/api/training/${training_id}/certificates`, {
      method: "GET",
      headers: {
        "Content-Type": "text/csv",
      },
    })
      .then((response) => {
        return response.blob();
      })
      .then((fileBlob) => {
        const file = new Blob([fileBlob], { type: `text/csv` });
        const fileURL = URL.createObjectURL(file);

        window.open(fileURL);
      });
  };
  return (
    <Button onClick={downloadCertificate} disabled={disabled}>
      Download Certificate Code
    </Button>
  );
};

export default ButtonDownloadCertificateCSV;
