const initialState = {
  Answers: [],
  Questions: [
    "Когда началась первая мировая война?",
    "В каком году отменили крепостное право?",
    "Кто убил Гитлера?",
    "В каком году распался СССР?",
    "Когда началась северная война?",
    "Столица Канады?",
    "Самое глубокое озеро в мире?",
    "Между какими двумя странами самая протяженная сухопутная граница?",
    "2^10=?",
    "45*55=?",
  ],
  QuestionNumber: 0,
  GoNext: false,
  GetResults: false,
};
const ADD_ANSWER = "ADD_ANSWER";
const ADD_QUESTION_NUMBER = "ADD_QUESTION_NUMBER";
const MINUS_QUESTION_NUMBER = "MINUS_QUESTION_NUMBER";
const GO_TO_NEXT_QUESTION = "GO_TO_NEXT_QUESTION";

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
    case GO_TO_NEXT_QUESTION:
      return { ...state, GoNext: action.payload };
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
        QuestionNumber: state.QuestionNumber
          ? state.QuestionNumber - action.payload
          : state.QuestionNumber,
      };
    default:
      return { ...state };
  }
};
