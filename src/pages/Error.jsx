import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div
      className="text-center"
      style={{ height: "735px", margin: "0", backgroundColor: "#be7c68" }}
    >
      <div className=" flex justify-center font-mono font-bold text-4xl text-white pt-16">
        R/Blog
      </div>
      <div className=" flex justify-center text-white font-mono font-bold text-4xl md:text-9xl m-44">
        404
      </div>
      <Link
        className="  btn btn-active text-white w-full sm:w-auto sm:ms-0 lg:w-60  text-lg sm:text-xl md:text-2xl"
        to="/home"
      >
        Go to Home
      </Link>
    </div>
  );
}
