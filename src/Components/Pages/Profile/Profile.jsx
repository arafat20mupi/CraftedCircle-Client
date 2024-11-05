import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";
import Video from "../Video/Video";
import useAuth from "../../../Hooks/useAuth";
const Profile = () => {
  const user = useAuth();
  let profile_pic =
    "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=";

  let cover =
    "https://marketplace.canva.com/EAEmGBdkt5A/3/0/1600w/canva-blue-pink-photo-summer-facebook-cover-gy8LiIJTTGw.jpg";
  return (
    <div>
      {/* profile top */}
      <header className="">
        <img src={cover} alt="" className="w-full h-[250px]" />
      </header>
      <div className="bg-white shadow-md mx-auto py-10 md:px-20 flex justify-between  flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img
            src={profile_pic}
            alt="Profile"
            className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full"
          />
          <div className="mx-3">
            <div className="flex  items-center gap-2 ">
              <h1 className="text-gray-950 text-3xl mx-2 ">{user.displayName}</h1>
              <MdVerified className="text-blue-700" />
            </div>
            <div className="flex items-center gap-2 mx-2 text-gray-950">
              <p className="hover:underline cursor-pointer">100M Followers</p>
              <GoDotFill className="text-sm" />
              <p className="hover:underline cursor-pointer">2 Following</p>
            </div>
          </div>
        </div>
        <div className="flex my-3 items-center space-x-3">
          <button className="bg-blue-600  flex items-center px-5 md:px-10 outline-none rounded active:scale-95 duration-150 py-3 cursor-pointer text-white">
            <FaPen className="mx-2" /> Edit Profile
          </button>
          <button className="bg-gray-600  flex items-center px-5 md:px-10 outline-none rounded active:scale-95 duration-150 py-3 cursor-pointer text-white">
            <FaPlus className="mx-2" /> Add Story
          </button>
        </div>
      </div>
      {/* profile top */}

      {/* Profile middle */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-1 mx-1 md:mx-20 mt-5 bg-white shadow-md py-5 px-10 rounded-lg">
          <ul className="flex text-center items-center space-x-4 md:space-x-5">
            <li className="text-gray-950 cursor-pointer">Post</li>
            <li className="text-gray-950 cursor-pointer">About</li>
            <li className="text-gray-950 cursor-pointer">Friends</li>
            <li className="text-gray-950 cursor-pointer">Photos</li>
            <li className="text-gray-950 cursor-pointer">Videos</li>
            <li className="text-gray-950 cursor-pointer">Groups</li>
          </ul>
        </div>
      </div>
      {/* Profile middle */}
      {/* Profile bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-5 md:mx-20 my-5">
        <div className="flex flex-col gap-5">
          <div className="bg-white shadow-md mx-auto rounded-lg py-10 px-20 flex flex-col gap-5">
            <h1 className="text-2xl text-gray-900">Intro</h1>
            <div className="flex flex-col">
              <p className="text-gray-500 mb-2">
                Professional web developer & programmer passionate about coding
                the future of digital experiences.
              </p>
              <hr />
              <ul className="flex flex-col my-2">
                <li className="flex items-center gap-2 text-gray-900">
                  <FaHome /> From: Bogura,Bangladesh
                </li>
                <li className="flex items-center gap-2 text-gray-900">
                  <HiOfficeBuilding /> Work at: CodeCrafter
                </li>
                <li className="flex items-center gap-2 text-gray-900">
                  <IoEarthOutline />{" "}
                  <a href="https://abdullahalnirob.vercel.app/">
                    abdullahalnirob.vercel.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-md my-5 md:my-0 mx-auto rounded-lg py-10 px-5 md:px-20 flex flex-col gap-5">
            <h1 className="text-2xl text-white">Photos</h1>
            <div className="flex flex-col">
             <div className="grid grid-cols-3">
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500"/>
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500"/>
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500"/>
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500"/>
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500"/>
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white shadow-md items-center justify-between mx-auto rounded-lg py-7 px-20 flex gap-5">
            <h1 className="text-gray-900 text-xl">Photos</h1>
            <button className="bg-blue-700 flex items-center text-white px-3 py-1 rounded active:scale-95">
              <FaSort className="mx-1" />
              Filter
            </button>
          </div>
          <Video />
        </div>
      </div>
      {/* Profile bottom */}
    </div>
  );
};

export default Profile;
