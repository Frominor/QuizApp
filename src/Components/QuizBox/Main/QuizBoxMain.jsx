import React from "react";
import "./QuizBoxMain.scss";
import rightarrow from "./chevron.png";
export default function QuizBoxMain() {
  return (
    <div className="QuizBoxMain">
      <div className="Quezes"></div>
      <div className="LinkToNext">
        <button>
          Next <img src={rightarrow}></img>
        </button>
      </div>
    </div>
  );
}
