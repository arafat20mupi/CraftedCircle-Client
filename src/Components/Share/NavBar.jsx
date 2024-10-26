import { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { FaCentSign, FaLandmark } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { MdGroups2, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { IoMdChatboxes } from "react-icons/io";
const NavBar = () => {
  const user = true;
  const [isFocused, setIsFocused] = useState(false);
  
  const links = (
    <>
      <div className="tooltip tooltip-bottom" data-tip="Home">
        <Link to={'/'}><GrHomeRounded className="text-black" /></Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Video">
        <Link to={'/video'}><MdOutlineVideoLibrary className="text-black" /></Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="MarketPlace">
        <Link to={'/marketPlace'}><FaLandmark className="text-black" /></Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Groups">
        <Link to={'/group'}><MdGroups2 className="text-black" /></Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="CraftedAi">
        <Link to={'/craftedAi'}><AiFillRobot className="text-black" /></Link>
      </div>
    </>
  );

  return (
    <div className="bg-white border-[#D1D5DB] border-2 shadow-md">
      <div className="grid grid-cols-3 items-center p-2 gap-4">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
          <div className="bg-blue-600 rounded-full p-2">
            <FaCentSign />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search CraftedCircle"
              className="bg-[#FFFFFF] border border-[#008080] text-[#374151] placeholder-[#6B7280] rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:border-teal-500 focus:shadow-[0_0_8px_rgba(0,128,128,0.2)] w-full sm:w-64"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {!isFocused && <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:grid grid-cols-5 gap-3 text-2xl text-slate-300 col-span-1">
          {links}
        </div>

        {/* User Profile or SignUp */}
        <div className="col-span-1 flex items-center justify-self-end">
          <div className="bg-gray-200 rounded-full cursor-pointer active:scale-95 duration-150 p-2 mx-3">
          <IoMdChatboxes className="text-3xl"/>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a className="justify-between">Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <Link className="btn bg-[#008080] hover:bg-[#006666] text-white" to="/signup">SignUp</Link>
          )}
        </div>
      </div>

      {/* Responsive navigation for smaller screens */}
      <div className="grid grid-cols-5 gap-3 sm:hidden text-2xl text-slate-300 py-2">
        {links}
      </div>
    </div>
  );
};

export default NavBar;
