import React from "react";
import Images from "./movie-items-components/movie-items-images";

class MovieItems extends React.Component {


    state = {
        show: false
    };

    myShowButtonHandler = () => {
        this.setState({show: !this.state.show})

    }

    render() {

        const {data: {title, vote_average, image, overview}} = this.props;

        return (
            <div>
                <Images image={image} title={title}/>
                <p>Title: {title}</p>
                <p>IMDb: {vote_average}</p>
                <button onClick={this.myShowButtonHandler}>show</button>
                {this.state.show ? <p>{overview}</p> : null}
            </div>
        )
    }
}

export default MovieItems;