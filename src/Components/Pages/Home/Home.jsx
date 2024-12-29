import HomeCenter from "./HomeCenter";
import videoIcon from "../../../assets/Icons/zoom.png";
import ShopIcon from "../../../assets/Icons/shop.png";
import GroupIcon from "../../../assets/Icons/people.png";
import RobotIcon from "../../../assets/Icons/robot.png";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { RiUserSearchFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const user = useAuth();
  console.log(user);

  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      time: "10",
    },
    {
      id: 2,
      name: "Bob Smith",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "20",
    },
    // ...Other user data
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row mx-5 justify-center gap-5">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 sticky top-0 h-screen bg-white rounded-lg shadow-md">
          <ul className="m-5 flex flex-col space-y-5 select-none">
            <Link
              to="/profile"
              className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer"
            >
              {user ? (
                <>
                  <img
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-12 mx-1 ring-1 ring-black rounded-full"
                  />
                  {user.displayName || "User"}
                </>
              ) : (
                <>
                  <Skeleton circle={true} height={48} width={48} />
                  <span>Loading...</span>
                </>
              )}
            </Link>
            <Link
              to="/video"
              className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer"
            >
              <img src={videoIcon} alt="Video" className="mx-2 w-10" />
              Video
            </Link>
            <Link
              to="/marketPlace"
              className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer"
            >
              <img src={ShopIcon} alt="Shop" className="mx-2 w-8" />
              Shop
            </Link>
            <Link
              to="/group"
              className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer"
            >
              <img src={GroupIcon} alt="Group" className="mx-2 w-8" />
              Group
            </Link>
            <Link
              to="/craftedAi"
              className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer"
            >
              <img src={RobotIcon} alt="Chat Bot" className="mx-2 w-8" />
              Chat Bot
            </Link>
            <Link
              to="/jobs"
              className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer"
            >
              <RiUserSearchFill className="mx-2 text-3xl" />
              Jobs
            </Link>
          </ul>
        </div>
        {/* Center */}
        <div className="md:w-2/4">
          <HomeCenter />
        </div>
        {/* Friends List */}
        <div className="hidden md:block w-1/4 h-screen bg-white rounded-lg shadow-md">
          <ul className="h-[70vh] overflow-y-scroll">
            <li className="mx-6 text-2xl font-bold mt-2">Friends</li>
            {users.map((friend) => (
              <div key={friend.id} className="mb-4 mt-2">
                <li className="flex items-center gap-2 mx-5 p-2 hover:bg-[#eeeeee] duration-200 rounded-md">
                  <div className="relative">
                    <img
                      src={friend.img}
                      alt={`${friend.name}'s avatar`}
                      className="rounded-full w-10"
                    />
                    <div className="bg-green-500 w-3 h-3 rounded-full absolute bottom-0 right-0"></div>
                  </div>
                  {friend.name}
                </li>
              </div>
            ))}
          </ul>
          <hr className="border-t-1 border-gray-400" />
          <ul className="flex items-center gap-2">
            <li className="flex m-3 items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Charlie Brown"
                className="w-12 rounded-full"
              />
              <h2>Charlie Brown</h2>
            </li>
            <li>
              <span className="flex items-center gap-1 mx-1">
                <button className="btn btn-success text-white">
                  <TiTick className="text-2xl" />
                </button>
                <button className="btn btn-error text-white">
                  <ImCross />
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
