import axios from "axios";
import { URLS } from "../../consts";

export async function getAllStats() {
  const userId = localStorage.getItem("userId") as string;

  const res = await axios.get(URLS.STATS.GET(userId));
  return res.data;
}
