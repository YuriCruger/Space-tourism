import { Destination } from "src/types/dataType";

interface DestinationProps {
  destination: Destination;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

export function DestinationOption({
  destination,
  isSelected,
  onSelect,
}: DestinationProps) {
  return (
    <button
      onClick={() => onSelect(destination.name)}
      className={`border-b-4 border-transparent w-20 hover:border-grayHover transition duration-200 uppercase ${
        isSelected && "border-white hover:border-white"
      }`}
    >
      {destination.name}
    </button>
  );
}
