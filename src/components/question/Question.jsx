export default function Question(props) {
  const { active, setActive, dialogQ, dialogA, current } = props;

  return (
    <div>
      <h2
        className="text-2xl mt-5 cursor-pointer"
        onClick={() => {
          if (active === current) {
            setActive(null);
          } else {
            setActive(current);
          }
        }}
      >
        {dialogQ}
      </h2>
      {active === current ? (
        <div className="flex mt-5 items-center justify-center">
          <p>{dialogA}</p>
          <img className="w-6 h-6 ml-4" src="/arrow.jpg" alt="arrow" />
        </div>
      ) : null}
    </div>
  );
}
