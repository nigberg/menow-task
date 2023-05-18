import './Gallery.css';
import Card from '../Card/Card';

const Gallery = ({cardsToShow}) => {
    return (
        <section className='gallery'>
            {cardsToShow.length ===0 && <p className='gallery__nothing-found'>Nothing found...</p>}
            <ul className='gallery__cards'>
            {cardsToShow.map(card => <li key={card.id}> <Card card={card}/> </li>)}
            </ul>
        </section>
    );

}
export default Gallery;