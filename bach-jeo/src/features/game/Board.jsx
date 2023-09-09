import Column from './Column';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import { selectCategories, selectQuestions, selectQuestionRemaining } from './gameSlice';

const Board = () => {
    const categories = [...useSelector(selectCategories)];
    const remaining = useSelector(selectQuestionRemaining);
    let sortedCategories = categories.sort(x => x.id);

    const questions = useSelector(selectQuestions);

    const columns = sortedCategories.map((category, index) => {
        const columnQuestions = questions.filter(question => question.categoryId === category.id).sort((x, y) => x.price - y.price);
        return (
            <Column key={index} category={category.Name} questions={columnQuestions} />
        )
    });

    return (
        <div className='flex gap-1 p-1 bg-primary-bg w-[90%] h-4/5'>
            {remaining === 0 ? <Card content='Final Jeopardy' id={31}></Card> : columns}
        </div>
    );
}


export default Board;