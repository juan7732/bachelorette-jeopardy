import { useSelector } from "react-redux";
import { selectFinalJeopardy } from "../features/game/gameSlice";
import { useNavigate } from "react-router-dom";

const FinalAnswer = () => {
    const navigate = useNavigate();
    const question = useSelector(selectFinalJeopardy);


    const handleClick = () => {

        navigate('/');
    }
    return (
        <div className="flex flex-col justify-around w-4/5 mx-auto font-cat h-screen text-center items-center">
        <span></span>
          <h1 className="text-5xl text-primary-text uppercase tracking-wider">
            {question.answer}
          </h1>
        <button onClick={handleClick}>Reset Game</button>
    </div>
    )
}

export default FinalAnswer;