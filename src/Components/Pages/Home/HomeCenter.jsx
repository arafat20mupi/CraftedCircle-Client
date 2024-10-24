import React from "react";
import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";

import { IoMdPhotos } from "react-icons/io";
import Video from "../Video/Video";
const HomeCenter = () => {
  return (
    <div className="">
      <div className="bg-white w-full px-5 py-3 shadow-md rounded-md">
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/400"
            alt="User iamage"
            className="w-10 rounded-full cursor-pointer"
          />
          <input
            type="text"
            className="mx-3 w-full outline-none border-gray-400 border-2
         px-5 py-2 rounded-full hover:bg-slate-50 active:border-gray-500"
            placeholder="What's New?"
          />
          <FaImage className="text-green-600 text-3xl cursor-pointer" />
        </div>
        <div className="bg-white px-1 md:px-5 py-3">
          <div className="flex items-center justify-around">
            <span className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2">
              <FaVideo className="text-red-600 mx-3" />
              Video
            </span>
            <span className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2">
              <IoMdPhotos className="text-green-600 mx-3" />
              Media
            </span>
            <span className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2">
              <MdOutlineEmojiEmotions className="text-yellow-600 mx-3" />
              Event/Feelings
            </span>
          </div>
        </div>
      </div>
      <div className="my-1">
        <Video />
      </div>
    </div>
  );
};

export default HomeCenter;
