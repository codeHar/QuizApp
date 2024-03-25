import { useGetCollectionStats } from "../services";
import { QuestionAnswer } from "../reducers";

type GameCompletedProps = {
  collectionId: string;
  questionAnswers: QuestionAnswer[];
};

const GameCompleted = ({
  collectionId,
  questionAnswers,
}: GameCompletedProps) => {
  console.log({ collectionId, questionAnswers });
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

  console.log("game Completed data", data);

  return (
    <div>
      GameCompleted
      <h3>Correct Points: {data?.stats?.correctPoints}</h3>
      <h3>Correct Points: {data?.stats?.totalPoints}</h3>
    </div>
  );
};

export default GameCompleted;
