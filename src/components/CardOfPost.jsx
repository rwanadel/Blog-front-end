// import axios from "axios"

// export default function CardOfPost() {

//         axios.get("http://localhost:3000/posts")

//   return (
//     <div>
//     <div className="card card-compact bg-base-100 w-96 shadow-xl">
//     <figure>
//       <img
//         src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//         alt="Shoes" />
//     </figure>
//     <div className="card-body">
//       <h2 className="card-title">Shoes!</h2>
//       <p>If a dog chews shoes whose shoes does he choose?</p>
//       <div className="card-actions justify-end">
//         <button className="btn btn-primary">Buy Now</button>
//       </div>
//     </div>
//   </div>
//     </div>
//   )
// }

import { useState, useEffect } from "react";
import axios from "axios";

export default function CardOfPost() {
  const [posts, setPosts] = useState([]); // State to store the fetched posts

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/posts`);
        console.log("Fetched posts:", response.data); // Log the data to check its structure
        setPosts(response.data); // Assuming response.data is an array
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-20 m-20 ">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="card card-compact bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img src={post.images[0]} alt="beach" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>{" "}
              {/* Display post title */}
              <p>{post.description}</p> {/* Display post description */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">view post</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p> // Display a loading message while fetching data
      )}
    </div>
  );
}

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function CardOfPost() {
//   const [posts, setPosts] = useState([]); // State to store the fetched posts

//   // Fetch posts when the component mounts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/v1/posts");
//         console.log("Fetched posts:", response.data); // Log the data to check its structure
//         setPosts(response.data); // Assuming response.data is an array
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts(); // Fetch posts when component mounts
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div>
//       {posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post.id} className="card card-compact bg-base-100 w-96 shadow-xl">
//             <figure>
//               <img src="Beach.jfif" alt="beach" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{post.title}</h2> {/* Display post title */}
//               <p>{post.description}</p> {/* Display post description */}
//               <div className="card-actions justify-end">
//                 <button className="btn btn-primary">view post</button>
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
