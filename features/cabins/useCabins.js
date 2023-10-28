import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabin,
    error,
  } = useQuery({
    queryKey: ["cabins"], //from SupaBase DB
    queryFn: getCabins,
  });

  return { isLoading, error, cabin };
}
