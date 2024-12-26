
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import PropTypes from "prop-types";

const Comment = ({ item }) => {
    const user = useAuth();
    console.log(item);


    const handleAddComment = async (e) => {
        e.preventDefault();
        const text = e.target.comment.value; // Get comment text from the input
        const commentEmail = user.email; // Ensure you are getting the email from the correct source

        if (!text || !commentEmail) {
            // Check if text and email are present before making the request
            console.error("Comment text and user email are required");
            return;
        }

        const comment = { text, commentEmail }; // Construct the comment object

        try {
            const response = await axios.put(`http://localhost:5000/api/${item?._id}/putcomment`, comment);
            console.log(response.data);
        } catch (error) {
            console.error("Error adding comment:", error.response?.data?.message || error.message);
        }
    };

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={() => document.getElementById('my_modal_3').showModal()}>Comment</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg"></h3>
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
                    <div>
                        {Array.isArray(item.comment) && item.comment.length > 0 ? (
                            item.comment.map((comment, index) => (
                                <div key={index} className="p-2 border-b">
                                    <p><strong>{comment.commentEmail}</strong>: {comment.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>No comments yet.</p>
                        )}
                    </div>
                </div>

            </dialog>
        </div>
    );
};
Comment.propTypes = { item: PropTypes.object.isRequired };

export default Comment;