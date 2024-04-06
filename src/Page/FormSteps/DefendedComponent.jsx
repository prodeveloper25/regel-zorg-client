import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";

const DefendedComponent = () => {
  const { setCurrentStep, setDefendedComponent, userData } =
    useContext(StepContext);
  return (
    <div className="mt-5">
      {/* main content start  */}
      {userData.selecter === "Health declaration Touring car" ? (
        <div>
          <h1 className="text-lg">
            <strong>Please note:</strong> are you sure that you need the Touring
            Car Health Declaration?
          </h1>
          <h1 className="text-lg mt-3 flex flex-col">
            You have opted for the inspection:
            <strong>Touring Car Health Declaration</strong>
          </h1>
          <p className="mt-3 text-lg w-[800px]" style={{ fontWeight: "400" }}>
            The Touring Car Health Declaration is not a driving license
            inspection for renewing your bus driver's license, but a separate 5
            annual medical examination for coach drivers. In the past, people
            would receive a so-called Medibus pass afterwards, but since January
            1, 2015 this has been a coach health certificate.
          </p>
          <br />
          <p className="text-lg  w-[800px]" style={{ fontWeight: "400" }}>
            If you only want to renew your bus driving license and truck driving
            licence, go back and choose the inspection type Large Driving
            License Inspection (C/D/E - up to 75 years).
          </p>
          <br />
          <p className="text-lg  w-[800px]" style={{ fontWeight: "400" }}>
            If you do need the Touring Car Health Declaration, then continue.
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-lg">
            <strong>Please note:</strong> are you sure that you need the Touring
            Car Health Declaration?
          </h1>
          <h1 className="text-lg mt-3 flex flex-col">
            You have opted for the inspection:
            <strong>Health declaration Touring car + Taxi pass</strong>
          </h1>
          <p className="mt-3 text-lg w-[800px]" style={{ fontWeight: "400" }}>
            The Touring Car Health Declaration is not a driving license
            inspection for renewing your bus driver's license, but a separate 5
            annual medical examination for coach drivers. In the past, people
            would receive a so-called Medibus pass afterwards, but since January
            1, 2015 this has been a coach health certificate.
          </p>
          <br />
          <p className="text-lg  w-[800px]" style={{ fontWeight: "400" }}>
            If you only want to renew your bus driving license and truck driving
            licence, go back and choose the inspection type Large Driving
            License Inspection (C/D/E - up to 75 years).
          </p>
          <br />
          <p className="text-lg  w-[800px]" style={{ fontWeight: "400" }}>
            If you only want to renew your bus driving license and truck driving
            licence, go back and choose the inspection type Large Driving
            License Inspection (C/D/E - up to 75 years).
          </p>
        </div>
      )}
      {/* main content end  */}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setDefendedComponent(1)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={() => setCurrentStep(2)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          NEXT ONE <ArrowRight />
        </button>
      </div>
      {/* button setup end  */}
    </div>
  );
};

export default DefendedComponent;
