import Dashboard from "../Dashboard/Dashboard";
import Gallery from "../Gallery/Gallery";

const Main = ({onRandomCardsLoadClick, onSearchClick, cardsToShow}) => {
    return (
        <main className="main">
        <Dashboard onRandomCardsLoadClick={onRandomCardsLoadClick} onSearchClick={onSearchClick}/>
        <Gallery cardsToShow={cardsToShow}/>
        </main>
    );
}

export default Main;