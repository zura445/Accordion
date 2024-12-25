import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";

function App() {
  const [active, setActive] = useState(null);
  const dialog = [
    {
      question: "How many team members can I invite?",
      answer: "Lorem ipsum dolor sit",
    },
    {
      question: "What is the maximum file upload size?",
      answer: "amet consectetur adipisicing elit",
    },
    {
      question: "How do I reset my password?",
      answer: "Error eos optio provident earum voluptatibus",
    },
    {
      question: "Can i cancel my subscription?",
      answer:
        "deserunt nam a doloribus modi aperiam adipisci odio dolor culpa velit ducimus",
    },
    {
      question: "Do you provide additional Support?",
      answer: "sapiente voluptatem quis",
    },
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
          {dialog.map((dialog, index) => (
            <Question
              key={index}
              active={active}
              setActive={setActive}
              dialogQ={dialog.question}
              dialogA={dialog.answer}
              current={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
