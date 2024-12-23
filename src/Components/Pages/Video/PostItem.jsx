/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaEarthAmericas, FaShareNodes } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

const PostItem = ({ item }) => {
  const { userName, userImage, title, photo, video } = item;
  const [showInput, setShowInput] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shareURL = `http://localhost:5173`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleInput = () => setShowInput(!showInput);

  return (
    <div className="mx-2 md:mx-4">
      <div className="ring-1 rounded-lg ring-gray-300 my-4 bg-white py-5 shadow-md hover:shadow-lg transition duration-300">
        <header className="flex items-center px-5">
          {userImage && (
            <img
              src={userImage}
              className="ring-2 ring-blue-500 mr-4 w-[50px] h-[50px] rounded-full"
              alt="User Avatar"
            />
          )}
          <div className="flex flex-col">
            <p className="text-black text-sm font-semibold flex items-center cursor-pointer hover:underline">
              {userName} <MdVerified className="text-blue-600 ml-1" />
            </p>
            <div className="flex items-center text-gray-500 text-xs mt-1">
              <span>2 mins ago</span> <GoDotFill className="mx-2" />
              <FaEarthAmericas />
            </div>
          </div>
        </header>

        <hr className="mx-5 my-3" />

        <div className="px-5">
          {title && <p className="text-gray-800 text-sm mb-4">{title}</p>}
        </div>

        <div className="w-full bg-black/5 py-2 px-5">
          {video ? (
            <video src={video} className="w-full rounded-md" controls />
          ) : (
            photo && (
              <img
                src={photo}
                className="w-full rounded-md object-cover"
                alt="Post Media"
              />
            )
          )}
        </div>

        <hr className="mx-5 my-3" />

        <div className="flex px-4 justify-between items-center">
          <div
            className="relative"
            onMouseEnter={() => setShowEmoji(true)}
            onMouseLeave={() => setShowEmoji(false)}
          >
            <button className="flex items-center space-x-2 text-slate-500 cursor-pointer text-xl hover:text-blue-500 transition-colors duration-300">
              <AiFillLike />
              <p>Like</p>
            </button>
            {showEmoji && (
              <div className="absolute top-[-53px] left-[-10px] bg-white p-2 rounded-lg shadow-md flex space-x-2">
                {["👍", "💖", "😊", "😂", "😍", "😎", "😭", "😡"].map(
                  (emoji, index) => (
                    <button
                      key={index}
                      className="hover:translate-y-[-10px] transition-all duration-500 text-3xl"
                    >
                      {emoji}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <button
            onClick={toggleInput}
            className="flex items-center space-x-2 text-slate-500 cursor-pointer text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaComment />
            <p>Comment</p>
          </button>

          <button
            id="share-btn"
            onClick={openModal}
            className="flex items-center space-x-2 text-slate-500 cursor-pointer text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaShareNodes />
            <p>Share</p>
          </button>
        </div>

        {showInput && (
          <div className="mt-4 px-5">
            <div className="flex items-center border border-gray-300 rounded-3xl p-2">
              <input
                type="text"
                placeholder="Write a comment..."
                className="flex-grow p-2 outline-none"
              />
              <button
                type="button"
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-md animate__animated animate__fadeIn animate__faster">
              <h3 className="font-bold text-lg mb-4">Share With:</h3>
              <p className="mb-4">
                Choose Your Platforms where you want to share:
              </p>
              <div className="flex items-center gap-4 mb-4">
                <FacebookShareButton url={shareURL}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={shareURL}>
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <EmailShareButton url={shareURL}>
                  <EmailIcon size={40} round={true} />
                </EmailShareButton>
              </div>
              <button
                onClick={closeModal}
                className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
