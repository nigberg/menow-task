import './Card.css';

const Card = ({card}) => {
    const imgId = card.path.match(/\/([\w-]{25,})/)[1];
    const imgUrl = `https://drive.google.com/uc?id=${imgId}&export=view`;
    return(
        <article className='card'>
            <img src={imgUrl} className='card__image' alt='image'/>
            <div className='card__info'>
                <p className='card__score'>Score: {card.score}</p>
            </div>
        </article>
    )
}

export default Card;