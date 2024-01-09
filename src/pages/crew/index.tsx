import backGroundCrew from "assets/crew/background-crew-mobile.jpg";
import { useState } from "react";
import { useDataQuery } from "src/services/fetchApi";
import { Dots } from "./components/Dots";

export function Crew() {
  const [crewSelect, setCrewSelect] = useState<number>(0);
  const { data } = useDataQuery();
  const crews = data?.crew;

  const handleDotClick = (index: number) => {
    setCrewSelect(index);
  };

  return (
    <div>
      <div className="absolute top-0 z-30">
        <img src={backGroundCrew} alt="" className="h-screen w-screen" />
      </div>

      <div className="relative z-40">
        <div className="flex items-center justify-center gap-2 mb-16 lg:justify-start lg:pl-40">
          <span className="text-gray-500 text-sm lg:text-lg">02</span>
          <p className="text-white text-xs lg:text-lg">PICK YOUR DESTINATION</p>
        </div>

        {crews?.map(
          (crew, crewIndex) =>
            crewSelect === crewIndex && (
              <div key={crew.name} className="flex flex-col items-center">
                <div className="flex flex-col text-center mx-5 mb-auto">
                  <span className="mb-3 text-strongGray text-xl">
                    {crew.role}
                  </span>
                  <span className="text-white text-2xl mb-4">{crew.name}</span>
                  <p className="text-lightBlueText text-sm">{crew.bio}</p>
                </div>

                <div>
                  <img
                    src={crew.images.png}
                    alt={crew.name}
                    className="max-w-[250px]"
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
