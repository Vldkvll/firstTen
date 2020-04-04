import React from "react";
import Images from "./movie-items-components/movie-items-images";

class MovieItems extends React.Component {



    render() {
        console.log(this.props);

        const {data: {title, vote_average, image}} = this.props;
        console.log(image);
        return (
            <div>
                <Images image={image}/>
                <p>Title: {title}</p>
                <p>IMDb: {vote_average}</p>
            </div>
        )
    }
}

export default MovieItems;