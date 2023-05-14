import { useState } from "react";
import './Dashboard.css';

const Dashboard = ({onRandomCardsLoadClick, onSearchClick}) => {
    const [ keyword, setKeyword ] = useState("");
    const handleClick = () => {
        onRandomCardsLoadClick();
    }
    const handleChange = (evt) => {
        setKeyword(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSearchClick(keyword);
    }
    return (
        <section className="dashboard">
        <button type="button" className="dashboard__button" onClick={handleClick}>Load random cards</button>
        <form className="dashboard__form" onSubmit={handleSubmit}>
            <input type="text" className="dashboard__input" placeholder="Enter keyword" onChange={handleChange}/>
            <button type="submit" className="dashboard__button dashboard__button_type_submit">Search</button>
        </form>

        </section>
    );
}

export default Dashboard;