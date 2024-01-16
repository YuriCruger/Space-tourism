import backGroundDest from "assets/destination/background-destination-desktop.jpg";
import { useDataQuery } from "../../services/fetchApi";
import { useState } from "react";
import { DestinationOption } from "./components/DestinationOption";
import "animate.css";
import { IMAGE_DESTINATION_SRC } from "src/constants/SrcImages";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState("Moon");
  const { data } = useDataQuery();
  const destinations = data?.destinations;
  const selectDestination = (name: string) => setSelectedDestination(name);

  return (
    <div>
      <div className="absolute top-0 z-30">
        <img
          src={backGroundDest}
          alt="space and stars"
          className="h-screen w-screen"
        />
      </div>

      <div className="relative z-40 h-screen flex flex-col justify-center">
        <div className="flex items-center justify-center gap-2 mb-16 lg:justify-start lg:pl-40">
          <span className="text-gray-500 text-sm lg:text-lg">01</span>
          <p className="text-white text-xs lg:text-lg">PICK YOUR DESTINATION</p>
        </div>

        {destinations && (
          <div>
            {destinations.map(
              (destination) =>
                selectedDestination === destination.name && (
                  <div
                    key={destination.name}
                    className="lg:flex lg:items-center lg:justify-between lg:mx-10 gap-20"
                  >
                    <div className="lg:w-3/6">
                      <img
                        src={
                          IMAGE_DESTINATION_SRC[
                            destination.name.toLowerCase() as keyof typeof IMAGE_DESTINATION_SRC
                          ]
                        }
                        alt={destination.name}
                        className="w-40 animation mx-auto max-w-[500px] mb-10 lg:w-full"
                      />
                    </div>

                    <div className="flex flex-col gap-8 items-center text-center lg:text-start lg:w-3/6">
                      <div className="text-lightBlueText text-sm flex lg:mr-auto">
                        {destinations.map((dest) => (
                          <DestinationOption
                            key={dest.name}
                            destination={dest}
                            isSelected={dest.name === selectedDestination}
                            onSelect={selectDestination}
                          />
                        ))}
                      </div>

                      <div>
                        <h1 className="text-white text-6xl font-bellefair mb-8 lg:text-9xl">
                          {destination.name}
                        </h1>

                        <p className="text-lightBlueText text-sm mx-auto w-5/6 border-b-2 border-gray-500 pb-10 md:px-20 lg:text-lg lg:px-0 lg:mx-0">
                          {destination.description}
                        </p>
                      </div>

                      <div className="text-white flex flex-col gap-8 lg:flex-row lg:items-center  lg:mr-auto">
                        <div>
                          <p className="text-sm">AVG. DISTANCE</p>
                          <p className="font-bellefair text-3xl">
                            {destination.distance}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm">EST. TRAVEL TIME</p>
                          <p className="font-bellefair text-3xl">
                            {destination.travel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
