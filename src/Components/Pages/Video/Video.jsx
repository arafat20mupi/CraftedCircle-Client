import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import PostItem from "./PostItem"; // Assuming PostItem is a component to render each post

const Video = () => {
  const [post, setPost] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch data from the API
    axiosPublic.get('/api/getPost')
      .then(response => {
        console.log(response.data); // Log the full response data to confirm its structure
        // Ensure that response.data.post is an array
        if (Array.isArray(response.data.post)) {
          setPost(response.data.post); // Set the posts array from response.data.post
        } else {
          console.warn("Response data is not in the expected format:", response.data);
          setPost([]); // Handle the case where the data is not in the expected format
        }
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setPost([]); // Handle error by setting post to an empty array
      });
  }, [axiosPublic]);

  console.log(post); // Log the post array to confirm it's set correctly

  return (
    <div className="my-4 bg-white py-1 rounded h-[500px] overflow-y-scroll">
      {post.length === 0 ? (
        <p>No posts available.</p> // Display a message when there are no posts
      ) : (
        post.map((item, index) => (
          <PostItem key={item._id} index={index} item={item} /> // Render each post using PostItem
        ))
      )}
    </div>
  );
};

export default Video;
