import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const StepContext = createContext();
const StepProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [defendedComponent, setDefendedComponent] = useState(1);
  const [locationsData, setLocationsData] = useState([]);
  const [timesDetails, setTimesDetails] = useState();
  const [inputError, setInputError] = useState([]);

  const timesEditDetails = {
    refdates: userData?.dateref,
    time: userData?.time,
    status: userData?.status,
  };
  const DbTimeId = { timeId: userData?.timeId };
  const userEditData = {
    postcode: userData?.postcode,
    housenumber: userData?.housenumber,
    dateofbirth: userData?.dateofbirth,
    referancecode: userData?.referancecode,
    location: userData?.location,
    price: userData?.price,
    date: userData?.date,
    time: userData?.time,
    frname: userData?.frname,
    lastname: userData?.lastname,
    phonenumber: userData?.phonenumber,
    emailaddress: userData?.emailaddress,
    regelzorgend: userData?.regelzorgend,
    timeId: userData?.timeId,
    refdates: userData?.dateref,
    status: "open",
  };
  const handleSetFinalData = () => {
    setFinalData(userEditData);
    setTimesDetails(timesEditDetails);
  };
  const submitData = () => {
    if (finalData) {
      fetch("https://regelzorg-server.vercel.app/allbooking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(finalData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.insertedId);
          fetch(
            `https://regelzorg-server.vercel.app/times/${DbTimeId.timeId}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(timesDetails),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                title: "Success!",
                text: "Your booking has been successful!",
                icon: "success",
              });
              setUserData("");
              setFinalData("");
              setCurrentStep(1);
              window.location.pathname = "/";
            });
        });
    }
  };
  return (
    <StepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        defendedComponent,
        setDefendedComponent,
        locationsData,
        setLocationsData,
        inputError,
        setInputError,
        submitData,
        handleSetFinalData,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;
