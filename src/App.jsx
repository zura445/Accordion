import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";

function App() {
  const [active, setActive] = useState(null);
  const questions = [
    "How many team members can I invite?",
    "What is the maximum file upload size?",
    "How do I reset my password?",
    "Can i cancel my subscription?",
    "Do you provide additional Support?",
  ];

  return (
    <>
      <div className="">
        <img
          className="max-w-[700px] h-[500px] m-auto"
          src="/work.jpg"
          alt="work-image"
        />
        <div className="max-w-[700px]">
          <h1>FAQ</h1>
          {questions.map((question, index) => (
            <Question
              key={index}
              active={active}
              setActive={setActive}
              question={question}
              current={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
