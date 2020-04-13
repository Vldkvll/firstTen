import React from 'react';
import cs from './App.module.css';
import MovieItems from "./movie-items/movie-items";

class App extends React.Component {

    render() {
        return (
            <div className={cs.app}>

                <MovieItems />

            </div>
        );
    }
}

export default App;
