import backGroundHomeDesktop from "assets/home/background-home-desktop.jpg";
import backGroundHomeMobile from "assets/home/background-home-mobile.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = isLargeScreen
    ? backGroundHomeDesktop
    : backGroundHomeMobile;

  return (
    <div>
      <div className="absolute top-0 z-30">
        <img src={backgroundImage} alt="space" className="h-screen w-screen" />
      </div>

      <div className="relative z-40 text-center w-5/6 flex flex-col mx-auto mt-24 lg:flex-row lg:text-start lg:justify-between lg:items-center 2xl:px-36 xl:mt-40">
        <div className="lg:w-3/6">
          <p className="text-lightBlueText text-sm lg:text-base">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-white text-8xl max-sm:text-7xl lg:text-9xl mt-3 mb-8">
            SPACE
          </h1>
          <p className="text-lightBlueText text-base mx-10 lg:mx-0 lg:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div>
          <Link to={"/destination"}>
            <button className="bg-white rounded-full w-40 h-40 mx-auto mt-20 tracking-widest transition duration-500 hover:ring-[40px] hover:ring-gray-500 hover:ring-opacity-70 lg:w-72 lg:h-72">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
