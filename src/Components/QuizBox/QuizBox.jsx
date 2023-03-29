import React from "react";
import "./QuizBox.scss";
export default function QuizBox(props) {
  return <div className="QuizBox">{props.children}</div>;
}
