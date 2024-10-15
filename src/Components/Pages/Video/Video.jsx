import { GoDotFill } from "react-icons/go";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

import videoPost from "../../../assets/Videos/videoPost.mp4";
const Video = () => {
  let post = [
    {
      img: "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
      name: "Abdullah Al Nirob",
      time: 21,
      video: videoPost,
    },
  ];
  return (
    <div className="my-4 bg-white py-10 rounded mx-5 md:mx-80">
      <div className="mx-2 md:mx-10">
        <div className="ring-1 rounded ring-gray-400 my-4  bg-white py-5">
          <header className="flex items-center">
            <img
              src={post[0].img}
              className="ring-slate-700 mx-5 w-[40px] ring-1 rounded-full"
              alt=""
            />
            <p className="text-black text-sm flex items-center cursor-pointer hover:underline">
              {post[0].name}
              <MdVerified className="text-blue-700" />
            </p>
            <GoDotFill className="text-black text-sm mx-3" />
            <p className="text-black text-sm">{`${post[0].time} min ago.`}</p>
            <FaEarthAmericas className="text-black text-sm mx-3" />
          </header>
          <hr className="mx-6 mt-2" />
          <div>
            <p className="m-3 text-black text-sm">
              নাবাল কিংবা বৃদ্ধ নাচবে সবাই সময় টিভির ইন্ট্রোতে । বিস্তারিত
              ভিডিওতে পরিবেশন করছে রিপোর্টার নিরব এবং রাফেল ভাই।
              <br />
              <p className="text-blue-700">#somoytv #dance #ajkerreport #bd</p>
            </p>
          </div>
          <div className="w-full bg-black py-1 px-10">
            <video src={videoPost} controls className="w-3/4 mx-auto mt-5" />
          </div>
          <hr className="mx-6 mt-2" />
          <div className="flex items-center justify-between mx-5">
            <AiFillLike className="text-slate-500 cursor-pointer text-2xl my-2 mx-10" />
            <FaCommentAlt className="text-slate-500 cursor-pointer text-2xl my-2 mx-10" />
            <FaShareNodes className="text-slate-500  cursor-pointer text-2xl my-2 mx-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
