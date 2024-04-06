import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";

const SevenStep = () => {
  const {
    setCurrentStep,
    setInputError,
    inputError,
    handleSetFinalData,
    userData,
    setUserData,
  } = useContext(StepContext);
  const handleSeventStep = () => {
    handleSetFinalData();
    setCurrentStep(8);
  };
  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg gap-2 flex w-[800px] font-[poppins]">
          How did you end up at RegelZorg?
        </h5>
      </div>
      {inputError.regelzorgendMessgage &&
      userData?.regelzorgend === undefined ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.regelzorgendMessgage}
          </p>
        </div>
      ) : null}
      {/* main content start  */}
      <div className="flex gap-44">
        <div>
          {/* input element 1 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={
                userData.regelzorgend === "Previously inspected via RegelZorg"
              }
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Previously inspected via RegelZorg",
                })
              }
              name="regelzorgend"
              id="reg1"
            />
            <label htmlFor="reg1" className="text-xl">
              Previously inspected via RegelZorg
            </label>
          </div>
          {/* input element 1 end  */}

          {/* input element 2 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Local authority"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Local authority",
                })
              }
              name="regelzorgend"
              id="reg2"
            />
            <label htmlFor="reg2" className="text-xl">
              Local authority
            </label>
          </div>
          {/* input element 2 end  */}

          {/* input element 3 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Internet"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Internet",
                })
              }
              name="regelzorgend"
              id="reg3"
            />
            <label htmlFor="reg3" className="text-xl">
              Internet
            </label>
          </div>
          {/* input element 3 end  */}

          {/* input element 4 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Newspaper"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Newspaper",
                })
              }
              name="regelzorgend"
              id="reg4"
            />
            <label htmlFor="reg4" className="text-xl">
              Newspaper
            </label>
          </div>
          {/* input element 4 end  */}

          {/* input element 5 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Via via"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Via via",
                })
              }
              name="regelzorgend"
              id="reg5"
            />
            <label htmlFor="reg5" className="text-xl">
              Via via
            </label>
          </div>
          {/* input element 5 end  */}
        </div>

        <div>
          {/* input element 1 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Facebook"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Facebook",
                })
              }
              name="regelzorgend"
              id="reg6"
            />
            <label htmlFor="reg6" className="text-xl">
              Facebook
            </label>
          </div>
          {/* input element 1 end  */}

          {/* input element 2 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "GP"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "GP",
                })
              }
              name="regelzorgend"
              id="reg7"
            />
            <label htmlFor="reg7" className="text-xl">
              GP
            </label>
          </div>
          {/* input element 2 end  */}

          {/* input element 3 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Inspection location"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Inspection location",
                })
              }
              name="regelzorgend"
              id="reg8"
            />
            <label htmlFor="reg8" className="text-xl">
              Inspection location
            </label>
          </div>
          {/* input element 3 end  */}

          {/* input element 4 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Elderly Association"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Elderly Association",
                })
              }
              name="regelzorgend"
              id="reg9"
            />
            <label htmlFor="reg9" className="text-xl">
              Elderly Association
            </label>
          </div>
          {/* input element 4 end  */}

          {/* input element 5 start  */}
          <div className="flex items-center gap-2 mb-3">
            <input
              type="radio"
              value={userData["regelzorgend"]}
              checked={userData.regelzorgend === "Does not apply"}
              onChange={() =>
                setUserData({
                  ...userData,
                  regelzorgend: "Does not apply",
                })
              }
              name="regelzorgend"
              id="reg10"
            />
            <label htmlFor="reg10" className="text-xl">
              Does not apply
            </label>
          </div>
          {/* input element 5 end  */}
        </div>
      </div>
      {/* main content end  */}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(6)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>

        <button
          onClick={() => {
            {
              if (userData?.regelzorgend === undefined) {
                setCurrentStep(7);
                setInputError({
                  ...inputError,
                  regelzorgendMessgage: "Please make a choice.",
                });
                return;
              } else {
                handleSeventStep();
              }
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

export default SevenStep;
