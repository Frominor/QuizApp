const initialState = {
  Answers: ["", "", "", "", "", "", "", "", "", ""],
  Questions: [
    "Когда началась первая мировая война?",
    "В каком году отменили крепостное право?",
    "Кто убил Гитлера?",
    "В каком году распался СССР?",
    "Когда началась вторая мировая война?",
    "Год крещения Руси?",
    "В каком году основали Санк-Петербург?",
    "Кто был последним президентом СССР?",
    "Страны,граничащие с Германией?",
    "45*55=?",
  ],
  QuestionNumber: 0,
};
const ADD_ANSWER = "ADD_ANSWER";
const ADD_QUESTION_NUMBER = "ADD_QUESTION_NUMBER";
const MINUS_QUESTION_NUMBER = "MINUS_QUESTION_NUMBER";

export const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        Answers: state.Answers.map((item) => {
          if (action.payload.num == state.Answers.indexOf(item)) {
            return (item = action.payload.answer);
          } else {
            return item;
          }
        }),
      };
    case ADD_QUESTION_NUMBER:
      return {
        ...state,
        QuestionNumber:
          state.QuestionNumber < state.Questions.length
            ? state.QuestionNumber + action.payload
            : state.QuestionNumber,
      };
    case MINUS_QUESTION_NUMBER:
      return {
        ...state,
        QuestionNumber:
          state.QuestionNumber >= 1
            ? state.QuestionNumber - action.payload
            : state.QuestionNumber,
      };
    default:
      return { ...state };
  }
};
