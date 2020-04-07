import React from "react";
import MovieItemsCard from "./movie-items-components/movie-item-card";
import cs from"./movie-items.module.css"

class MovieItems extends React.Component {

    render() {
        const state = this.props;
        let movieElements = state.movies.map(postElem =>
            (<MovieItemsCard
                    title={postElem.title}
                    overview={postElem.overview}
                    vote_average={postElem.vote_average}
                    poster_path={`https://image.tmdb.org/t/p/w500${postElem.poster_path}`}

                    key={postElem.id}/>
            ));
        return (
            <div className={cs.mainItems}>
                {movieElements}
            </div>
            // <div className="container">
            //     <div className="row">
            //         <div className="col">
            //
            //             {movieElements}
            //
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default MovieItems;