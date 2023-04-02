import React from "react";
import "./QuizBoxMain.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
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
      Questions: ["123", "321", "432", "54"],
    },
    {
      Questions: ["123", "321", "432", "54"],
    },
  ];
  const dispatch = useDispatch();

  return (
    <div className="QuizBoxMain">
      <div className="Quezes">
        <CarouselProvider
          naturalSlideHeight={35}
          naturalSlideWidth={100}
          totalSlides={6}
        >
          <Slider>
            {Answers.map((item) => {
              return (
                <Slide>
                  {item.Questions.map((todo) => {
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
                          }}
                        ></input>
                        <label
                          for={todo}
                          className={
                            State.Answers.includes(todo)
                              ? "Checked"
                              : "NotChecked"
                          }
                        >
                          <p>{todo}</p>
                        </label>
                      </div>
                    );
                  })}
                </Slide>
              );
            })}
          </Slider>
          <ButtonBack
            className="PrevQuestionButton"
            onClick={() => {
              dispatch({ type: "MINUS_QUESTION_NUMBER", payload: 1 });
            }}
          >
            Prev
          </ButtonBack>
          <ButtonNext
            className="NextQuestionButton"
            onClick={() => {
              dispatch({ type: "ADD_QUESTION_NUMBER", payload: 1 });
            }}
          >
            Next
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
}
