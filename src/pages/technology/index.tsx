import backGroundTech from "assets/technology/background-technology-tablet.jpg";
import { useState } from "react";
import { useDataQuery } from "src/services/fetchApi";
import { TechButtons } from "./components/TechButtons";

export default function Technology() {
  const [techSelect, setTechSelect] = useState<number>(0);
  const { data } = useDataQuery();
  const technologies = data?.technology;

  const handleButtonClick = (index: number) => {
    setTechSelect(index);
  };

  return (
    <div>
      <div className="absolute top-0 z-30">
        <img
          src={backGroundTech}
          alt="space and stars"
          className="h-screen w-screen"
        />
      </div>

      <div className="relative z-40 pt-28 mx-10 lg:mx-20 xl:mx-40">
        <div className="flex items-center justify-center gap-2 mb-16 lg:justify-start lg:pl-40">
          <span className="text-gray-500 text-sm lg:text-lg">03</span>
          <p className="text-white text-xs lg:text-lg">SPACE LAUNCH 101</p>
        </div>

        {technologies?.map(
          (tech, techIndex) =>
            techSelect === techIndex && (
              <div
                key={tech.name}
                className="flex flex-col items-center text-center gap-10"
              >
                <TechButtons
                  technologies={technologies}
                  handleButtonClick={handleButtonClick}
                  techSelect={techSelect}
                />

                <div>
                  <img
                    src={tech.images.portrait}
                    alt={tech.name}
                    className="max-w-[365px]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-strongGray uppercase text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    The terminology...
                  </span>
                  <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                    {tech.name}
                  </span>
                  <p className="text-lightBlueText text-sm sm:text-base lg:text-lg xl:text-xl">
                    {tech.description}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
