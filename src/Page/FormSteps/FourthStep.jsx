import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { StepContext } from "../../context/StepProvider";

const FourthStep = () => {
  const { setCurrentStep, inputError, setInputError, userData, setUserData } =
    useContext(StepContext);
  const [singleLocation, setSingleLocation] = useState();

  useEffect(() => {
    fetch(
      `https://regelzorg-server.vercel.app/subLocations/find/${userData.locationId}`
    )
      .then((res) => res.json())
      .then((data) => setSingleLocation(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg flex w-[800px] font-[poppins]">
          Choose the desired date for your appointment below.
        </h5>
      </div>
      {inputError.dateMessgage && userData?.date === undefined ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.dateMessgage}
          </p>
        </div>
      ) : null}
      {/* main content start  */}
      {singleLocation?.dates.map((singledate, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            checked={userData.date === singledate.date}
            value={userData["date"]}
            onChange={() =>
              setUserData({
                ...userData,
                date: singledate.date,
                dateref: singledate.reftimes,
              })
            }
            name="date"
            id={`date${index + 1}`}
          />
          <label
            className="text-xl flex items-center gap-28"
            htmlFor={`date${index + 1}`}
          >
            <div className="flex gap-8">
              <span>{singledate.date}</span>
              <span className="text-[16px] font-medium">
                € {singleLocation?.price}
              </span>
            </div>
          </label>
        </div>
      ))}
      {/* main content end */}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(3)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={() => {
            if (userData?.date === undefined) {
              setCurrentStep(4);
              setInputError({
                ...inputError,
                dateMessgage: "Please choose your preferred date.",
              });
              return;
            } else {
              setCurrentStep(5);
            }
          }}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          NEXT ONE <ArrowRight />
        </button>
      </div>
      {/* button setup end  */}
    </div>
  );
};

export default FourthStep;
