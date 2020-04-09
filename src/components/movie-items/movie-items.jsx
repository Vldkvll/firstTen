import React from "react";
import MovieItemsCard from "./movie-items-components/movie-item-card";
import cs from "./movie-items.module.css"
import MovieMovItemsCard from "./movie-items-components/movie -mov-item-card";

class MovieItems extends React.Component {
    state = {
        idMov: [],
        counter: 0
    };

    getIdMovies = (movMovie=0) => {
        const upMovMovie = [...this.state.idMov, ...movMovie];
        const countAdd = this.state.counter + 1;
        this.setState({idMov: upMovMovie,
            counter: countAdd
        });

    };


    render() {
        const compare = this.state.idMov;
        console.log(`compare -  ${compare}`)
        const state = this.props;
        const filterState = state.movies.filter( elem => {

                console.log(` elem.id - ${elem.id}`)
                console.log(this.state.idMov)
            if (this.state.idMov.indexOf( elem.id ) != -1  ) {
                return true;
            } else {
                return false;
            }

        });
        console.log(filterState)
        console.log(` filterState - ${filterState}`);
        console.log(state.movies)
        console.log(` state.movies - ${state.movies}`);

        let movieElements = state.movies.map(postElem =>
            (

                <MovieItemsCard
                    title={postElem.title}
                    overview={postElem.overview}
                    vote_average={postElem.vote_average}
                    poster_path={`https://image.tmdb.org/t/p/w500${postElem.poster_path}`}
                    getIdMovies={this.getIdMovies}
                    key={postElem.id}
                    id={postElem.id}/>

            ));
        // const movieMovElements = null;
        // if (this.state.idMov = []) {
            const movieMovElements = filterState.map(postElem =>
                (

                    <MovieMovItemsCard
                        title={postElem.title}
                        overview={postElem.overview}
                        vote_average={postElem.vote_average}
                        poster_path={`https://image.tmdb.org/t/p/w500${postElem.poster_path}`}
                        getIdMovies={this.getIdMovies}
                        key={postElem.id}
                        id={postElem.id}/>

                ));
        // } else {
        //     return movieMovElements;
        // }

        return (
            <div className={cs.mainItems}>

                <div className={`card-deck  ${cs.mainItemsElement}`}>
                    {movieElements}
                </div>

                <div className={` ${cs.mainItemsElementMov}`}>
                    <p>
                        Will Watch: {this.state.counter}

                    </p>
                    <div>
                        {movieMovElements}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieItems;