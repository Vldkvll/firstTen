import React from 'react';
import cs from './App.module.css';
import MovieItems from "./movie-items/movie-items";



class App extends React.Component {
    movie = {
            title: "Alladin",
            vote_average: 8.6,
            image: "https://vignette.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest?cb=20190312021628"
    };

    render() {
        return (
            <div className={cs.app}>
                <MovieItems data={this.movie}/>
            </div>
        );
    }
}

export default App;
