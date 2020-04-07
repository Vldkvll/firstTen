import React, {useState} from "react";
import cs from "../../movie-items/movie-items.module.css"

const MovieItemsCard = ({title, overview, poster_path, vote_average}) => {

    const [show, setStateShow] = useState(false);
    const [like, setStateLike] = useState(false);
    const [delMovie, setStateDelMovie] = useState(true);

    const onMyShowButtonHandler = () => {
        setStateShow(!show)

    };
    const onHandlerLike = () => {
        setStateLike(!like)
    };
    const onHandlerDelMovie = () => {
        setStateDelMovie(!delMovie)
    };


    if (delMovie) {
        return (

            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={poster_path} alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-title">{vote_average}</h6>
                    <div>
                        <button className={`btn btn-outline-info btn-sm`}
                                onClick={onMyShowButtonHandler}>{show ? "HIDE" : "SHOW"}</button>
                        {show ? <div><p className={`card-text`}>{overview}</p></div> : null}
                        <div className={`${cs.buttonArea}`}>
                            <button onClick={onHandlerLike}
                                    className={like ? `btn btn-secondary btn-sm ${cs.btnTrue} ` : "btn btn-outline-warning btn-sm"}>
                                LIKE
                            </button>
                            <button onClick={onHandlerDelMovie}
                                    className={`btn btn-danger btn-sm`}>
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
    ;

}
export default MovieItemsCard