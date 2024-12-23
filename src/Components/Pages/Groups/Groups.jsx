import { useState } from "react";

const Groups = () => {
  const initialPosts = [
    {
      id: 1,
      name: "Hazrat Ali",
      role: "Group Admin",
      time: "10 minutes ago",
      content: "Welcome to our group! This is the first post.",
      image: "/images/jute.jpg",
      profile: "/images/mosque.jpg",
    },
    {
      id: 2,
      name: "Md Azhar",
      role: "Member",
      time: "20 minutes ago",
      content: "Check out this amazing post!",
      image: "/images/jut.jpg",
      profile: "/images/original.png",
    },
    // Add more post objects as needed (total 10)
  ];

  const [posts] = useState(initialPosts);

  // Add additional posts dynamically
  while (posts.length < 10) {
    posts.push({
      id: posts.length + 1,
      name: "User " + (posts.length + 1),
      role: "Member",
      time: `${posts.length * 10} minutes ago`,
      content: `This is post number ${posts.length + 1}.`,
      image: "/images/449141648_122177397476034153_7233184883952858957_n.jpg",
      profile: "/images/449779401_122177397500034153_6106320203195601726_n.jpg",
    });
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen w-full">
      <div className="max-w-2xl mx-auto space-y-6 h-full">
        {" "}
        {/* Adjusted max width */}
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <img
                src={post.profile}
                alt="profile"
                className="rounded-full h-12 w-12 object-cover"
              />
              <div>
                <h1 className="font-bold text-lg">{post.name}</h1>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <p>{post.role}</p>
                  <span>&bull;</span>
                  <p>{post.time}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-4">
              <p className="text-gray-800">{post.content}</p>
            </div>

            {/* Image Section with Shadow Effect */}
            <div className="mt-4 relative">
              <img
                className="h-48 w-full object-cover rounded-lg shadow-lg opacity-80"
                src={post.image}
                alt="Post"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
            </div>

            {/* Footer Section */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center gap-2 mb-3 sm:mb-0">
                <button className="flex items-center gap-1 text-blue-600 hover:underline">
                  👍 Like
                </button>
                <button className="flex items-center gap-1 text-blue-600 hover:underline">
                  💬 Comment
                </button>
              </div>
              <button className="text-blue-600 hover:underline">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
