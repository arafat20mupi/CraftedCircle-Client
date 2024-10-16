import { Link} from "react-router-dom";
import HomeCenter from "./HomeCenter";
import { MdGroups3, MdVideoLibrary } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";

const Home = () => {


    const messages = [
        { name: "Ahammed Alli", text: "Lorem ipsum dolor sit amet.", img: "https://placehold.co/32x32", alt: "Profile picture of Ahammed Alli" },
        { name: "Mark William", text: "Lorem ipsum dolor sit amet.", img: "https://placehold.co/32x32", alt: "Profile picture of Mark William" },
        { name: "Ranvir Sing", text: "Lorem ipsum dolor sit amet.", img: "https://placehold.co/32x32", alt: "Profile picture of Ranvir Sing" },
        { name: "Happy Rose", text: "Lorem ipsum dolor sit amet.", img: "https://placehold.co/32x32", alt: "Profile picture of Happy Rose" },
        { name: "Angela Flower", text: "Lorem ipsum dolor sit amet.", img: "https://placehold.co/32x32", alt: "Profile picture of Angela Flower" },
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr,1fr] max-w-screen-2xl mx-auto">
            <div className=" hidden lg:block">
                <div className="shadow-md bg-white border-[#D1D5DB] border-2 h-screen rounded-2xl pl-4 mx-5 my-5">
                    <div>
                        <div className="avatar flex text-center pt-4 pl-1 items-center gap-3">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                            <h1 className="font-medium text-2xl">UserName</h1>
                        </div>
                    </div>
                    <h1 ><Link to={'/video'} className="flex items-center gap-2"><MdVideoLibrary className="text-5xl text-[#374151] my-4" /><span className="text-2xl font-medium text-[#374151]">Video</span></Link></h1>
                    <h1 ><Link to={'/group'} className="flex items-center gap-2"><MdGroups3 className="text-5xl text-[#374151] my-4" /> <span className="text-2xl font-medium text-[#374151]">Groups</span></Link></h1>
                    <h1 ><Link to={'/merketPlace'} className="flex items-center gap-2"><FiHome className="text-5xl text-[#374151] my-4" /><span className="text-2xl font-medium text-[#374151]">MarketPlace</span></Link></h1>
                    <h1 ><Link to={'/craftrdAi'} className="flex items-center gap-2"><AiOutlineRobot className="text-5xl text-[#374151] my-4" /><span className="text-2xl font-medium text-[#374151]">Ai Bot</span></Link></h1>
                </div>
            </div>
            <div className="border-[#D1D5DB] border-2 rounded-lg bg-white mt-3 mr-6"><HomeCenter></HomeCenter></div>
            <div className="border-[#D1D5DB] border-2 rounded-lg bg-white hidden lg:block">
                {/*Message*/}
                <div className="m-5 mx-auto text-black rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Message</h2>
                    </div>
                    <div className="relative mb-4">
                        <input type="text" placeholder="Search Message" className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none" />
                        <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
                    </div>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={message.img} alt={message.alt} className="w-8 h-8 rounded-full mr-3" />
                                <div>
                                    <h3 className="text-sm font-semibold">{message.name}</h3>
                                    <p className="text-xs text-gray-500">{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Friends */}
                <div>
                    <div className="p-4  rounded-lg shadow-md ">
                        <h2 className="text-lg font-semibold mb-4">Friend Requests</h2>
                        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
                            <img src="https://placehold.co/40x40" alt="Profile picture of Anna Loise" className="w-10 h-10 rounded-full mr-4" />
                            <div className="flex-1">
                                <div className="font-semibold text-black">Anna Loise</div>
                                <div className="text-black text-sm">4 mutual Following</div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-blue-600  px-4 py-2 rounded">Accept</button>
                                <button className="bg-red-600  px-4 py-2 rounded">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

