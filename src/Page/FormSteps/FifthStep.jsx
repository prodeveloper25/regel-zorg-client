import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { StepContext } from "../../context/StepProvider";

const FifthStep = () => {
  const { setCurrentStep, inputError, setInputError, userData, setUserData } =
    useContext(StepContext);
  const [locationTimes, setLocationTimes] = useState();

  useEffect(() => {
    fetch(`https://regelzorg-server.vercel.app/times/${userData.dateref}`)
      .then((res) => res.json())
      .then((data) => setLocationTimes(data));
  }, []);

  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg gap-2 flex w-[800px] font-[poppins]">
          Choose the desired time below for your appointment on
          <strong>{userData?.date} .</strong>
        </h5>
      </div>
      {inputError.timeMessgage && userData?.time === undefined ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.timeMessgage}
          </p>
        </div>
      ) : null}
      {/* main content start  */}
      {locationTimes?.map((tm, index) => {
        const time = tm.status === "open" ? tm.time : null;

        return (
          <div key={tm?._id} className="flex items-center gap-2 mb-2">
            {time && (
              <>
                <input
                  type="radio"
                  checked={userData.time === time}
                  value={userData["time"]}
                  onChange={() =>
                    setUserData({
                      ...userData,
                      time: time,
                      timeId: tm?._id,
                      status: "pending",
                    })
                  }
                  name="time"
                  id={`time${index + 1}`}
                />
                <label
                  className="text-xl flex items-center gap-28"
                  htmlFor={`time${index + 1}`}
                >
                  at {time}
                </label>
              </>
            )}
          </div>
        );
      })}
      {/* main content end  */}
      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(4)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={() => {
            if (userData?.time === undefined) {
              setCurrentStep(5);
              setInputError({
                ...inputError,
                timeMessgage: "Please choose your preferred time.",
              });
              return;
            } else {
              setCurrentStep(6);
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

export default FifthStep;
