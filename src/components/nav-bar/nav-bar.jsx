import React from "react";
import SearchField from "../search-field/search-field";
import MovieTabs from "../movie-tabs/movie-tabs";

const NavBar = ({onGetChoose, active, onGetSearchFile, onChangeFieldSearchFile}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarColor02">
               <MovieTabs  active={active}
                           onGetChoose={onGetChoose} />
                <SearchField
                    onGetSearchFile={onGetSearchFile}
                    onChangeFieldSearchFile={onChangeFieldSearchFile}/>
            </div>
        </nav>
    )
};

export default NavBar;