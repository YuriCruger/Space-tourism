import axios from "axios";
import { useQuery } from "react-query";
import { dataType } from "src/types/dataType";

export const fetchData = async () => {
  const response = await axios.get(
    "https://api.npoint.io/9602765981ebb1bfb20a"
  );
  return response.data;
};

export const useDataQuery = () => {
  return useQuery<dataType>("repo", fetchData);
};
