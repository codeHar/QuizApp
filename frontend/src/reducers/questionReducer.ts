export type QuestionAnswer = {
  question: string;
  answer: number;
};

type Action = {
  type: "add";
  value: QuestionAnswer;
  isLastQuestion: boolean;
};

export type TState = {
  questionNo: number;
  questionAnswers: QuestionAnswer[];
  isLastQuestion: boolean;
};

export const initialvalue: TState = {
  questionNo: 0,
  questionAnswers: [],
  isLastQuestion: false,
};

export function questionReducer(state: TState, action: Action) {
  const { type, value, isLastQuestion } = action;
  switch (type) {
    case "add":
      return {
        ...state,
        questionAnswers: [...state.questionAnswers, value],
        questionNo: isLastQuestion ? state.questionNo : state.questionNo + 1,
        isLastQuestion,
      };
    default:
      return { ...state };
  }
}
