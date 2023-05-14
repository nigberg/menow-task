import data from './data.json';

const getRandomCards = () => {    
    const initialCarsd = [...data];
    const result = [];
    let randomIndex;
    for(let i=0; i<5; i++){
        randomIndex = Math.floor(Math.random() * initialCarsd.length);
        result.push(initialCarsd[randomIndex]);
        initialCarsd.splice(randomIndex, 1);
    }      
    return result;  
};

const searchByKeyword = (word) => {
    const result = [];
    for (let i=0; i<data.length; i++){
        for( let j=0; j<data[i].keywords.length; j++){
            if(data[i].keywords[j] === word){
                result.push(data[i]);
                break;
            }
        }
    }
    result.sort((a, b) => a.score*1 - b.score*1);
    if (result.length > 5){
        result.splice(5);
    }    
    return result;
};

export {getRandomCards, searchByKeyword};