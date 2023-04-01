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
      Questions: ["sadasd", "sadad", "asdad", "asdadadad"],
    },
    {
      Questions: ["321", "123", "34", "as546"],
    },
  ];
  const dispatch = useDispatch();

  return (
    <div className="QuizBoxMain">
      <div className="Quezes">
        <CarouselProvider
          naturalSlideHeight={35}
          naturalSlideWidth={100}
          totalSlides={3}
        >
          <Slider>
            {Answers.map((item) => {
              return (
                <Slide>
                  {item.Questions.map((todo) => {
                    return (
                      <div className="Answer">
                        <input
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
                        {todo}
                      </div>
                    );
                  })}
                </Slide>
              );
            })}
          </Slider>
          <ButtonBack>
            <button
              className="Prev"
              onClick={() => {
                dispatch({ type: "MINUS_QUESTION_NUMBER", payload: 1 });
              }}
            >
              Prev
            </button>
          </ButtonBack>
          <ButtonNext>
            <button
              className="Next"
              onClick={() => {
                dispatch({ type: "ADD_QUESTION_NUMBER", payload: 1 });
              }}
            >
              Next
            </button>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
}
