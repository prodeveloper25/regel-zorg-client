import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { StepContext } from "../../context/StepProvider";
const ThirdStep = () => {
  const {
    setCurrentStep,
    userData,
    setLocationsData,
    locationsData,
    setInputError,
    inputError,
    setUserData,
  } = useContext(StepContext);
  const [errorHandleData, setErrorHandleData] = useState([]);

  useEffect(() => {
    fetch(
      `https://regelzorg-server.vercel.app/subLocations/${userData?.postcode}`
    )
      .then((res) => res.json())
      .then((data) => setLocationsData(data));
  }, []);

  useEffect(() => {
    fetch("https://regelzorg-server.vercel.app/subLocations")
      .then((res) => res.json())
      .then((data) => setErrorHandleData(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg flex w-[800px] font-[poppins]">
          Select the desired inspection location below. Often more data will be
          available for these locations in the future. Select a location and
          click "next" for more dates.
        </h5>
      </div>
      {inputError.locationMessgage && userData?.location === undefined ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.locationMessgage}
          </p>
        </div>
      ) : null}
      {locationsData.length === 0 ? (
        <div className="bg-blue-100 py-4 px-3 mb-5">
          <p className="text-lg text-center font-[poppins]">
            <span className="text-red-600 font-medium">
              Please enter your valid postcode{" "}
            </span>{" "}
            or call National Appointments if you are in a different location and
            have a different postcode
          </p>
        </div>
      ) : null}
      {locationsData.length === 0
        ? errorHandleData.map((LocationDt, index) => (
            <div key={LocationDt?._id} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                checked={userData.location === LocationDt?.childname}
                value={userData["location"]}
                onChange={() =>
                  setUserData({
                    ...userData,
                    location: LocationDt?.childname,
                    locationId: LocationDt?._id,
                    price: LocationDt?.price,
                  })
                }
                name="location"
                id={LocationDt?._id}
              />
              <label
                className="text-xl flex items-center gap-36"
                htmlFor={LocationDt?._id}
              >
                <div>
                  {LocationDt.childname}
                  <span className="text-lg text-slate-600">
                    ({LocationDt?.distance})
                  </span>
                </div>
                <div className="flex gap-6">
                  <span className="text-[16px] font-medium">
                    {LocationDt.dates[0].date}
                  </span>
                  <span className="text-[16px] font-medium">
                    € {LocationDt.price}
                  </span>
                </div>
              </label>
            </div>
          ))
        : null}
      {locationsData.length === 0
        ? null
        : locationsData.map((LocationDt, index) => (
            <div key={LocationDt?._id} className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                checked={userData.location === LocationDt?.childname}
                value={userData["location"]}
                onChange={() =>
                  setUserData({
                    ...userData,
                    location: LocationDt?.childname,
                    locationId: LocationDt?._id,
                    price: LocationDt?.price,
                  })
                }
                name="location"
                id={LocationDt?._id}
              />
              <label
                className="text-xl flex items-center gap-36"
                htmlFor={LocationDt?._id}
              >
                <div>
                  {LocationDt.childname}
                  <span className="text-lg text-slate-600">
                    ({LocationDt?.distance})
                  </span>
                </div>
                <div className="flex gap-6">
                  <span className="text-[16px] font-medium">
                    {LocationDt.dates[0].date}
                  </span>
                  <span className="text-[16px] font-medium">
                    € {LocationDt.price}
                  </span>
                </div>
              </label>
            </div>
          ))}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(2)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={() => {
            if (userData?.location === undefined) {
              setCurrentStep(3);
              setInputError({
                ...inputError,
                locationMessgage: "Please select a location first",
              });
              return;
            } else {
              setCurrentStep(4);
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

export default ThirdStep;
