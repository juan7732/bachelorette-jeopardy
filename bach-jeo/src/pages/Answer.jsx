import { useSelector } from "react-redux";
import { selectQuestions } from "../features/game/gameSlice";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { markAsAsked } from "../features/game/gameSlice";

const Answer = () => {
    const dispatch = useDispatch();
  let { id } = useParams();
  const questions = useSelector(selectQuestions);

  const question = questions.filter((x) => x.id === Number(id))[0];

  useEffect(() => {
    dispatch(markAsAsked(question.id));
  }, [question, dispatch])

  return (
    <div className="flex flex-col justify-around w-4/5 mx-auto font-cat h-screen text-center">
      {question.isDouble ? (
        <>
          <h1 className="text-6xl">Daily Double!</h1>
          <video
            className="max-w-full h-4/5"
            controls="controls"
            name="Answer"
            autoPlay
          >
            <source src="/videos/answer.mp4" />
          </video>
        </>
      ) : (
        <>
          <span></span>
          <h1 className="text-5xl text-primary-text uppercase tracking-wider">
            {question.answer}
          </h1>
        </>
      )}
      <Link
        to={`/`}
        className="text-2xl border border-cat-text rounded-2xl w-1/2 mx-auto py-2"
      >
        Back To The Board
      </Link>
    </div>
  );
};

export default Answer;
