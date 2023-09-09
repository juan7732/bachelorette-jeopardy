import { useSelector } from "react-redux";
import { selectFinalJeopardy, resetGame } from "../features/game/gameSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FinalAnswer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const question = useSelector(selectFinalJeopardy);


    const handleClick = () => {
        dispatch(resetGame());
        navigate('/');
    }
    return (
        <div className="flex flex-col justify-around w-4/5 mx-auto font-cat h-screen text-center items-center">
        <span></span>
          <h1 className="text-5xl text-primary-text uppercase tracking-wider">
            {question.answer}
          </h1>
        <button className='py-2 text-2xl border border-cat-text rounded-2xl px-6' onClick={handleClick}>Reset Game</button>
    </div>
    )
}

export default FinalAnswer;