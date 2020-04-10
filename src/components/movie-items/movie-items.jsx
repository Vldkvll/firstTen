import React from "react";
import MovieItemsCard from "./movie-items-components/movie-item-card";
import cs from "./movie-items.module.css"
import MovieMovItemsCard from "./movie-items-components/movie -mov-item-card";
import {UserApi} from "../API/api";

class MovieItems extends React.Component {
    state = {
        movies: [],
        idMov: [],
        counter: 0
    };

    async componentDidMount() {

        const responseData = await UserApi.getMoviesProfile();
        this.setState({
            movies: responseData
        })
    }

    getIdMovies = (movMovie = 0) => {
        const upMovMovie = [...this.state.idMov, ...movMovie];
        const countAdd = this.state.counter + 1;
        this.setState({
            idMov: upMovMovie,
            counter: countAdd
        });

    };


    render() {
        const compare = this.state.idMov;
        const state = this.state;
        if (state == []) {
            return <div>Loading ...</div>
        }

        const filterState = state.movies.filter(elem => {
            if (this.state.idMov.indexOf(elem.id) != -1) {
                return true;
            } else {
                return false;
            }
        });

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