import { IoMdPhotos } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Video from "../Video/Video";


const HomeCenter = () => {
    return (
        <div className="m-2">
            <div className="text-[#374151] border-[#D1D5DB] border-2 p-4 rounded-lg w-full">
                <div className="flex items-center mb-4">
                    <img src="https://placehold.co/40x40" alt="User profile picture" className="rounded-full w-10 h-10 mr-3" />
                    <input
                        type="text"
                        placeholder="What's on your mind, User?"
                        className="bg-white text-[#374151] border-[#D1D5DB] border-2 rounded-full px-4 py-2 w-full focus:bg-white focus:text-gray-700 focus:border-teal-600 focus:shadow-lg focus:shadow-teal-600/20 focus:outline-none placeholder-gray-400 focus:placeholder-gray-600"
                    />
                </div>

                <div className="flex justify-around">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <IoVideocam className="text-red-600 text-2xl" />
                        <span>Live video</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <IoMdPhotos className="text-green-600 text-2xl" />
                        <span>Photo/video</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <MdOutlineEmojiEmotions className="text-2xl text-yellow-600" />
                        <span>Feeling/activity</span>
                    </div>
                </div>
            </div>
            <div>
            <Video></Video>
            </div>
            
        </div>
    );
};

export default HomeCenter;