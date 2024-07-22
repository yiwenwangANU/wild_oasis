import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function useCabins() {
  const { isPending, data: cabins } = useQuery({
    queryKey: ["getCabins"],
    queryFn: getCabins,
  });

  return { isPending, cabins };
}

export default useCabins;
