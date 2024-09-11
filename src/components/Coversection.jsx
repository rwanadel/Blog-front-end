// import Navbar from "./Navbar";

// export default function Coversection() {
//   return (
//     <div className="grid grid-cols-3 relative">
//       <div style={{backgroundColor:''}} className="col-span-2 text-center h-2000 flex flex-col items-center " >
//       <Navbar/>
//       <h1  className="font-mono font-bold text-7xl m-5">Welcome to R/Blog</h1>
//       <p style={{width:"600px"}} className=" m-auto text-start text-gray-500">Discover a world of insightful articles, engaging stories, and expert perspectives.
//        Whether you’re passionate about technology, eager to explore new ideas,
//         or just looking for thought-provoking content,
//          R/Blog offers a rich blend of topics to spark your curiosity and enrich your knowledge.</p>
//       </div>
//       <div className="col-span-1 relative " style={{backgroundColor:'#be7c68 ',height:'600px'}}>
//       <div className="w-4/5 h-97 absolute top-20 right-100  "><img className="w-4/5 h-97 absolute top-0 right-0 bottom-50 left-0" src="1.jfif"/></div>
//       </div>
//     </div>
//   )
// }

import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Coversection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 relative">
      <div className="col-span-1 md:col-span-2 text-center h-auto  px-4 py-6">
        <Navbar />
        <div className="mt-44">
          <h1 className="font-mono font-bold text-4xl md:text-7xl m-5">
            Welcome to R/Blog
          </h1>
          <p className="w-full max-w-2xl m-auto text-start text-gray-500 text-base md:text-lg">
            Discover a world of insightful articles, engaging stories, and
            expert perspectives. Whether you’re passionate about technology,
            eager to explore new ideas, or just looking for thought-provoking
            content, R/Blog offers a rich blend of topics to spark your
            curiosity and enrich your knowledge.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#be7c68 ", height: "600px" }}
        className="col-span-1 relative  md:h-96"
      >
        <img
          className="w-full h-full object-cover md:absolute md:top-20 md:-left-10 md:w-96 md:h-full"
          src="1.jfif"
          alt="Cover Image"
        />
      </div>

      <Link
        style={{ backgroundColor: "#be7c68" }}
        to="/NewPost"
        className="btn btn-active text-white w-full sm:w-auto sm:ms-0 lg:w-60 lg:ms-44 text-lg sm:text-xl md:text-2xl"
      >
        Add New Post
      </Link>
    </div>
  );
}
