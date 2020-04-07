import React from 'react';
import cs from './App.module.css';
import MovieItems from "./movie-items/movie-items";
import {moviesData} from '../components/movies-data/movies-data'



class App extends React.Component {


    movie = moviesData;
    //     {
    //         title: "Aladdin",
    //         image: "https://vignette.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest?cb=20190312021628",
    //         vote_average: 8.6,
    //     overview: "A kindhearted street urchin and a power-hungry" +
    //         " Grand Vizier vie for a magic lamp that has the power" +
    //         " to make their deepest wishes come true. "
    // };

    render() {
        return (
            <div className={cs.app}>
                <MovieItems movies={this.movie}/>
            </div>
        );
    }
}

export default App;
