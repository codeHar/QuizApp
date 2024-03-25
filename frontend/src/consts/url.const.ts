const baseUrl = "http://localhost:3000/api";

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
    GET: (userId: string) => `${baseUrl}/my-stats/${userId}`,
  },
};
