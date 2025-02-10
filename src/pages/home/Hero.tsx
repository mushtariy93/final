import hero from "../../assets/images/hero.png"
import hero1 from "../../assets/images/hero1.png";




const Hero = () => {
  return (
    <div className=" container w-full flex h-[344px] text-[#FAFAFA] items-center justify-between px-10 py-20 mt-10 bg-black">
      {/* Matn qismi - 35% enini egallaydi */}
      <div className="w-[35%] transform translate-x-16">
        <div className="flex gap-3 ">
          <img src={hero} alt="iPhone" />
          <p className="text-lg mt-4">iPhone 14 Series</p>
        </div>
        <h1 className="text-4xl  w-[294px] h-[120px] font-bold ">
          Up to 10% <br />
          off Voucher
        </h1>

        <button className="mt-6 px-6 py-3 border-b-2 text-white rounded-lg">
          Shop Now
        </button>
      </div>

      {/* Rasm qismi - 65% enini egallaydi va o'ng tomonga suriladi */}
      <div className="w-[65%] flex ">
        <img
          src={hero1}
          alt="Hero rasm"
          className="w-auto h-[344px] max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
