import React from "react";
import cs from "./movie-tabs.module.css"

const MovieTabs = ({onGetChoose, active}) => {


    return (
        <ul className={`navbar-nav mr-auto ${cs.containerTabs}`}>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="1" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Popularity
                </div>
            </li>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="2" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Revenue
                </div>
            </li>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="3" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Vote average
                </div>
            </li>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="4" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Release
                </div>
            </li>
        </ul>
    )
};

export default MovieTabs;