import Column from './Column';
import { useSelector } from 'react-redux';
import { selectCategories, selectQuestions } from './gameSlice';

const Board = () => {
    const categories = [...useSelector(selectCategories)];
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
            {columns}
        </div>
    );
}


export default Board;