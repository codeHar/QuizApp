import { useQuery } from "@tanstack/react-query";
import { getAllStats, getStatsDetail } from "./statsApiSlice";

export function useGetAllStats() {
  return useQuery({
    queryKey: ["allStats"],
    queryFn: () => getAllStats(),
  });
}

export function useGetStatsDetail(statsId: string) {
  return useQuery({
    queryKey: ["allStats"],
    queryFn: () => getStatsDetail(statsId),
  });
}
