import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";

const SecondStep = () => {
  const { setCurrentStep, setInputError, inputError, userData, setUserData } =
    useContext(StepContext);
  const handleSecondStepNext = () => {
    if (userData?.postcode === "" || userData?.postcode === undefined) {
      setCurrentStep(2);
      setInputError({
        ...inputError,
        postcodeMessgage: "Please enter a valid zip code",
      });
      return;
    } else if (
      userData?.housenumber === "" ||
      userData?.housenumber === undefined
    ) {
      setCurrentStep(2);
      setInputError({
        ...inputError,
        housenumberMessgage: "Please enter a valid house number",
      });
      return;
    } else if (
      userData?.dateofbirth === "" ||
      userData?.dateofbirth === undefined
    ) {
      setCurrentStep(2);
      setInputError({
        ...inputError,
        dateofbirthMessgage: "Please enter a valid date",
      });
      return;
    } else {
      setCurrentStep(3);
    }
  };

  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg flex w-[800px] font-[poppins]">
          Enter your full zip code and house number here.
        </h5>
      </div>

      {/* input element start  */}
      <div className="flex mb-2">
        <label className="text-lg font-bold">
          Your postal code: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="postcode"
          className="border px-1 ml-16 border-black mb-2"
          id="postcode"
          maxLength="7"
          placeholder="Postcode"
          value={userData["postcode"]}
          onChange={(e) => {
            setUserData({
              ...userData,
              postcode: e.target.value.toLocaleUpperCase(),
            });
          }}
        />
        <p className="font-[poppins] text-slate-700 ml-2">(e.g. 1234-AB)</p>
      </div>

      {(inputError.postcodeMessgage && userData?.postcode === undefined) ||
      userData?.postcode === "" ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.postcodeMessgage}
          </p>
        </div>
      ) : null}

      <div className="flex mb-2">
        <label className="text-lg font-bold">
          Your house number: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="border px-1 ml-10 border-black mb-2"
          name="housenumber"
          placeholder="House number"
          id="housenumber"
          value={userData["housenumber"]}
          onChange={(e) =>
            setUserData({ ...userData, housenumber: e.target.value })
          }
        />
      </div>

      {(inputError.housenumberMessgage &&
        userData?.housenumber === undefined) ||
      userData?.housenumber === "" ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.housenumberMessgage}
          </p>
        </div>
      ) : null}

      <div className="flex mb-2">
        <label className="text-lg font-bold">
          Date of birth: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="border px-1 ml-[97px] border-black mb-2"
          name="dateofbirth"
          placeholder="DD-MM-YYYY"
          id="dateofbirth"
          value={userData["dateofbirth"]}
          onChange={(e) =>
            setUserData({ ...userData, dateofbirth: e.target.value })
          }
        />
        <p className="font-[poppins] text-slate-700 ml-2">(e.g. 1-1-1950)</p>
      </div>

      {(inputError.dateofbirthMessgage &&
        userData?.dateofbirth === undefined) ||
      userData?.dateofbirth === "" ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.dateofbirthMessgage}
          </p>
        </div>
      ) : null}

      <div className="mb-2 mt-5">
        <p className="font-[poppins] mb-1 text-slate-900">
          If you have a reference code (not a ZD code), please enter it here.
          Otherwise, leave this box blank.
        </p>
        <label className="text-lg font-bold">Reference code for debtors:</label>
        <input
          type="text"
          className="border px-1 ml-[30px] border-black mb-2"
          name="referancecode"
          id="referancecode"
          value={userData["referancecode"]}
          onChange={(e) =>
            setUserData({ ...userData, referancecode: e.target.value })
          }
        />
      </div>
      {/* input element end  */}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(1)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={handleSecondStepNext}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          NEXT ONE <ArrowRight />
        </button>
      </div>
      {/* button setup end  */}
    </div>
  );
};

export default SecondStep;
