import { useSelector } from "react-redux";
import { selectQuestions } from "../features/game/gameSlice";
import { useParams, Link } from "react-router-dom";

const Question = () => {
  let { id } = useParams();
  const questions = useSelector(selectQuestions);

  const question = questions.filter((x) => x.id === Number(id))[0];

  return (
    <div className="flex flex-col justify-around w-4/5 mx-auto font-cat h-screen text-center items-center">
      {question.isDouble ? (
        <>
          <h1 className="text-6xl">Daily Double!</h1>
          <video
            className="max-w-full h-4/5"
            controls="controls"
            name="Question"
            autoPlay
          >
            <source src="/videos/question.mp4" />
          </video>
        </>
      ) : (
        <>
          <span></span>
          <h1 className="text-5xl text-primary-text uppercase tracking-wider">
            {question.question}
          </h1>
        </>
      )}
      <Link
        to={`/answer/${question.id}`}
        className="py-2 text-2xl border border-cat-text rounded-2xl w-1/2 mx-auto"
      >
        Go To Answer
      </Link>
    </div>
  );
};

export default Question;
