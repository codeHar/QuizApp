import { useNavigate, useParams } from "react-router-dom";
import quizBg from "../assets/quizBg2.jpg";
import { useGetMyCollectionsById } from "../services";
import { useReducer } from "react";
import { initialvalue, questionReducer } from "../reducers";
import Game from "../components/Game";
import GameCompleted from "../components/GameCompleted";
import { Button } from "antd";

const PlayGame = () => {
  const [state, dispatch] = useReducer(questionReducer, initialvalue);
  const { collectionId } = useParams();
  const { data, isLoading, error } = useGetMyCollectionsById(
    collectionId as string
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return;
  }

  console.log("game data", data);
  console.log("stateData", state);

  const handleSubmitData = (
    question: string,
    selectedAnswer: number,
    isLastQuestion: boolean
  ) => {
    dispatch({
      type: "add",
      value: { question: question, answer: selectedAnswer },
      isLastQuestion,
    });
  };

  return (
    <div className="play-game">
      <img src={quizBg} className="play-bg" />
      <div className="container py-20">
        {state.isLastQuestion ? (
          <GameCompleted
            collectionId={collectionId!}
            questionAnswers={state.questionAnswers}
          />
        ) : (
          <Game data={data} state={state} handleSubmitData={handleSubmitData} />
        )}
      </div>
    </div>
  );
};

export default PlayGame;
