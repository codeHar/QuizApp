import axios from "axios";
import { URLS } from "../../consts";

export interface IAllStats {
  msg: string;
  stats: Stat[];
}

export interface Stat {
  _id: string;
  user: string;
  correctQuestionAnswers: CorrectQuestionAnswer[];
  incorrectQuestionAnswers: CorrectQuestionAnswer[];
  correctPoints: number;
  totalPoints: number;
  createdAt: string;
  collectionName: string;
  __v: number;
}

export interface CorrectQuestionAnswer {
  question: string;
  answer: string;
  _id: string;
}

export async function getAllStats(): Promise<IAllStats> {
  //   const userId = localStorage.getItem("userId") as string;

  const res = await axios.get(URLS.STATS.GET("65dab80488624adf28f6f8b6"));
  return res.data;
}
