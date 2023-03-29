import "./App.scss";
import QuizBoxHeader from "./Components/QuizBox/Header/QuizBoxHeader";
import QuizBoxMain from "./Components/QuizBox/Main/QuizBoxMain";
import QuizBox from "./Components/QuizBox/QuizBox";

function App() {
  return (
    <div className="App">
      <QuizBox>
        <QuizBoxHeader></QuizBoxHeader>
        <QuizBoxMain></QuizBoxMain>
      </QuizBox>
    </div>
  );
}

export default App;
