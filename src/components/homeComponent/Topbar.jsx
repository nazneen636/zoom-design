import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
const Topbar = () => {
  return (
    <div className="container pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        {/* logo */}
        <img src={logo} alt="logo" />
        {/* search */}
        <div className="relative w-[719px] py-4 px-6 rounded-[10px] border border-[#2B2F42]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none border-0 text-lg"
          />
          <div className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-6 text-base text-[#00000075]">
            <FaSearch />
          </div>
        </div>
        {/* btn */}
        <ul className="flex gap-x-[70px] items-center">
          <li className="font-bold text-lg text-[#2B2F42]">
            Design Categories
          </li>
          <li>
            <button className="cursor-pointer font-bold text-lg text-white rounded py-4 px-8 bg-[#5CD0EB]">
              Pricing
            </button>
          </li>
          <li className="font-bold text-lg text-[#2B2F42]">Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
