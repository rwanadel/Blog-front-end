import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div
          style={{ backgroundColor: "#be7c68" }}
          className="row-span-1 md:ms-24 mt-16 relative h-64 sm:h-80 lg:h-96 lg:w-[700px] w-full"
        >
          <img
            className="absolute -bottom-10 right-10 h-40 sm:h-52 md:h-64 lg:h-72 w-auto"
            src="5.jfif"
            alt="landingphoto"
          />
        </div>

        <div className="row-span-2 flex flex-col items-center md:items-end">
          <div
            style={{ color: "#be7c68" }}
            className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl pt-8 md:pt-16 text-center md:text-right"
          >
            R/Blog
          </div>
          <div className="flex flex-col space-y-2 text-center md:text-right mt-4">
            <Link
              style={{ backgroundColor: "#be7c68" }}
              className="btn btn-md text-white text-lg sm:text-xl md:text-2xl w-full sm:w-auto"
              to="/login"
            >
              Login Now
            </Link>
            <Link
              to="/sign-up"
              style={{ backgroundColor: "#be7c68" }}
              className="btn btn-md text-white text-lg sm:text-xl md:text-2xl w-full sm:w-auto"
            >
              Signup Now
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#be7c68" }}
        className="p-5 text-white text-center md:text-right flex flex-col justify-center mt-6 lg:ml-auto lg:w-[600px] w-full"
      >
        Welcome to our blog community, where creativity meets inspiration! Join
        us to explore insightful articles, share your thoughts, and connect with
        like-minded individuals. By signing up, you’ll stay updated with the
        latest content, receive personalized recommendations, and become a part
        of a growing network of passionate readers and writers. Don’t miss
        out—sign up today and start your journey with us!
      </div>
    </div>
  );
}
