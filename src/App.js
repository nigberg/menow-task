import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import * as api from './utils/api';
import { useState, useEffect } from 'react';

function App() {
  const [ cardsToShow, setCardsToShow ] = useState([]);  

  useEffect(() => {
    getRandomCards();
  }, [])
  
  const getRandomCards = () => {    
    setCardsToShow(api.getRandomCards());      
  }  

  const search = (keyword) => {    
    setCardsToShow(api.searchByKeyword(keyword));   
  }  

  return (
    <div className="App">
    <Header/>
    <Main onRandomCardsLoadClick={getRandomCards} onSearchClick={search} cardsToShow={cardsToShow}/>
    <Footer/>         
    </div>
  );
}

export default App;
