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
    "Итог",
  ],
  RightAnswers: [
    "1914",
    "1861",
    "Гитлер",
    "1991",
    "1700",
    "Оттава",
    "Байкал",
    "Канада и США",
    "1024",
    "2175",
  ],
  QuestionNumber: 0,
  WariantsAnswers: [
    {
      Questions: ["1941", "1940", "1939", "1914"],
    },
    {
      Questions: ["1860", "1825", "1861", "1881"],
    },
    {
      Questions: ["Пистолет", "Пуля", "Гитлер", "Его убийца"],
    },
    {
      Questions: ["1991", "1990", "1988", "1999"],
    },
    {
      Questions: ["1720", "1721", "1700", "1705"],
    },
    {
      Questions: ["Оттава", "Ванкувер", "Хельсинки", "Веллингтон"],
    },
    {
      Questions: ["Байкал", "Ильмень", "Каспийское", "Святое"],
    },
    {
      Questions: [
        "Канада и США",
        "Россия и Китай",
        "США и Мексика",
        "Турция и Сирия",
      ],
    },
    {
      Questions: ["1042", "1024", "1128", "1002"],
    },
    {
      Questions: ["2175", "2275", "2375", "2475"],
    },
  ],
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
          state.QuestionNumber < state.Questions.length + 1
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
