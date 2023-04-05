import React from "react";
import "./QuizBoxMain.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useDispatch, useSelector } from "react-redux";
export default function QuizBoxMain() {
  const State = useSelector((state) => state.QuizReducer);
  let Answers = [
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
  ];
  const dispatch = useDispatch();

  return (
    <div className="QuizBoxMain">
      <div className="Quezes">
        <Slider
          dots={true}
          speed={500}
          infinite={false}
          slidesToScroll={1}
          slidesToShow={1}
          rows={4}
          beforeChange={(current, next) => {
            console.log(current, next);

            if (current < next) {
              dispatch({ type: "ADD_QUESTION_NUMBER", payload: 1 });
            } else {
              dispatch({ type: "MINUS_QUESTION_NUMBER", payload: 1 });
            }
          }}
        >
          {Answers.map((item) => {
            console.log(item);
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
                      dispatch({
                        type: "ADD_ANSWER",
                        payload: {
                          num: State.QuestionNumber,
                          answer: e.target.name,
                        },
                      });
                      dispatch({
                        type: "GO_TO_NEXT_QUESTION",
                        payload: true,
                      });
                    }}
                  ></input>
                  <label
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
      </div>
    </div>
  );
}
