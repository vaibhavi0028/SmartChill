import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../assets/car1.jpg";
import Image2 from "../assets/car2.jpg";
import Image3 from "../assets/car3.jpg";
import Image4 from "../assets/car4.jpg";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";

const Carousel = () => {
  const [items, setItems] = useState([
    {
      backgroundImage: Image1,
      video: vid1,
      name: "SmartChill AI Diagnostics",
      description:
        "Smart AI-driven diagnostics to monitor and optimize HVAC systems, ensuring energy-efficient cooling and real-time issue detection.",
    },
    {
      backgroundImage: Image2,
      video: vid2,
      name: "Predictive Maintenance",
      description:
        "Use AI to predict maintenance needs, reducing downtime and improving the longevity of HVAC systems by preventing issues before they arise.",
    },
    {
      backgroundImage: Image3,
      video: vid3,
      name: "CodeCortex",
      description:
        "CodeCortex, a 36-hour hackathon where participants develop technology projects from concept to prototype.",
    },
    {
      backgroundImage: Image4,
      video: vid4,
      name: "Grundfos",
      description:
        "Grundfos is a global leader in advanced pump solution and trendsetter in water technology - we have sustainability as a part of our DNA.",
    },
  ]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  return (
    <div className="relative w-full h-[550px] mr-80 overflow-x-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-full">
        <div className="relative w-full h-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] rounded-[20px] shadow-lg bg-cover bg-center transition-all duration-500 ${
                index === 0
                  ? "left-0 top-0 w-full h-full rounded-none"
                  : index === 1
                  ? "left-[60%]"
                  : index === 2
                  ? "left-[calc(60%+220px)]"
                  : index === 3
                  ? "left-[calc(60%+440px)]"
                  : "left-[calc(60%+660px)] opacity-0"
              }`}
              style={{
                backgroundImage: index === 0 ? "none" : `url(${item.backgroundImage})`,
              }}
            >
              {index === 0 ? (
                <>
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <div className="w-[400px] pl-[20px] absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
                    <h2 className="text-4xl font-bold uppercase">{item.name}</h2>
                    <p className="mt-2 mb-5">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-[20px]"></div>
                </>
              ) : (
                <>
                  <div className="w-[200px] h-[300px] rounded-[20px]">
                    <img
                      src={item.backgroundImage}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 w-full text-center">
        <button
          className="w-10 h-[35px] rounded-lg border border-white mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
        </button>
        <button
          className="w-10 h-[35px] rounded-lg border border-white mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
