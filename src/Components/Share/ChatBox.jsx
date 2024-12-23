import { FaEdit } from "react-icons/fa";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const ChatBox = () => {
  const users = [
    {
      id: 1,
      userName: "John Doe",
      userProfile: "https://i.ibb.co.com/8r3dKBw/boy2.jpg",
      message: "Hey! How's it going?",
      lastSentTime: "10:45 AM",
      newMessages: 2,
    },
    {
      id: 2,
      userName: "Jane Smith",
      userProfile: "https://i.ibb.co.com/gt6jd0Z/girl1.jpg",
      message: "Are you coming to the meeting?",
      lastSentTime: "9:30 AM",
      newMessages: 0,
    },
    {
      id: 3,
      userName: "Mike Johnson",
      userProfile: "https://i.ibb.co.com/z2j5dCs/girl2.jpg",
      message: "Let's catch up later.",
      lastSentTime: "Yesterday",
      newMessages: 5,
    },
    {
      id: 4,
      userName: "Emily Davis",
      userProfile: "https://i.ibb.co.com/zX9t5t0/boy1.png",
      message: "Thanks for your help!",
      lastSentTime: "Monday",
      newMessages: 0,
    },
    {
      id: 5,
      userName: "David Brown",
      userProfile: "https://i.ibb.co.com/8r3dKBw/boy2.jpg",
      message: "Can we talk?",
      lastSentTime: "Tuesday",
      newMessages: 1,
    },
    {
      id: 6,
      userName: "Sophia Wilson",
      userProfile: "https://i.ibb.co.com/gt6jd0Z/girl1.jpg",
      message: "I'll send you the details.",
      lastSentTime: "10:15 AM",
      newMessages: 3,
    },
    {
      id: 7,
      userName: "Liam Garcia",
      userProfile: "https://i.ibb.co.com/z2j5dCs/girl2.jpg",
      message: "Good morning!",
      lastSentTime: "Today",
      newMessages: 0,
    },
  ];

  return (
    <div>
      <dialog id="my_modal_2" className="modal relative">
        <div className="modal-box absolute right-[25px] top-[88px]">
          {/* chat header */}
          <div className="fixed z-50 left-0 right-0 px-5 top-0">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-3xl font-bold">Chats</h3>
              <div>
                <span className="flex items-center font-bold">
                  <i className="btn btn-md btn-circle btn-ghost text-xl">
                    <HiDotsHorizontal />
                  </i>
                  <i className="btn btn-md btn-circle btn-ghost text-xl">
                    <FaArrowsUpDownLeftRight />
                  </i>
                  <i className="btn btn-md btn-circle btn-ghost text-xl">
                    <FaEdit />
                  </i>
                </span>
              </div>
            </div>
            {/* search field */}
            <div className="relative mt-4 md:mt-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    //   stroke-width="2"
                    //   stroke-linecap="round"
                    //   stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                className="w-full rounded-full py-2 pl-10 pr-4 text-gray-700 bg-white border dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
            </div>
          </div>
          {/* message section */}
          <div className='mt-28'>
            {users.map((user) => (
              <div className="flex items-center gap-5 mb-3 hover" key={user.id}>
                <img
                  className="w-16 h-16 rounded-full"
                  src={user.userProfile}
                  title={user.userName}
                  alt={user.userName}
                />
                <div>
                  <h3 className="text-lg font-bold">{user.userName}</h3>
                  <p><span className="font-semibold">{user.message.substring(0,15)}...</span> {user.lastSentTime} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ChatBox;
