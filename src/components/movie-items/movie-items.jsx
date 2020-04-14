import React from "react";
import MovieItemsCard from "./movie-items-components/movie-item-card";
import cs from "./movie-items.module.css"
import MovieMovItemsCard from "./movie-items-components/movie -mov-item-card";
import {UserApi} from "../API/api";
import NavBar from "../nav-bar/nav-bar";
import Pagination from "../Utils/pagination";

class MovieItems extends React.Component {
    state = {
        movies: null,
        idMov: [],
        counter: 0,
        choise: '',
        active: 'yo',
        searchFile: '',
        totalMovies: 0,
        currentPage: 1,
        met: ''
    };

    async componentDidMount() {
        const responseData = await UserApi.getMoviesProfile();
        this.setState({
            movies: responseData.results,
            totalMovies: responseData.total_results,
            active: 1

        })
    };

    onGetChoose = (e) => {
        this.setState({
            choise: e.target.innerText,
        });
    };

    async componentDidUpdate(prevProps, prevState) {

        if ( prevState.choise !== this.state.choise) {
            if (this.state.choise === "Popularity") {
                const responsePopData = await UserApi.getSortPopularityMovies();
                await this.setState({
                    movies: responsePopData.results,
                    active: 1,
                    totalMovies: responsePopData.total_results,
                    currentPage: 1,
                    counter: 0

                });
            } else if (this.state.choise === "Revenue") {
                const responseRevData = await UserApi.getSortRevenueMoviesProfile();
                this.setState({
                    movies: responseRevData.results,
                    active: 2,
                    totalMovies: responseRevData.total_results,
                    currentPage: 1,
                    counter: 0
                });
            } else if (this.state.choise === "Vote average") {
                const responseVData = await UserApi.getSortVoteAverageMoviesProfile();
                this.setState({
                    movies: responseVData.results,
                    active: 3,
                    totalMovies: responseVData.total_results,
                    currentPage: 1,
                    counter: 0
                });
            } else if (this.state.choise === "Release") {
                const responseRelData = await UserApi.getSortReleaseMoviesProfile();
                this.setState({
                    movies: responseRelData.results,
                    active: 5,
                    totalMovies: responseRelData.total_results,
                    currentPage: 1,
                    counter: 0
                });
            }
        }
    }

    onGetSearchFile = async (e) => {
        e.preventDefault()
        const responseData = await UserApi.getSearchMovies(this.state.searchFile);
        this.setState({
            movies: responseData.results,
            totalMovies: responseData.total_results,
            active: 4
        })
    };

    onChangeFieldSearchFile = (e) => {
        this.setState({searchFile: e.target.value})
    };

    getIdMovies = (movMovie = 0) => {
        const upMovMovie = [...this.state.idMov, ...movMovie];
        const countAdd = this.state.counter + 1;
        this.setState({
            idMov: upMovMovie,
            counter: countAdd
        });
    };

    nextPage = async (page, met) => {
        let mett = parseInt(met, 10)
        if (mett === 4) {
            const responseData = await UserApi.getSearchMovies(this.state.searchFile, page);
            this.setState({
                movies: responseData.results,
                currentPage: page
            })
        } else if (mett === 1) {
            const responsePopData = await UserApi.getSortPopularityMovies(page);
            await this.setState({
                movies: responsePopData.results,
                currentPage: page
            })
        } else if (mett === 2) {
            const responseRevData = await UserApi.getSortRevenueMoviesProfile(page);
            await this.setState({
                movies: responseRevData.results,
                currentPage: page
            })
        } else if (mett === 3) {
            const responseVData = await UserApi.getSortVoteAverageMoviesProfile(page);
            await this.setState({
                movies: responseVData.results,
                currentPage: page
            })
        } else if (mett === 5) {
            const responseRelData = await UserApi.getSortReleaseMoviesProfile(page);
            this.setState({
                movies: responseRelData.results,
                currentPage: page
            })
        }
    }

    render() {
        const totalListOfPages = Math.ceil(this.state.totalMovies / 20);
        const state = this.state.movies;
        if (!state || state.length === 0 ) {
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
                    release_date={postElem.release_date}
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

                <div className={`${cs.containerSearch}`}>
                    <NavBar
                        active={this.state.active}
                        onGetChoose={this.onGetChoose}
                        onChangeFieldSearchFile={this.onChangeFieldSearchFile}
                        onGetSearchFile={this.onGetSearchFile}
                    />
                </div>
               <div className={cs.mainTabsHeader}>
                   {this.state.totalMovies > 20 ? <Pagination
                       nextPage={this.nextPage}
                       totalListOfPages={totalListOfPages}
                       currentPage={this.state.currentPage}
                       met={this.state.active}
                       pageDoze={this.pageDoze}
                   /> : null}
               </div>

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
                <div className={cs.mainTabsFooter}>
                    {/*{this.state.totalMovies > 20 ? <Pagination*/}
                    {/*    nextPage={this.nextPage}*/}
                    {/*    totalListOfPages={totalListOfPages}*/}
                    {/*    currentPage={this.state.currentPage}*/}
                    {/*    met={`Popularity`}*/}
                    {/*    pageDoze={this.pageDoze}*/}
                    {/*/> : null}*/}
               </div>
            </div>
        )
    }
}

export default MovieItems;