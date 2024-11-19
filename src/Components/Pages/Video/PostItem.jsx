/* eslint-disable react/prop-types */
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaEarthAmericas, FaShareNodes } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdVerified } from "react-icons/md";


const PostItem = ({ item }) => {
  const {
    userEmail,
    userUid,
    userName,
    userImage,
    title,
    photo,
    video } = item
  return (
    <div className="mx-2 md:mx-4">
      <div className="ring-1 rounded ring-gray-400 my-4  bg-white py-5">
        <header className="flex items-center">
          {userImage && <img
            src={userImage}
            className="ring-slate-700 mx-5 w-[40px] ring-1 rounded-full"
            alt=""
          />}
          <p className="text-black text-sm flex items-center cursor-pointer hover:underline">
            {userName}
            <MdVerified className="text-blue-700" />
          </p>
          <GoDotFill className="text-black text-sm mx-3" />
          {/* <p className="text-black text-sm">{`${post[0].time} min ago.`}</p> */}
          <FaEarthAmericas className="text-black text-sm mx-3" />
        </header>
        <hr className="mx-6 mt-2" />
        <div>
          <p className="m-3 text-black text-sm">
            {title}
          </p>
        </div>
        <div className="w-full bg-black py-1 px-10">
          {
            video ? (
              <video
                src={video}
                className="w-full rounded-md"
                controls
              />
            ) : (
              <img
                src={photo}
                className="w-full rounded-md"
                alt=""
              />
            )
          }
        </div>
        <hr className="mx-6 mt-2" />
        <div className="flex items-center justify-between mx-5">
          <AiFillLike className="text-slate-500 cursor-pointer text-2xl my-2 mx-10" />
          <FaCommentAlt className="text-slate-500 cursor-pointer text-2xl my-2 mx-10" />
          <FaShareNodes className="text-slate-500  cursor-pointer text-2xl my-2 mx-10" />
        </div>
      </div>
    </div>
  );
};

export default PostItem;