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
            {State.QuestionNumber < 9
              ? State.QuestionNumber + 1 + " Вопрос " + "из" + " " + 10
              : "Конец!"}
          </p>
        </div>
      </div>

      <div className="Question">
        {State.QuestionNumber < 9 ? (
          <p>Q. {State?.Questions[State.QuestionNumber]}</p>
        ) : (
          <p>Итог</p>
        )}
      </div>
    </div>
  );
}
