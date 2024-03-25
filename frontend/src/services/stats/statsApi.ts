import { useQuery } from "@tanstack/react-query";
import { getAllStats } from "./statsApiSlice";

export function useGetAllStats() {
  return useQuery({
    queryKey: ["allStats"],
    queryFn: () => getAllStats(),
  });
}
