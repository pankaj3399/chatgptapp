import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { NavLink } from "react-router-dom";
import leftBarLogo from "../../../assets/Logo/leftBarLogo.svg";

const LeftNavbar = () => {
  return (
    <div className="pt-5 ps-3 w-1/5 bg-[#FAFAFA] h-screen sticky top-0">
      <div>
        <div className="flex items-center text-base	font-bold">
          <img src={leftBarLogo} style={{ width: "80%" }} alt="" />
          {/* <p className='ms-2'>KI-Cockpit</p> */}
        </div>
        <ul className="mt-6 navitems">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to={"/library"}
          >
            <li className="flex font-extrabold gap-[22px] text-[15px]  p-4 rounded-md items-center">
              <FiBook className="text-[16px]"></FiBook>
              <span>Bibliothek</span>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to={"/chat"}
          >
            <li className="flex font-extrabold gap-[22px] text-[15px]  p-4 rounded-md items-center">
              <BsChatDots className="text-[16px]"></BsChatDots>
              <span>Chat</span>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to={"/myPrompts"}
          >
            <li className="flex font-extrabold gap-[22px] text-[15px]  p-4 rounded-md ">
              <AiOutlineStar className="text-[18px]"></AiOutlineStar>
              <span>Meine Prompts</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
