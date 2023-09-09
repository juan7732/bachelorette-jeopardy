import { useSelector } from "react-redux";
import { selectFinalJeopardy } from "../features/game/gameSlice";
import { Link} from "react-router-dom";

const FinalQuestion = () => {
    const question = useSelector(selectFinalJeopardy);

    return (
        <div className="flex flex-col justify-around w-4/5 mx-auto font-cat h-screen text-center items-center">
        <span></span>
          <h1 className="text-5xl text-primary-text uppercase tracking-wider">
            {question.question}
          </h1>
        <Link
        to={`/finalanswer`}
        className="py-2 text-2xl border border-cat-text rounded-2xl w-1/2 mx-auto"
      >
        Go To Answer
      </Link>
    </div>
    )
}

export default FinalQuestion;