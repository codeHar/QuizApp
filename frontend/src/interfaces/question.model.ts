export interface IQuestion {
  text: string;
  type: string;
  difficulty: string;
  answerOptions: string[];
  correctAnswer: number;
  points: number;
  _id: string;
}
