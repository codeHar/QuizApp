import axios from "axios";
import { URLS } from "../../consts";

export interface IAllStats {
  msg: string;
  stats: AllStat[];
}

export interface IStatsDetail {
  msg: string;
  stat: StatsDetail;
}

export interface AllStat {
  id: string;
  correctPoints: number;
  totalPoints: number;
  collectionName: string;
}

export interface StatsDetail {
  id: string;
  correctPoints: number;
  totalPoints: number;
  collectionName: string;
  correctQuestionAnswers: QuestionAnswer[];
  incorrectQuestionAnswers: QuestionAnswer[];
  questions: Question[];
}

export interface QuestionAnswer {
  question: string;
  answer?: string;
  _id: string;
}

export interface Question {
  title: string;
  answer: string;
}

export async function getAllStats(): Promise<IAllStats> {
  //   const userId = localStorage.getItem("userId") as string;

  const res = await axios.get(URLS.STATS.GET("65dab80488624adf28f6f8b6"));
  return res.data;
}

export async function getStatsDetail(statsId: string): Promise<IStatsDetail> {
  const res = await axios.get(URLS.STATS.GET_DETAIL(statsId));
  return res.data;
}
