import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function NewPost() {
  const { user } = useContext(AuthContext);
  const userId = user?._id;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.set("title", data.title);
    formData.set("description", data.description);
    formData.set("images", data.images[0]);

    if (userId) {
      formData.set("userId", userId);
    } else {
      alert("User ID not found. Please log in.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      if (!token) {
        alert("You must be logged in to create a post.");
        return;
      }

      const res = await axios.post(
        "https://react-blog-api-by-rwan.glitch.me/api/v1/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );

      console.log("Response:", res.data);
      alert("Post created successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Server error:", error.response.data);
        alert(
          `Error: ${error.response.data.message || "Something went wrong"}`
        );
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
            <h1
              style={{ color: "#be7c68" }}
              className="text-center text-3xl pb-6 text-sky-700 font-bold"
            >
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
                {...register("description", {
                  required: "Description is required",
                })}
                type="text"
                id="description"
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.description ? "border-red-500" : ""
                }`}
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
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
            style={{ backgroundColor: "#be7c68" }}
            className="w-60 ms-20 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
