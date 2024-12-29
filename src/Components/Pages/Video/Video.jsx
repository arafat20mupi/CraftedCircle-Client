import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PostItem from "./PostItem"; // Assuming PostItem is a component to render each post

const Video = () => {
  const [post, setPost] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchPosts = () => {
      axiosPublic.get("/api/getPost")
        .then(response => {
          if (Array.isArray(response.data.post)) {
            setPost(response.data.post);
          } else {
            console.warn("Response data is not in the expected format:", response.data);
            setPost([]);
          }
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
          setPost([]);
        });
    };

    // Fetch data initially and then every 2 seconds
    fetchPosts();
    const intervalId = setInterval(fetchPosts, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [axiosPublic]);

  return (
    <div className="my-4 bg-white py-1 rounded h-[500px] overflow-y-scroll">
      {post.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        post.map((item, index) => (
          <PostItem key={item._id || index} index={index} item={item} />
        ))
      )}
    </div>
  );
};

export default Video;
