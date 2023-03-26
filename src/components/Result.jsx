import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
function Result({ result }) {
  return (
    <>
      <div className="flex rounded-xl max-w-[242px]">
        <div className="relative">
          <img
            className="rounded-xl object-cover h-full"
            src={result.images.jpg.large_image_url}
            alt=""
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full h-fit bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 border-b-0 text-white
          "
          >
            <div className="flex pl-2 justify-between mr-2 pr-2">
              <IconContext.Provider
                value={{
                  style: { verticalAlign: "baseline", margin: "4px" },
                }}
              >
                <span className="flex">
                  {" "}
                  <AiFillStar className="icon" />
                  8.32
                </span>
              </IconContext.Provider>
              <span>2002</span>
              <span>TV</span>
            </div>

            <h1 className="pl-3 my-2 text-md truncate ...">{result.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Result;
