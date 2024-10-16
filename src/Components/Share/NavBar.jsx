import { AiFillRobot } from "react-icons/ai";
import { FaCentSign, FaLandmark } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { MdGroups2, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
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
