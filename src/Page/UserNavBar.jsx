import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";

const UserNavBar = () => {
  return (
    <div className="shadow-xl px-4 py-2 bg-white">
      <div className="max-w-screen-xl  bg-white mx-auto lg:flex">
        <img className="lg:w-[350px]" src={logo} alt="" />{" "}
        <div className=" w-full lg:ml-24 flex justify-center items-center">
          <Marquee
            className="border-l-8 border-l-[#00AEEF] border-r-8 border-r-[#F7941E]"
            pauseOnHover={true}
            speed={70}
          >
            <h2 className="text-[28px] flex justify-center gap-5 font-[poppins] font-medium">
              <span>
                Book an appointment online - RegelZorg Driving license
                inspections
              </span>
              <br />
            </h2>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
