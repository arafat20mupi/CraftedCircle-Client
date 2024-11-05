import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";

import { IoMdPhotos } from "react-icons/io";
import Video from "../Video/Video";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
const HomeCenter = () => {
  const { user } = useContext(AuthContext)
  console.log(user);
  const userData = {
    name: user.displayName,
    img: user.photoURL,
    email: user.email,
    userId: user.uid
  }
  const handleClick = (e) => {
    e.preventDefault();
    const videoElement = document.getElementById("my_video_3");
    videoElement.play();
  };

 
  return (
    <div className="select-none">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex items-center">
            <img
              src={userData?.img}
              alt="Profile"
              className="w-10 ring-1 ring-gray-800 mx-1 rounded-full"
            />
            <h3 className="font-bold text-lg">{userData.name}</h3>
          </div>
          <div>
            <textarea
              placeholder="Write Something!"
              className="my-2 mx-1 p-2 w-full outline-none bottom-0"
            ></textarea>
          </div>
          {/* file uploader */}
          <div className="rounded-lg border border-black/5 p-10 shadow-lg">
            <label htmlFor="file">
              <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-black/50 p-10">
                <svg
                  width={35}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Complete">
                      <g id="upload">
                        {" "}
                        <g>
                          <path
                            d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                            fill="none"
                            stroke="#2E2E30"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                          <g>
                            {" "}
                            <polyline
                              data-name="Right"
                              fill="none"
                              id="Right-2"
                              points="7.9 6.7 12 2.7 16.1 6.7"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            ></polyline>{" "}
                            <line
                              fill="none"
                              stroke="black"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              x1="12"
                              x2="12"
                              y1="16.3"
                              y2="4.8"
                            ></line>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="mx-auto rounded-lg cursor-pointer bg-[#008080] hover:bg-[#006666] px-4 py-2 font-medium text-white">
                  Browse
                </div>
              </div>
            </label>
            <input
              className="hidden"
              id="file"
              type="file"
            />
          </div>
          {/* file uploader */}
          <div>
            <button onClick={handleClick} className="btn bg-[#008080] hover:bg-[#006666] text-white w-full">
              Post
            </button>
          </div>
        </div>
      </dialog>
      <div className="bg-white w-full px-5 py-3 shadow-md rounded-md">
        <div className="flex items-center justify-center">
          <img
            src="https://placehold.co/400"
            alt="User iamage"
            className="w-10 rounded-full cursor-pointer"
          />
          <input
            onClick={() => document.getElementById("my_modal_3").showModal()}
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
            <span
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2"
            >
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
