import { useParams } from "react-router-dom";
import { useGetStatsDetail } from "../services/stats";
import { getRating } from "../utils";

const StatsDetail = () => {
  const { statsId } = useParams();
  const { data, isLoading, error } = useGetStatsDetail(statsId as string);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error happen</p>;
  }

  const stat = data?.stat;

  return (
    <div className="container my-collections relative h-[calc(100%_-128px)] overflow-auto">
      <div className="my-4 p-3 rounded-md bg-white">
        <h3 className="text-center font-bold text-2xl mb-10">Stats Detail</h3>

        <div>
          <h5 className="font-semibold mb-2">
            Collection Title:{" "}
            <span className="font-medium ml-2">{stat?.collectionName}</span>
          </h5>
          <h5 className="mb-2 font-semibold">
            Points Achieved:
            <span className="font-medium ml-2">
              {stat?.correctPoints}/{stat?.totalPoints}
            </span>
          </h5>
          <h5 className="font-semibold mb-10">
            Rating:
            <span className="capitalize px-2 py-1 bg-secondary text-white rounded-md mx-2 font-medium">
              {getRating(stat?.correctPoints, stat?.totalPoints)}
            </span>
          </h5>

          <div>
            <h5 className="font-semibold mb-3">Correct Answers</h5>
            {stat?.correctQuestionAnswers.map((qa, i: number) => (
              <div key={i} className="mb-3">
                <h5 className="mb-1">
                  <span className="mr-2">{i + 1})</span>
                  {qa.question}
                </h5>
                <p className="ml-6 text-green-500">{qa.answer}</p>
              </div>
            ))}
          </div>

          {stat && stat?.incorrectQuestionAnswers?.length > 0 && (
            <div>
              <h5 className="font-semibold mb-3">Incorrect Answers</h5>
              {stat?.incorrectQuestionAnswers.map((qa, i: number) => (
                <div key={i} className="mb-3">
                  <h5 className="mb-1">
                    <span className="mr-2">{i + 1})</span>
                    {qa.question}
                  </h5>
                  <p className="ml-6 text-red-500">{qa.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsDetail;
