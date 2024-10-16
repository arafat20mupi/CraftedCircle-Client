import { useState } from "react";
import { AiFillRobot } from "react-icons/ai";
import { FaCentSign, FaLandmark } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { MdGroups2, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
<<<<<<< HEAD
  const user = false;
  const links = (
    <>
      <div className="tooltip tooltip-bottom mx-10" data-tip="Home">
        <Link to={"/"}>
          <GrHomeRounded />
        </Link>
      </div>
      <div className="tooltip tooltip-bottom mx-10" data-tip="Video">
        <Link to={"/video"}>
          <MdOutlineVideoLibrary />
        </Link>
      </div>
      <div className="tooltip tooltip-bottom mx-10" data-tip="MarketPlace">
        <Link to={"/merketPlace"}>
          <FaLandmark />
        </Link>
      </div>
      <div className="tooltip tooltip-bottom mx-10" data-tip="Groups">
        <Link to={"/group"}>
          <MdGroups2 />
        </Link>
      </div>
      <div className="tooltip tooltip-bottom mx-10" data-tip="CraftedAi">
        <Link to={"/craftrdAi"}>
          <AiFillRobot />
        </Link>
      </div>
    </>
  );

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex items-center justify-between p-2">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 rounded-full p-2">
            <FaCentSign />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search CraftedCircle"
              className="bg-gray-800 text-gray-400 rounded-full pl-10 pr-4 py-2 focus:outline-none w-full sm:w-64"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
=======
    const user = true;
    const [isFocused, setIsFocused] = useState(false)
    const links = (
        <>
            <div className="tooltip tooltip-bottom" data-tip="Home">
                < Link to={'/'}><GrHomeRounded  className="text-black" /></Link>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Video">
                <Link to={'/video'}><MdOutlineVideoLibrary className="text-black" /></Link>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="MarketPlace">
                <Link to={'/merketPlace'}><FaLandmark className="text-black" /></Link>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Groups">
                <Link to={'/group'}><MdGroups2 className="text-black" /></Link>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="CraftedAi">
                <Link to={'/craftrdAi'}><AiFillRobot className="text-black" /></Link>
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
                            onFocus={() => setIsFocused(false)}
                            onBlur={()=>setIsFocused(true)}
                        />
                        {
                            isFocused && <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                        }
                    </div>
                </div>


                {/* Navigation Links */}
                <div className="hidden sm:grid grid-cols-5 gap-3 text-2xl text-slate-300 col-span-1">
                    {links}
                </div>

                {/* User Profile or SignUp */}
                <div className="col-span-1 justify-self-end">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Profile"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
>>>>>>> d934edb4a5f265ca039f63267f16f537efef9570
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-6 text-2xl text-slate-300 gap-3">
          {links}
        </div>

        {/* User Profile or SignUp */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-primary" to="/signup">
              SignUp
            </Link>
          )}
        </div>
      </div>

      {/* Responsive navigation for smaller screens */}
      <div className="flex justify-around py-2 sm:hidden text-2xl text-slate-300">
        {links}
      </div>
    </div>
  );
};

export default NavBar;
