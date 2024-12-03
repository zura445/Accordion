import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(0);

  console.log(active);

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
          <h2
            className="text-2xl mt-5 cursor-pointer"
            onClick={() => {
              if (active === 1) {
                setActive();
              } else {
                setActive(1);
              }
            }}
          >
            How many team members can I invite?
          </h2>
          {active === 1 ? (
            <div className="flex items-center">
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nostrum laboriosam sequi facilis iste similique incidunt laborum
                amet natus enim. Nisi velit deserunt doloribus ratione!
                Distinctio rerum id nesciunt illo!
              </p>
              <img className="w-6 h-6" src="/arrow.jpg" alt="arrow" />
            </div>
          ) : null}

          <h2
            className="text-2xl mt-5 cursor-pointer"
            onClick={() => {
              setActive(2);
            }}
          >
            What is the maximum file upload size?
          </h2>
          {active === 2 ? (
            <div className="flex items-center">
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nostrum laboriosam sequi facilis iste similique incidunt laborum
                amet natus enim. Nisi velit deserunt doloribus ratione!
                Distinctio rerum id nesciunt illo!
              </p>
              <img className="w-6 h-6" src="/arrow.jpg" alt="arrow" />
            </div>
          ) : null}

          <h2
            className="text-2xl mt-5 cursor-pointer"
            onClick={() => {
              setActive(3);
            }}
          >
            How do I reset my password?
          </h2>
          {active === 3 ? (
            <div className="flex items-center">
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nostrum laboriosam sequi facilis iste similique incidunt laborum
                amet natus enim. Nisi velit deserunt doloribus ratione!
                Distinctio rerum id nesciunt illo!
              </p>
              <img className="w-6 h-6" src="/arrow.jpg" alt="arrow" />
            </div>
          ) : null}

          <h2
            className="text-2xl mt-5 cursor-pointer"
            onClick={() => {
              setActive(4);
            }}
          >
            Can i cancel my subscription?
          </h2>
          {active === 4 ? (
            <div className="flex items-center">
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nostrum laboriosam sequi facilis iste similique incidunt laborum
                amet natus enim. Nisi velit deserunt doloribus ratione!
                Distinctio rerum id nesciunt illo!
              </p>
              <img className="w-6 h-6" src="/arrow.jpg" alt="arrow" />
            </div>
          ) : null}

          <h2
            className="text-2xl mt-5 cursor-pointer"
            onClick={() => {
              setActive(5);
            }}
          >
            Do you provide additional Support?
          </h2>
          {active === 5 ? (
            <div className="flex items-center">
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                nostrum laboriosam sequi facilis iste similique incidunt laborum
                amet natus enim. Nisi velit deserunt doloribus ratione!
                Distinctio rerum id nesciunt illo!
              </p>
              <img className="w-6 h-6" src="/arrow.jpg" alt="arrow" />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
