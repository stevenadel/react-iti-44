import React from "react";
import './PortfolioCard.css';

function PortfolioCard({ altTheme, title }) {
    return (
        <div className={"project text-light d-flex flex-column justify-content-center align-items-center " + (altTheme ? "bg-dark" : "")}>
            <h3>{title}</h3>
            <hr className="w-75 card-break" />
        </div>
    );
}

export default PortfolioCard;