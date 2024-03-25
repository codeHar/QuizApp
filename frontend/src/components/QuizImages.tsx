import { useEffect, useState } from "react";
import brain from "../assets/brain.png";
import choose from "../assets/choose.png";
import quiz from "../assets/quiz.png";
import trophy from "../assets/trophy.png";

const defaultQuizImages = [brain, choose, quiz, trophy];

const QuizImages = () => {
  const [quizImages, setQuizImages] = useState(defaultQuizImages);

  useEffect(() => {
    randomizeArray(defaultQuizImages);
  }, []);

  const randomizeArray = (originalArray: string[]) => {
    const newArray = [...originalArray]; // Create a copy of the original array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements randomly
    }
    setQuizImages(newArray); // Set the state with the randomized array
  };

  return (
    <div className="quiz-image-container w-72 h-64 p-8  ">
      <div className="quiz-image-container2 relative w-full h-full">
        {quizImages &&
          quizImages.map((quiz, i) => (
            <figure
              key={"quiz" + i}
              className={`absolute ${
                i == 0
                  ? "left-0 top-0 -translate-x-1/2 -translate-y-1/2"
                  : i == 1
                  ? "right-0 top-0 translate-x-1/2 -translate-y-1/2"
                  : i == 2
                  ? "left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
                  : "right-0 bottom-0 translate-x-1/2 translate-y-1/2"
              } `}
            >
              <img src={quiz} width="110" height="110" />
            </figure>
          ))}
      </div>
    </div>
  );
};

export default QuizImages;
