import { ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";

const FirstStep = () => {
  const {
    setCurrentStep,
    inputError,
    setInputError,
    userData,
    setDefendedComponent,
    setUserData,
  } = useContext(StepContext);

  return (
    <div className="mt-5">
      {/* main content start  */}
      <div className="mb-5">
        <h5 className="text-lg flex w-[800px] font-[poppins]">
          Select the type of inspection for which you want to reserve an
          appointment and click on the [next] button at the bottom.
        </h5>
      </div>
      {inputError.selecterMessgage && userData?.selecter === undefined ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.selecterMessgage}
          </p>
        </div>
      ) : null}

      <div className="flex items-center gap-2 mb-2">
        <input
          type="radio"
          value={userData["selecter"]}
          checked={userData.selecter === "Local bus"}
          onChange={() => setUserData({ ...userData, selecter: "Local bus" })}
          name="selecter"
          id="select1"
        />
        <label htmlFor="select1" className="text-xl">
          Local bus
        </label>
      </div>

      <div className="flex items-center gap-2  mb-2">
        <input
          type="radio"
          checked={userData.selecter === "Health declaration Touring car"}
          value={userData["selecter"]}
          onChange={() =>
            setUserData({
              ...userData,
              selecter: "Health declaration Touring car",
            })
          }
          name="selecter"
          id="select2"
        />
        <label className="text-xl" htmlFor="select2">
          Health declaration Touring car
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          checked={
            userData.selecter === "Health declaration Touring car + Taxi pass"
          }
          value={userData["selecter"]}
          onChange={() =>
            setUserData({
              ...userData,
              selecter: "Health declaration Touring car + Taxi pass",
            })
          }
          name="selecter"
          id="select3"
        />
        <label className="text-xl" htmlFor="select3">
          Health declaration Touring car + Taxi pass
        </label>
      </div>
      {/* main content end */}
      <div className="flex justify-end mt-10">
        {userData.selecter === "Health declaration Touring car" ||
        userData.selecter === "Health declaration Touring car + Taxi pass" ? (
          <button
            onClick={() => setDefendedComponent(2)}
            className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
          >
            NEXT ONE <ArrowRight />
          </button>
        ) : (
          <button
            onClick={() => {
              if (userData?.selecter === undefined) {
                setCurrentStep(1);
                setInputError({
                  ...inputError,
                  selecterMessgage: "No inspection type selected",
                });
                return;
              } else {
                setCurrentStep(2);
              }
            }}
            className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
          >
            NEXT ONE <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default FirstStep;
