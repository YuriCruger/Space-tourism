import axios from "axios";
import { useQuery } from "react-query";
import { dataType } from "src/types/dataType";

export const fetchData = async () => {
  const response = await axios.get(
    "https://api.npoint.io/b8288a3e7e9e7cc5aa28"
  );
  return response.data;
};

export const useDataQuery = () => {
  return useQuery<dataType>("repo", fetchData);
};
