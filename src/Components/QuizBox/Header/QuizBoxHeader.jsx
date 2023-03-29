import React from "react";
import "./QuizBoxHeader.scss";
import info from "./info.png";
export default function QuizBoxHeader() {
  const [Zero, SetZero] = React.useState(0);
  const [All, SetAll] = React.useState(10);
  return (
    <div className="QuizBoxHeader">
      <div className="QuizBoxHeader_Info">
        <div className="QuestionCounter">
          <img src={info}></img>
          <p>
            Question {Zero} of {All}
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
        <p>Q. {"Question"}</p>
      </div>
      <p className="Please">Please,choose one of the following answers:</p>
    </div>
  );
}
