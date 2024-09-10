// import { useState } from "react";
// import Navbar from "../components/Navbar";
// //import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// //import { AuthContext } from "../context/AuthContext";

// export default function NewPost() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.set("title", data.title);
//     formData.set("summary", data.summary);
//     formData.set("image", data.file[0]); // Getting the first file from the input
//     formData.set("content", data.content);

//     const token = localStorage.getItem("token");

//     await axios.post(
//       "http://localhost:5000/api/v1/posts",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     alert("Post Created Successfully");
//     navigate("/");
//   };
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-md mx-auto border p-5 m-9 rounded-lg"
//         >
//           <div>
//             <h1 className="text-center text-3xl pb-6 text-sky-700 font-bold">
//               Add New Post
//             </h1>
//           </div>

//           <div className="flex gap-3">
//             {/* Title  */}
//             <div className="mb-4">
//               <label
//                 htmlFor="title"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Title
//               </label>
//               <input
//                 onChange={(event) =>
//                   setFormData({ ...formData, title: event.target.value })
//                 }
//                 type="text"
//                 id="title"
//                 className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                   errors.email ? "border-red-500" : ""
//                 }`}
//               />
//               {errors.title && (
//                 <span className="text-red-500">{errors.title}</span>
//               )}
//             </div>

//             {/* description */}
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 description
//               </label>
//               <input
//                 onChange={(event) =>
//                   setFormData({ ...formData, description: event.target.value })
//                 }
//                 type="text"
//                 id="description"
//                 className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                   errors.password ? "border-red-500" : ""
//                 }`}
//               />
//               {errors.description && (
//                 <span className="text-red-500">{errors.description}</span>
//               )}
//             </div>
//             {/*image */}
//             <div className="mb-4">
//               <label
//                 htmlFor="images"
//                 className="block text-sm font-medium text-gray-700"
//               >
//               images
//               </label>
//               <input
//                 onChange={(event) =>
//                   setFormData({ ...formData, images: event.target.value })
//                 }
//                 type="text"
//                 id="images"
//                 className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                   errors.images ? "border-red-500" : ""
//                 }`}
//               />
//               {errors.images && (
//                 <span className="text-red-500">{errors.images}</span>
//               )}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// //   if (Object.keys(validationErrors).length === 0) {
// //     axios.post("http://localhost:3000/posts")
// //       .then(res => {
// //         const user = res.data.find(user => user.email === formData.email);
// //         if (user) {
// //           if (user.password === formData.password) {
// //             login();
// //             alert("Login Successful");
// //             navigate('/'); // Redirect to home page after successful login
// //           } else {
// //             validationErrors.password = "Wrong Email or Password";
// //             validationErrors.email = "Wrong Email or Password";
// //           }
// //         } else {
// //           validationErrors.email = "Wrong Email or Password";
// //         }
// //         setErrors(validationErrors);
// //       })
// //       .catch(err => console.log(err));
// //   }
// //const { login } = useContext(AuthContext);
//   // const [formData, setFormData] = useState({
//   //   title: "",
//   //   description: "",
//   //   images:"",
//   // });

//   // const [errors, setErrors] = useState({});
//   // const navigate = useNavigate();

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   let validationErrors = {};

//   //   if (!formData.title) {
//   //     validationErrors.title = "title is required";
//   //   }

//   //   if (!formData.description) {
//   //     validationErrors.description = "description is required";
//   //   }
//   //   if (!formData.images) {
//   //     validationErrors.images = "imges is required";
//   //   }

//   //   setErrors(validationErrors);

//   //   if (Object.keys(validationErrors).length === 0) {
//   //     try {
//   //       // Retrieve token from localStorage
//   //       const token = localStorage.getItem("token");
//   //       console.log("Token from localStorage:", token);
      
//   //       // Check if token exists
//   //       if (!token) {
//   //         alert("You must be logged in to create a post.");
//   //         return;
//   //       }
      
//   //       // Send the token in the request headers
//   //       const res = await axios.post(
//   //         "http://localhost:5000/api/v1/posts",
//   //         formData,
//   //         {
//   //           headers: {
//   //             Authorization: `${token}`, // Include token in the Authorization header
//   //           },
//   //         }
//   //       );
      
//   //       console.log("Response:", res.data);
//   //       alert("Post created successfully");
//   //       navigate("/");
//   //     } catch (error) {
//   //       console.error("Error:", error);
//   //       if (error.response) {
//   //         console.error("Server error:", error.response.data);
//   //         alert(
//   //           `Error: ${error.response.data.message || "Something went wrong"}`
//   //         );
//   //       } else {
//   //         console.error("Error:", error.message);
//   //         alert("Failed to create post");
//   //       }
//   //     }
//   //   }
//   // };




import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function NewPost() {
  const navigate = useNavigate();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.set("title", data.title);
    formData.set("description", data.description);
    formData.set("images", data.images[0]); // Getting the first file from the input

    const token = localStorage.getItem("token");
    console.log(token);
    try {
      // Ensure the token is available
      if (!token) {
        alert("You must be logged in to create a post.");
        return;
      }

      // Send the post request with the form data and token in headers
      const res = await axios.post(
        "http://localhost:5000/api/v1/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token, // Include token in the Authorization header
          },
        }
      );
    console.log(token)
      console.log("Response:", res.data);
      alert("Post created successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Server error:", error.response.data);
        alert(`Error: ${error.response.data.message || "Something went wrong"}`);
      } else {
        console.error("Error:", error.message);
        alert("Failed to create post");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto border p-5 m-9 rounded-lg"
        >
          <div>
            <h1 style={{color:"#be7c68"}} className="text-center text-3xl pb-6 text-sky-700 font-bold">
              Add New Post
            </h1>
          </div>

          <div>
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                id="title"
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.title ? "border-red-500" : ""
                }`}
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                {...register("description", { required: "Description is required" })}
                type="text"
                id="description"
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.description ? "border-red-500" : ""
                }`}
              />
              {errors.description && (
                <span className="text-red-500">{errors.description.message}</span>
              )}
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                {...register("images", { required: "Image is required" })}
                type="file"
                id="images"
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.images ? "border-red-500" : ""
                }`}
              />
              {errors.images && (
                <span className="text-red-500">{errors.images.message}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            style={{backgroundColor:'#be7c68'}}
            className="w-60 ms-20 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}





