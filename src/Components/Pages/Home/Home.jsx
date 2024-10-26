import React from "react";
import HomeCenter from "./HomeCenter";
import videoIcon from "../../../assets/Icons/zoom.png";
import ShopIcon from "../../../assets/Icons/shop.png";
import GroupIcon from "../../../assets/Icons/people.png";
import RobotIcon from "../../../assets/Icons/robot.png";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Home = () => {
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
    {
      id: 3,
      name: "Charlie Brown",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      time: "5",
    },
    {
      id: 4,
      name: "Daisy Evans",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      time: "15",
    },
    {
      id: 5,
      name: "Ethan Miller",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      time: "30",
    },
  ];

  let profile_pic =
    "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=";
  return (
    <div className="flex flex-col md:flex-row mx-5 justify-center gap-5">
      <div className="hidden md:block w-1/4 sticky start-0 h-screen bg-white rounded-lg shadow-md">
        <ul className="m-5 flex flex-col space-y-5 select-none">
          <li className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer">
            <img
              src={profile_pic}
              alt="Profile"
              className="w-12 mx-1 ring-1 ring-black rounded-full"
            />
            Abdullah Al Nirob
          </li>
          <li className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer">
            <img src={videoIcon} alt="" className="mx-2 w-10" />
            Video
          </li>
          <li className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer">
            <img src={ShopIcon} alt="" className="mx-2 w-8" />
            Shop
          </li>
          <li className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer">
            <img src={GroupIcon} alt="" className="mx-2 w-8" />
            Group
          </li>
          <li className="hover:bg-[#eeeeee] duration-200 p-2 rounded-md text-xl flex items-center cursor-pointer">
            <img src={RobotIcon} alt="" className="mx-2 w-8" />
            Chat Bot
          </li>
        </ul>
      </div>
      <div className="md:w-2/4">
        <HomeCenter />
      </div>
      <div className="hidden md:block w-1/4 h-screen bg-white rounded-lg shadow-md">
        <ul>
          {users.map((user) => {
            return (
              <div className="mb-4 mt-2">
                <li className="flex items-center gap-2 mx-5 p-2 hover:bg-[#eeeeee] duration-200 rounded-md">
                  <img src={user.img} className="rounded-full w-10" />
                  {user.name}
                </li>
              </div>
            );
          })}
        </ul>
        <hr className="bt-1 border-gray-400" />
        <ul className="flex items-center gap-2">
          <li className="flex m-3 items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt=""
              className="w-12 rounded-full"
            />
            <h2>Charlie Brown</h2>
          </li>
          <li>
            <span className="flex items-center gap-1 mx-1">
              <button className="btn btn-success text-white">
              <TiTick className="text-2xl"/>
              </button>
              <button className="btn btn-error text-white">
                <ImCross/>
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
