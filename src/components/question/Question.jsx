export default function Question(props) {
  const { active, setActive, otherQuestion, number } = props;

  console.log(props);

  return (
    <div>
      <h2
        className="text-2xl mt-5 cursor-pointer"
        onClick={() => {
          if (active === number) {
            setActive(0);
          } else {
            setActive(number);
          }
        }}
      >
        {otherQuestion}
      </h2>
      {active === props.number ? (
        <div className="flex items-center">
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum
            laboriosam sequi facilis iste similique incidunt laborum amet natus
            enim. Nisi velit deserunt doloribus ratione! Distinctio rerum id
            nesciunt illo!
          </p>
          <img className="w-6 h-6" src="/arrow.jpg" alt="arrow" />
        </div>
      ) : null}
    </div>
  );
}