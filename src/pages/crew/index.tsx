import backGroundCrewMobile from "assets/crew/background-crew-mobile.jpg";
import backGroundCrewDesktop from "assets/crew/background-crew-desktop.jpg";
import { useEffect, useState } from "react";
import { useDataQuery } from "src/services/fetchApi";
import { Dots } from "./components/Dots";

export function Crew() {
  const [crewSelect, setCrewSelect] = useState<number>(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { data } = useDataQuery();
  const crews = data?.crew;

  const handleDotClick = (index: number) => {
    setCrewSelect(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage =
    screenSize > 768 ? backGroundCrewDesktop : backGroundCrewMobile;

  return (
    <div>
      <div className="absolute top-0 z-30">
        <img src={backgroundImage} alt="" className="h-screen w-screen" />
      </div>

      <div className="relative z-40 h-screen lg:mx-20 xl:mx-40">
        <div className="fixed w-full pt-28 flex items-center justify-center gap-2 lg:justify-start lg:pt-40">
          <span className="text-gray-500 text-sm lg:text-lg">02</span>
          <p className="text-white text-xs lg:text-lg">PICK YOUR DESTINATION</p>
        </div>

        {crews?.map(
          (crew, crewIndex) =>
            crewSelect === crewIndex && (
              <div
                key={crew.name}
                className="h-full flex flex-col justify-end items-center lg:flex-row lg:items-end"
              >
                <div className="flex flex-col text-center mx-10 lg:mx-0 lg:text-start lg:mb-72 lg:mr-10 xl:mr-40 2xl:mr-96">
                  <span className="mb-3 text-strongGray text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                    {crew.role}
                  </span>
                  <span className="text-white text-2xl mb-4 sm:text-3xl lg:text-4xl xl:text-5xl">
                    {crew.name}
                  </span>
                  <p className="text-lightBlueText text-sm sm:text-base lg:text-lg xl:text-xl">
                    {crew.bio}
                  </p>
                </div>

                <div>
                  <img
                    src={crew.images.png}
                    alt={crew.name}
                    className="max-w-[250px] mt-5 sm:max-w-[350px] lg:max-w-[500px] animation-crew"
                  />
                </div>

                <Dots
                  crews={crews}
                  crewSelect={crewSelect}
                  handleDotClick={handleDotClick}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
