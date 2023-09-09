import Card from '../../components/Card'
import PropTypes from 'prop-types'

const Column = ({category, questions}) => {

    let cards = questions.map((question, index) => {
        return (
            <Card key={index} content={question.price} show={!question.hasBeenAsked} id={question.id} />
        )
    })

    return (
        <div className='flex flex-col justify-center items-center w-1/6'>
            <Card category={true} content={category} />
            {cards}
        </div>
    )
}

Column.propTypes = {
    category: PropTypes.string,
    questions: PropTypes.array
}


export default Column;