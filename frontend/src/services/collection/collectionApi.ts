import { useQuery } from "@tanstack/react-query";
import {
  getMyCollections,
  getMyCollectionsById,
  getStats,
} from "./collectionApiSlice";
import { QuestionAnswer } from "../../reducers";

export const useGetMyCollections = () => {
  return useQuery({
    queryKey: ["myCollections"],
    queryFn: () => getMyCollections(),
  });
};

export const useGetMyCollectionsById = (collectionId: string) => {
  return useQuery({
    queryKey: ["myCollectionsById", collectionId],
    queryFn: () => getMyCollectionsById(collectionId),
  });
};

export const useGetCollectionStats = (
  collectionId: string,
  questionAnswers: QuestionAnswer[]
) => {
  return useQuery({
    queryKey: ["collectionStats", collectionId],
    queryFn: () => getStats(collectionId, questionAnswers),
  });
};
