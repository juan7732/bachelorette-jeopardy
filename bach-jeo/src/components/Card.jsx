import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'

const Card = ({ category = false, show = true, content, id = 1 }) => {
    const navigate = useNavigate();
    const categoryStyle = 'text-primary-text mb-1 mt-1'
    const normalStyle = 'text-cat-text'

    const showStyle = 'hidden'

    const onClickHandler = () => {
        navigate(`/question/${id}`)
    }

    console.log(content)

    return (
        <div onClick={onClickHandler} className={`
        ${category ? categoryStyle : normalStyle} 
        ${show ?  '' : showStyle}
        flex justify-center items-center text-center
        font-cat gap-6 w-full h-1/6 min-h-20
        bg-cat-bg
        mt-1
        `}>
            <h2 className={`${category ? 'text-lg tracking-wide px-2' : 'text-4xl [text-shadow:_2px_3px_2px_rgba(0_0_0_/_70%)]'} `}>{typeof content === 'number' ? '$' + content : content}</h2>
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