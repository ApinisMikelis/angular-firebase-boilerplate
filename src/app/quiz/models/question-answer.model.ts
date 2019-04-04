import { Question } from './question.model';

export interface QuestionAnswer extends Question {
     user_answer: string;
}
