import React from "react";
import cs from "./movie-tabs.module.css"

const MovieTabs = ({onGetChoose, active}) => {


    return (
        <ul className={`tabs nav nav-pills ${cs.containerTabs}`}>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="1" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Popularity desc
                </div>
            </li>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="2" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Revenue desc
                </div>
            </li>
            <li className={`nav-item`}>
                <div className={`nav-link ${cs.buttonChangeColor} ${active==="3" ? "active": ""}`}
                     onClick={onGetChoose}>
                    Vote average desc
                </div>
            </li>
        </ul>
    )
};

export default MovieTabs;