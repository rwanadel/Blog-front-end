// src/components/Login.jsx
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext); // Context for user authentication
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation and login logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Manual validation for email
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    // Manual validation for password
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    // Set errors if validation fails
    setErrors(validationErrors);

    // If no errors, proceed with the login request
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(
          "https://react-blog-api-by-rwan.glitch.me/api/v1/users/login",
          formData
        );
        console.log(res.data);

        // If successful, store the token and log in the user
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        login(res.data.token, res.data.user);
        //const user = res.data.user;
        //login(user); // Log in the user by updating the context4

        console.log(res.data.token);
        // Show success notification and redirect
        alert("Login Successful");
        console.log("hi");
        navigate("/home");
      } catch (error) {
        // Show error notification if the login fails
        alert("Login failed");
        console.log("Login error:", error);
      }
    }
  };

  return (
    <div
      style={{ height: "735px", margin: "0", backgroundColor: "#be7c68" }}
      className="w-full p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="md:hidden flex justify-center font-mono font-bold text-4xl text-white">
        R/Blog
      </div>
      <div className="hidden md:flex justify-center">
        <img
          className="w-80 h-96 object-cover  rounded-lg"
          src="3.jfif"
          alt="Cover Image"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: " #F5F5F5" }}
        className="max-w-md mx-auto border p-5 rounded-lg h-96"
      >
        <div>
          <h1
            style={{ color: "#be7c68" }}
            className="text-center text-3xl pb-6  font-bold"
          >
            Log In
          </h1>
        </div>

        <div>
          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              type="email"
              id="email"
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>

          {/* password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
              type="password"
              id="password"
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#be7c68" }}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
        <p className="">
          Already have account?{" "}
          <Link to="/sign-up" className="text-black-600">
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
}
