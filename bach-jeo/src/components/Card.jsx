import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'

const Card = ({ category = false, show = true, content, id = 1 }) => {
    const navigate = useNavigate();
    const categoryStyle = 'text-primary-text mb-1 mt-1'
    const normalStyle = 'text-cat-text'

    const showStyle = 'invisible'

    const onClickHandler = () => {
        if (category) return;
        if(id === 31){
            navigate('/final')
        } else {
            navigate(`/question/${id}`)
        }
    }

    return (
        <div onClick={onClickHandler} className={`
        ${category ? categoryStyle : normalStyle} 
        flex justify-center items-center text-center
        font-cat gap-6 w-full h-1/6 min-h-20
        bg-cat-bg
        hover:cursor-fancy
        ${id === 31 ? 'h-full mt-0' :'mt-1'}
        `}>
            <h2 className={`${category ? 'sm:text-lg tracking-wide px-2' : 'sm:text-4xl [text-shadow:_2px_3px_2px_rgba(0_0_0_/_70%)]'} ${show ?  '' : showStyle} `}>{typeof content === 'number' ? '$' + content : content}</h2>
        </div>
    )
}

Card.propTypes = {
    category: PropTypes.bool,
    show: PropTypes.bool,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    id: PropTypes.number
}

export default Card;