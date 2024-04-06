import heroimage1 from "../assets/image/hero2.webp";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <img className="h-[500px] w-full" src={heroimage1} alt="heroimage" />
    </div>
  );
};

export default Hero;
