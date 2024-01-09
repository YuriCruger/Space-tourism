import { dataType } from "src/types/dataType";

interface DotsProps {
  crews: dataType["crew"];
  crewSelect: number;
  handleDotClick: (dotIndex: number) => void;
}

export function Dots({ crews, crewSelect, handleDotClick }: DotsProps) {
  return (
    <div className="flex gap-4 absolute bottom-10 transform translate-x-1/2 right-2/4">
      {crews.map((_, dotIndex: number) => (
        <span
          key={dotIndex}
          className={`h-4 w-4 rounded-full ${
            crewSelect === dotIndex ? "bg-white" : "bg-dots"
          }`}
          onClick={() => handleDotClick(dotIndex)}
        ></span>
      ))}
    </div>
  );
}
