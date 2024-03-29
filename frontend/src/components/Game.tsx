import { useEffect, useState } from "react";
import { IMyCollection } from "../services";
import { TState } from "../reducers";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type GameProps = {
  data: IMyCollection | undefined;
  state: TState;
  handleSubmitData: (
    question: string,
    selectedAnswer: number,
    isLastQuestion: boolean
  ) => void;
};

const Game = ({ data, state, handleSubmitData }: GameProps) => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const questions = data?.collections.questions || [];
  const question = questions[state.questionNo];
  const { answerOptions } = question;

  const handleGameData = (answer?: number) => {
    console.log({ answer });
    if (answer == undefined && selectedAnswer == -1) {
      return;
    }
    const isLastQuestion = state.questionNo == questions.length - 1;
    handleSubmitData(
      question.text,
      answer != undefined ? answer : selectedAnswer,
      isLastQuestion
    );
  };

  useEffect(() => {
    setSelectedAnswer(-1);
  }, [state.questionNo]);

  return (
    <>
      <Button onClick={() => navigate("/my-collections")} className="mb-5">
        Back
      </Button>
      <div className="quiz-header relative border-4 border-gray-500 rounded-3xl px-5 py-10">
        <div className="title-badge rounded-full p-3 bg-white absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className=" font-bold text-2xl">MindMingle</h3>
        </div>

        <span className="absolute right-0 top-0 -translate-y-[calc(100%_+_12px)]">
          {state.questionNo + 1}/{questions.length}
        </span>

        <h1 className="text-center text-2xl md:text-4xl font-semibold !leading-8 md:!leading-[48px]">
          {data?.collections?.questions[state.questionNo]?.text}
        </h1>
      </div>

      <div className="quiz-options mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        {answerOptions &&
          answerOptions.map((answer: string, i: number) => (
            <div
              className={
                "quiz-option relative border-4 border-gray-500 rounded-3xl p-3 flex justify-center items-center cursor-pointer " +
                (i === selectedAnswer ? "border-green-500" : "")
              }
              key={"answer" + i}
              onDoubleClick={() => handleGameData(i)}
              onClick={() =>
                setSelectedAnswer((prevValue) => (prevValue !== i ? i : -1))
              }
            >
              <p className="text-center">{answer}</p>
            </div>
          ))}
      </div>

      <div className="flex justify-end mt-5">
        <Button type="primary" danger onClick={() => handleGameData()}>
          Submit Answer
        </Button>
      </div>
    </>
  );
};

export default Game;
