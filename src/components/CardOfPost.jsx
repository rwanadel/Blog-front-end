// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function CardOfPost() {
//   const { user } = useContext(AuthContext);
//   console.log(user);
//   console.log(user._id);
//   const userId = user._id;
//   const [posts, setPosts] = useState([]); // State to store the fetched posts

//   const deletePost = async (id) => {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     try {
//       // Ensure the token is available
//       if (!token) {
//         alert("You must be logged in to create a post.");
//         return;
//       }

//       // Send the post request with the form data and token in headers
//       await axios.delete(
//         `https://react-blog-api-by-rwan.glitch.me/api/v1/posts/${id}`,

//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: token, // Include token in the Authorization header
//           },
//         }
//       );
//       console.log(token);

//       alert("Post deleted successfully");
//     } catch (error) {
//       console.error("Error:", error);
//       if (error.response) {
//         console.error("Server error:", error.response.data);
//         alert(
//           `Error: ${error.response.data.message || "Something went wrong"}`
//         );
//       } else {
//         console.error("Error:", error.message);
//         alert("Failed to create post");
//       }
//     }
//   };

//   // Fetch posts when the component mounts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           `https://react-blog-api-by-rwan.glitch.me/api/v1/posts`
//         );
//         console.log("Fetched posts:", response.data); // Log the data to check its structure

//         setPosts(response.data); // Assuming response.data is an array
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-20 m-20 ">
//       {posts.length > 0 ? (
//         posts.map((post, index) => (
//           <div
//             key={index}
//             className="card card-compact bg-base-100 w-96 shadow-xl"
//           >
//             <figure>
//               <img src={post.images[0]} alt="beach" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{post.title}</h2>{" "}
//               {/* Display post title */}
//               <p>{post.description}</p> {/* Display post description */}
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">view post</button>

//                 {userId === post.userId && (
//                   <div>
//                     <Link
//                       to={`/edit/${post._id}`}
//                       className="btn btn-sm btn-primary"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       className="btn btn-sm btn-primary"
//                       onClick={() => deletePost(post._id)}
//                     >
//                       delete
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p> // Display a loading message while fetching data
//       )}
//     </div>
//   );
// }

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function CardOfPost() {
  const { user } = useContext(AuthContext);
  const userId = user._id;
  const [posts, setPosts] = useState([]); // State to store the fetched posts

  // Function to delete a specific post
  const deletePost = async (id) => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        alert("You must be logged in to delete a post.");
        return;
      }

      // Sending delete request to delete only the post with the specific id
      await axios.delete(
        `https://react-blog-api-by-rwan.glitch.me/api/v1/posts/${id}`,
        {
          headers: {
            Authorization: token, // Include token in the Authorization header
          },
        }
      );
      alert("Post deleted successfully");

      // After deleting the post, filter it out from the UI
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(
          `Error: ${error.response.data.message || "Something went wrong"}`
        );
      } else {
        alert("Failed to delete post");
      }
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://react-blog-api-by-rwan.glitch.me/api/v1/posts`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 mx-14 mt-16">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="card card-compact bg-base-100 w-full lg:w-96 shadow-xl"
          >
            <figure>
              <img src={post.images[0]} alt="post" className="w-full h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View post</button>

                {userId === post.userId && (
                  <div>
                    <Link
                      to={`/edit/${post._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => deletePost(post._id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
