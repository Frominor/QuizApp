import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./QuizBoxMain.scss";
import { useDispatch, useSelector } from "react-redux";
export default function QuizBoxMain() {
  const dispatch = useDispatch();
  const State = useSelector((state) => state.QuizReducer);

  function GoNextQuestion() {
    dispatch({ type: "ADD_QUESTION_NUMBER", payload: 1 });
  }

  function ReturnToPrevQuestion() {
    dispatch({ type: "MINUS_QUESTION_NUMBER", payload: 1 });
  }

  function AddAnswer(e) {
    dispatch({
      type: "ADD_ANSWER",
      payload: {
        num: State.QuestionNumber,
        answer: e.target.name,
      },
    });
  }

  return (
    <div className="QuizBoxMain">
      <div className="Quezes">
        {State.QuestionNumber == 9 ? (
          <div className="Answers">
            <div style={{ width: 200 + "px", marginRight: 40 + "px" }}>
              <h3>Ваши ответы</h3>
              {State.Answers.map((item) => {
                return (
                  <div
                    className={
                      State.RightAnswers.includes(item)
                        ? "Correct"
                        : "NotCorrect"
                    }
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div>
              <h3>Правильные ответы</h3>
              {State.RightAnswers.map((item) => {
                return (
                  <div
                    className="RightAnswers Correct"
                    style={{ marginLeft: 40 + "px" }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Slider
            asNavFor={null}
            prevArrow={
              <button type="button" className={"slick-prev"}>
                Previous
              </button>
            }
            nextArrow={
              <button
                type="button"
                className="slick-next"
                disabled={
                  State.QuestionNumber + 1 <= State.Answers.length
                    ? false
                    : true
                }
              >
                Next
              </button>
            }
            draggable={false}
            dots={true}
            speed={1000}
            infinite={false}
            slidesToScroll={1}
            slidesToShow={1}
            rows={4}
            arrows={true}
            beforeChange={(current, next) => {
              if (current < next) {
                GoNextQuestion();
              } else {
                ReturnToPrevQuestion();
              }
            }}
          >
            {State.WariantsAnswers.map((item) => {
              return item.Questions.map((todo) => {
                return (
                  <div className="Answer">
                    <input
                      id={todo}
                      type={"checkbox"}
                      name={todo}
                      checked={State.Answers.includes(todo)}
                      onChange={(e) => {
                        const Answers = State.Answers;
                        Answers[State.QuestionNumber] = e.target.name;
                        AddAnswer(e);
                      }}
                    ></input>
                    <label
                      disabled={true}
                      for={todo}
                      className={
                        State.Answers.includes(todo) ? "Checked" : "NotChecked"
                      }
                    >
                      <p>{todo}</p>
                    </label>
                  </div>
                );
              });
            })}
          </Slider>
        )}
      </div>
    </div>
  );
}
