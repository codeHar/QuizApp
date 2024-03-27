import { useGetCollectionStats } from "../services";
import { QuestionAnswer } from "../reducers";
import gameCompleted from "../assets/successful.png";
import { getRating } from "../utils";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type GameCompletedProps = {
  collectionId: string;
  questionAnswers: QuestionAnswer[];
};

const GameCompleted = ({
  collectionId,
  questionAnswers,
}: GameCompletedProps) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetCollectionStats(
    collectionId,
    questionAnswers
  );

  if (isLoading) {
    return <p>Checking answers...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const stats = data?.stats;

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-5xl mb-8">Game Completed</h3>
      <img src={gameCompleted} width={100} height={100} />

      <p className="mt-8 ">
        Points:{" "}
        <span className="font-bold">
          {stats?.correctPoints}/{stats?.totalPoints}
        </span>
      </p>

      <p className="mt-3">
        Your rating is {getRating(stats?.correctPoints, stats?.totalPoints)}
      </p>

      <div className="flex gap-5 mt-10">
        <Button onClick={() => navigate("/my-collections")}>
          Back to Collections
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => navigate(`/stats-detail/${stats?.statId}`)}
        >
          View Detail
        </Button>
      </div>
    </div>
  );
};

export default GameCompleted;
