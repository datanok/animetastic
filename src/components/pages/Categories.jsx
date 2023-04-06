import { useEffect } from "react";
export default function Categories() {
  useEffect(() => {
    document.title = "Categories";
  }, []);
  return (
    <div className=" flex flex-col w-full">
      <img
        className="object-fit w-[444px] mx-auto"
        src="https://media3.giphy.com/media/H1jSPXCJmo8AZi3gdP/giphy.gif?cid=ecf05e479t4oqv84xd93gw71ajtuhqxapx8hnxr56vw6rmsw&rid=giphy.gif&ct=s"
        alt=""
      />
      <h1 className="text-white text-2xl font-bold text-center">
        Page under construction
      </h1>
    </div>
  );
}
