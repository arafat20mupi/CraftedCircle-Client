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
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-hot-toast";

const PostItem = ({ item }) => {
  const axios = useAxiosPublic()
  const { userName, userImage, title, photo, video } = item;
  const [showInput, setShowInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalComment, setIsModalComment] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const user = useAuth();

  const shareURL = `http://localhost:5173`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const openCommentModal = () => setIsModalComment(true);
  const closeCommentModal = () => setIsModalComment(false);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const text = e.target.comment.value;
    const commentEmail = user.email;
    const commentPhoto = user.photoURL
    const commentName = user.displayName

    if (!text || !commentEmail) {
      console.error("Comment text and user email are required");
      return;
    }

    const comment = { text, commentEmail , commentPhoto, commentName };

    try {
      await axios.put(
        `/api/${item._id}`,
        comment
      );
      toast.success('Comment added successfully')
      setShowInput(false);
      e.target.reset();
    } catch (error) {
      console.error(
        "Error adding comment:",
        error.response?.data?.message || error.message
      );
    }
  };


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

        {/* Comment And Like section */}
        <div className="flex justify-end px-4">
          {/* <span>
            <AiFillLike />
            <p className="px-5 py-2 text-gray-500 text-sm">{item.likes.length}</p>
          </span> */}
          <span onClick={openCommentModal} className="flex underline items-center">
            <FaComment />
            <p className="px-5 py-2 text-gray-500 text-sm">{item.comment.length}</p>
          </span>
        </div>
        <div className="flex px-4 justify-between items-center">
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
                  {['👍', '💖', '😊', '😂', '😍', '😎', '😭', '😡'].map((emoji, index) => (
                    <button key={index} className="hover:translate-y-[-10px] transition-all duration-500 text-3xl">
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowInput(!showInput)}
            className="flex items-center space-x-2 text-slate-500 cursor-pointer text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaComment />
            <p>Comment</p>
          </button>

          <button
            onClick={openModal}
            className="flex items-center space-x-2 text-slate-500 cursor-pointer text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaShareNodes />
            <p>Share</p>
          </button>
        </div>

        {showInput && (
          <div className="mt-4 px-5">
            <form onSubmit={handleAddComment}>
              <div className="flex items-center border border-gray-300 rounded-3xl p-2">
                <input
                  name="comment"
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-grow p-2 outline-none"
                />
                <button
                  type="submit"
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
        {/* Comment Modal */}
        {isModalComment && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50  ">

            <h3 className="font-bold text-black text-lg mb-4">Comment:</h3>
            {
              item.comment.map((comment) => {
                <p>{comment.comment}</p>
              })
            }
            <button
              onClick={closeCommentModal}
              className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">Close</button>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-md">
              <h3 className="font-bold text-lg mb-4">Share With:</h3>
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
