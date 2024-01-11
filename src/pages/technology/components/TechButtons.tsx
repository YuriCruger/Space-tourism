import { dataType } from "src/types/dataType";

interface ButtonsProps {
  technologies: dataType["technology"];
  handleButtonClick: (dotIndex: number) => void;
  techSelect: number;
}

export function TechButtons({
  technologies,
  handleButtonClick,
  techSelect,
}: ButtonsProps) {
  return (
    <div className="flex gap-4">
      {technologies.map((_, techIndex) => (
        <button
          key={techIndex}
          onClick={() => handleButtonClick(techIndex)}
          className={`bg-transparent rounded-full w-12 h-12 border-gray-500 border-[1px] transition duration-300 easy-in-out hover:border-white ${
            techSelect === techIndex ? "bg-white text-gray-800" : "text-white"
          }`}
        >
          {techIndex + 1}
        </button>
      ))}
    </div>
  );
}
