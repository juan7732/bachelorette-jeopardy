import { useSelector } from "react-redux";
import { selectQuestions } from "../features/game/gameSlice";
import { useParams, Link } from 'react-router-dom';

const Answer = () => {
    let { id } = useParams();
    const questions = useSelector(selectQuestions);

    const question = questions.filter(x => x.id === Number(id))[0];

    return ( 
        <div className='flex flex-col justify-around w-1/2 mx-auto font-cat h-screen text-center'>
            <span></span>
            <h1 className='text-5xl text-primary-text uppercase tracking-wider'>{question.answer}</h1>
            <Link to={`/`} className='text-2xl border border-cat-text rounded-2xl w-1/2 mx-auto'>Back To The Board</Link>
        </div>
    );
}


export default Answer;