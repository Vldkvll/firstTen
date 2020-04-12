import React from "react";
import MovieItemsCard from "./movie-items-components/movie-item-card";
import cs from "./movie-items.module.css"
import MovieMovItemsCard from "./movie-items-components/movie -mov-item-card";
import {UserApi} from "../API/api";
import MovieTabs from "../movie-tabs/movie-tabs";

class MovieItems extends React.Component {
    state = {
        movies: null,
        idMov: [],
        counter: 0,
        choise: '',
        active: 'yo'
    };

    async componentDidMount() {
        const responseData = await UserApi.getMoviesProfile();
        this.setState({
            movies: responseData
        })
    };

    onGetChoose = (e) => {
        this.setState({
            choise: e.target.innerText,
        });
    };

    async componentDidUpdate(prevProps, prevState) {

        if ( prevState.choise !== this.state.choise) {
            if (this.state.choise === "Popularity desc") {
                const responsePopData = await UserApi.getSortPopularityMovies();
                console.log(responsePopData)
                await this.setState({
                    movies: responsePopData,
                    active: "1"
                });
            } else if (this.state.choise === "Revenue desc") {
                const responseRevData = await UserApi.getSortRevenueMoviesProfile();
                this.setState({
                    movies: responseRevData,
                    active: "2"
                });
            } else if (this.state.choise === "Vote average desc") {
                const responseVData = await UserApi.getSortVoteAverageMoviesProfile();
                this.setState({
                    movies: responseVData,
                    active: "3"
                });
            }
        }
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
        const state = this.state.movies;
        if (!state || state.length === 0 || !state[0].id) {
            return <div>Loading ...</div>
        }

        const filterState = state.filter(elem => {
            if (!elem) return false
            if (this.state.idMov.indexOf(elem.id) != -1) {
                return true;
            } else {
                return false;
            }
        });

        let movieElements = state.map(postElem =>{
        if (!postElem) return false
            return (
                <MovieItemsCard
                    title={postElem.title}
                    overview={postElem.overview}
                    vote_average={postElem.vote_average}
                    poster_path={`https://image.tmdb.org/t/p/w500${postElem.poster_path}`}
                    getIdMovies={this.getIdMovies}
                    key={postElem.id}
                    id={postElem.id}/>
            )});
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
                <MovieTabs
                    active={this.state.active}
                    onGetChoose={this.onGetChoose}
                />
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