import CardOfPost from "../components/CardOfPost";
import Coversection from "../components/Coversection";

export default function Home() {
  return (
    <div className="">
      <Coversection />

      <div className="text-5xl text-center p-5 mt-10">Recent Blog Post</div>
      <CardOfPost />
    </div>
  );
}
