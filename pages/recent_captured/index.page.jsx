export { Page };
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import API_LINK from "../../config/API";
function Page() {
  const [currentLoc, setCurrectLoc] = useState("");
  const [data, setData] = useState([]);
  const [capture, setCapture] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const systemID = 1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const captureHistoryResponse = await fetch(
          `v1/system/1/captures/history?page_size=2&page=2`,
         
        );
  
        if (!captureHistoryResponse.ok) {
          throw new Error("Unable to fetch data");
        }
        const captureHistoryData = await captureHistoryResponse.json();
        setCapture(captureHistoryData);
        console.log(captureHistoryData);
      } catch (err) {
        console.error("Unable to fetch data, server error");
      }
    };
  
    fetchData();
  }, []);

  const handleLocation = (id) => {
    console.log(id);
    setCurrectLoc(id);
  };

  const scrollByAmount = 200; // Adjust scroll amount as needed

  const scrollPrevHandler = () => {
    const scrollContent = document.querySelector(".scroll-content");
    scrollContent.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollNextHandler = () => {
    const scrollContent = document.querySelector(".scroll-content");
    scrollContent.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full h-full max-h-screen py-5 my-4  gap-5">
        <div className=" w-11/12 m-auto h-full grid grid-cols-5 gap-5">
          <div className="col-span-1 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-4 overflow-hidden border rounded-2xl">
              <div className="max-h-10 h-full w-full bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Devices</h1>
                </div>
              </div>
              <div className="w-full h-full bg-[#F8F1D5] rounded">
                <ul className="w-11/12 h-full m-auto pt-5 flex flex-col gap-5">
                  {/* {data.map((val, key) => (
                    <li className="w-full h-full max-h-12 border overflow-hidden rounded-full bg-[#F9F5E6]">
                      <button className="w-full h-full font-semibold text-center">
                        {val.location}
                      </button>
                    </li>
                  ))} */}
                  <li className="w-full h-full max-h-12 border overflow-hidden rounded-full bg-[#F9F5E6]">
                    <button className="w-full h-full font-semibold text-center">
                      Miraiza Elisa Street
                    </button>
                  </li>
                  <li className="w-full h-full max-h-12 border overflow-hidden rounded-full bg-[#F9F5E6]">
                    <button className="w-full h-full font-semibold text-center">
                      Miraiza Elisa Street
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row-span-2 overflow-hidden border rounded-2xl p-4">
              <div className="w-full h-full">
                <h1 className=" flex font-semibold justify-start mb-12">
                  No. of Detection count
                </h1>
                <p className="text-5xl font-bold">20.00</p>
                {/* <p>{selectedImage || data[0]?.name}ssss</p> */}s
              </div>
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-6 col-span-1 flex flex-col ">
              <h1 className="font-semibold w-fit text-2xl px-5 py-2 bg-[#CBBF93] rounded-t">
                Device Picture
              </h1>
              <div className="w-full h-[600px] border-red-400 border-2 mb-2  rounded object-contain">
                {/* <figure className=" w-full h-full"> */}
                <img
                  // src={selectedImage || data[0]?.picture} // Fallback to the first image if none is selected
                  // src={data.find((item) => item.id === selectedImage)?.picture}
                  className="w-full h-[600px] object-cover fade-in rounded"
                  // alt={selectedImage || data[0]?.name}
                />
                {/* </figure> */}

                {/* <p>{selectedImage || data[0]?.name}ssss</p> */}
              </div>
              <div className="w-full h-[50px] flex justify-center items-center bg-[#CBBF93] rounded p-5">
                DD/MM/YYYY | 00:00:00 AM | Location
                {/* {selectedImage} */}
              </div>
            </div>
          </div>

          {/* Carousel */}
          {/* <div className="col-span-5">
            <div className="h-[200px]  mb-4 flex justify-center items-center gap-2 w-full overflow-x-auto overflow-y-hidden   border-2">
              {data.map((item) => (
                <img
                  key={item.id}
                  src={item.picture}
                  className="w-[500px] h-[200px] p-4 object-cover cursor-pointer"
                  alt=""
                  onClick={() => setSelectedImage(item.picture)}
                />
              ))}
            </div>
          </div> */}

          <div className="col-span-5">
            <div className="scroll-container flex items-center justify-center">
              <div className="scroll-content h-auto mb-4 gap-2 w-full overflow-x-auto overflow-y-hidden px-8">
                {/* Your images here */}
                {/* {capture.map((item) => (
                  <img
                    // key={item.id}
                    src={item.picture}
                    className="scroll-item w-[100px] h-[200px] object-cover cursor-pointer"
                    alt=""
                    onClick={() => setSelectedImage(item.id)}
                  />
                ))} */}
              </div>
              <button
                className="scroll-btn scroll-prev"
                onClick={scrollPrevHandler}
              >
                <IoIosArrowDropleftCircle size={25} />
              </button>
              <button
                className="scroll-btn scroll-next"
                onClick={scrollNextHandler}
              >
                <IoIosArrowDroprightCircle size={25} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
