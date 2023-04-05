import React from "react";
import "./QuizBoxHeader.scss";
import info from "./info.png";
import { useSelector } from "react-redux";
export default function QuizBoxHeader() {
  const State = useSelector((state) => state.QuizReducer);
  const [All, SetAll] = React.useState(10);
  return (
    <div className="QuizBoxHeader">
      <div className="QuizBoxHeader_Info">
        <div className="QuestionCounter">
          <img src={info}></img>
          <p>
            Question {State.QuestionNumber + 1} of {All}
          </p>
        </div>
        <div className="Timer">
          <ul>
            <li className="Hours">1</li>
            <li className="Minutes">2</li>
            <li className="Seconds">3</li>
          </ul>
        </div>
      </div>

      <div className="Question">
        <p>Q. {State?.Questions[State?.QuestionNumber]}</p>
      </div>
      <p className="Please">Please,choose one of the following answers</p>
    </div>
  );
}
