import './Gallery.css';
import Card from '../Card/Card';

const Gallery = ({cardsToShow}) => {
    return (
        <section className='gallery'>
            {cardsToShow.length ===0 && <p className='gallery__nothing-found'>Nothing found...</p>}
            {cardsToShow.map(card => <Card key={card.id} card={card}/>)}
        </section>
    );

}
export default Gallery;