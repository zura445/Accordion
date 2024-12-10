import { useState } from "react";
import "./App.css";
import Question from "./components/question/Question";

function App() {
  const [active, setActive] = useState(0);
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
          <Question
            active={active}
            setActive={setActive}
            otherQuestion={"How many team members can I invite?"}
            number={1}
          />
          <Question
            active={active}
            setActive={setActive}
            otherQuestion={"What is the maximum file upload size?"}
            number={2}
          />
          <Question
            active={active}
            setActive={setActive}
            otherQuestion={"How do I reset my password?"}
            number={3}
          />
          <Question
            active={active}
            setActive={setActive}
            otherQuestion={"Can i cancel my subscription?"}
            number={4}
          />
          <Question
            active={active}
            setActive={setActive}
            otherQuestion={"Do you provide additional Support?"}
            number={5}
          />
        </div>
      </div>
    </>
  );
}

export default App;
