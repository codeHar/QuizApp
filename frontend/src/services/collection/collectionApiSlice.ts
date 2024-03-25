import axios from "axios";
import { URLS } from "../../consts";
import { QuestionAnswer } from "../../reducers";

export interface IMyCollections {
  msg: string;
  collections: Collection;
}

export interface IMyCollection {
  msg: string;
  collections: Collection;
}

export interface Collection {
  _id: string;
  title: string;
  description: string;
  createdBy: string;
  isPublic: boolean;
  questions: Question[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Question {
  text: string;
  type: string;
  difficulty?: string;
  answerOptions: string[];
  correctAnswer: number;
  points: number;
  _id: string;
}

export interface IStats {
  msg: string;
  stats: Stats;
}

export interface Stats {
  correctQuestionAnswers: CorrectQuestionAnswer[];
  incorrectQuestionAnswers: CorrectQuestionAnswer[];
  correctPoints: number;
  totalPoints: number;
}

export interface CorrectQuestionAnswer {
  question: string;
  answer: number;
}

export const getMyCollections = async (): Promise<IMyCollections> => {
  const res = await axios.get(URLS.COLLECTION.GET_MY_COLLECTIONS());
  return res.data;
};

export const getMyCollectionsById = async (
  collectionId: string
): Promise<IMyCollection> => {
  const res = await axios.get(URLS.COLLECTION.GET(collectionId));
  return res.data;
};

export const getStats = async (
  collectionId: string,
  questionAnswers: QuestionAnswer[]
): Promise<IStats> => {
  const res = await axios.post(URLS.COLLECTION.GET_STATS(collectionId), {
    questionAnswers,
  });
  return res.data;
};
