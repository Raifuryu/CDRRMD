import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeatailedPage = () => {
  const { trainingId } = useParams();

  const [trainingTitle, setTrainingTitle] = useState("");
  const [trainingVenue, setTrainingVenue] = useState("");
  const [trainingTrainer, setTrainingTrainer] = useState("");
  const [trainingStartDate, setTrainingStartDate] = useState("");
  const [trainingEndDate, setTrainingEndDate] = useState("");

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
      });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex prose">
          <h2>Training Information</h2>
        </div>
        <div className="flex flex-row">
          <label className="form-control max-w-xs m-2">
            <div className="label">
              <span className="label-text">ID</span>
            </div>
            <input
              type="text"
              value={trainingId}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTrainingTitle(e.target.value);
              }}
              disabled
            />
          </label>

          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Training Title</span>
            </div>
            <input
              type="text"
              value={trainingTitle}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTrainingVenue(e.target.value);
              }}
              disabled
            />
          </label>

          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Training Venue</span>
            </div>
            <input
              type="text"
              value={trainingVenue}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTrainingVenue(e.target.value);
              }}
              disabled
            />
          </label>

          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Trainer</span>
            </div>
            <input
              type="text"
              value={trainingTrainer}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTrainingVenue(e.target.value);
              }}
              disabled
            />
          </label>

          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Training Start Date</span>
            </div>
            <input
              type="text"
              value={trainingStartDate}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTrainingStartDate(e.target.value);
              }}
              disabled
            />
          </label>

          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Training End Date</span>
            </div>
            <input
              type="text"
              value={trainingEndDate}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setTrainingEndDate(e.target.value);
              }}
              disabled
            />
          </label>
        </div>
        <div className="flex prose">
          <h2>Participant Information</h2>
        </div>
        <div className="flex flex-row">
          <div className="flex">
            <label className="form-control w-full max-w-xs m-2">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                // value={trainingEndDate}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  // setTrainingEndDate(e.target.value);
                }}
                // disabled
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control w-full max-w-xs m-2">
              <div className="label">
                <span className="label-text">Middle Name</span>
              </div>
              <input
                type="text"
                // value={trainingEndDate}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  // setTrainingEndDate(e.target.value);
                }}
                // disabled
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control w-full max-w-xs m-2">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                // value={trainingEndDate}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  // setTrainingEndDate(e.target.value);
                }}
                // disabled
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control w-full max-w-xs m-2">
              <div className="label">
                <span className="label-text">Extension Name</span>
              </div>
              <input
                type="text"
                // value={trainingEndDate}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  // setTrainingEndDate(e.target.value);
                }}
                // disabled
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control w-full max-w-xs m-2">
              <div className="label">
                <span className="label-text">Birthdate</span>
              </div>
              <input
                type="text"
                // value={trainingEndDate}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  // setTrainingEndDate(e.target.value);
                }}
                // disabled
              />
            </label>
          </div>
          <div className="flex">
            <label className="form-control w-full max-w-xs m-2">
              <div className="label">
                <span className="label-text">BloodType</span>
              </div>
              <input
                type="text"
                // value={trainingEndDate}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  // setTrainingEndDate(e.target.value);
                }}
                // disabled
              />
            </label>
          </div>
        </div>
        <div className="flex flex-row">
          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">House Number(Optional)</span>
            </div>
            <input
              type="text"
              // value={trainingEndDate}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                // setTrainingEndDate(e.target.value);
              }}
              // disabled
            />
          </label>
          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Sitio(Optional)</span>
            </div>
            <input
              type="text"
              // value={trainingEndDate}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                // setTrainingEndDate(e.target.value);
              }}
              // disabled
            />
          </label>
          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">Barangay</span>
            </div>
            <input
              type="text"
              // value={trainingEndDate}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                // setTrainingEndDate(e.target.value);
              }}
              // disabled
            />
          </label>
          <label className="form-control w-full max-w-xs m-2">
            <div className="label">
              <span className="label-text">City</span>
            </div>
            <input
              type="text"
              // value={trainingEndDate}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                // setTrainingEndDate(e.target.value);
              }}
              // disabled
            />
          </label>
        </div>
        <div className="flex">
          <button className="btn btn-outline btn-info">Add Participants</button>
          <button className="btn btn-outline btn-success">Submit</button>
        </div>
      </div>
    </>
  );
};

export default DeatailedPage;
