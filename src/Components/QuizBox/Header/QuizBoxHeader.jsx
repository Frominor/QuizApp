import React from "react";
import "./QuizBoxHeader.scss";
import info from "./info.png";
import { useSelector } from "react-redux";
export default function QuizBoxHeader() {
  const State = useSelector((state) => state.QuizReducer);
  return (
    <div className="QuizBoxHeader">
      <div className="QuizBoxHeader_Info">
        <div className="QuestionCounter">
          <img src={info}></img>
          <p>
            {State.QuestionNumber < 10
              ? State.QuestionNumber +
                1 +
                " Вопрос " +
                "из" +
                " " +
                (State.Questions.length - 1)
              : "Конец!"}
          </p>
        </div>
      </div>

      <div className="Question">
        {console.log(State.QuestionNumber)}
        {State.QuestionNumber < 10 ? (
          <p>Q. {State?.Questions[State.QuestionNumber]}</p>
        ) : (
          <p>Итог</p>
        )}
      </div>
      <p className="Please">Please,choose one of the following answers</p>
    </div>
  );
}
