const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://mind-mingle.onrender.com/api";

export const URLS = {
  COLLECTION: {
    CREATE: `${baseUrl}/collection/create`,
    GET_MY_COLLECTIONS: (userId: string = "65dab80488624adf28f6f8b6") =>
      `${baseUrl}/collection/${userId}`,
    GET: (collectionId: string) =>
      `${baseUrl}/collection/detail/${collectionId}`,
    GET_STATS: (collectionId: string) =>
      `${baseUrl}/collection/stats/${collectionId}`,
  },
  STATS: {
    GET: (userId: string) => `${baseUrl}/stats/${userId}`,
    GET_DETAIL: (statsId: string) => `${baseUrl}/stats/detail/${statsId}`,
  },
};
