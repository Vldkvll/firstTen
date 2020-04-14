import React, {useState} from "react";
import cs from "../../movie-items/movie-items.module.css"

const MovieItemsCard = ({title, overview, poster_path, vote_average, id, getIdMovies, release_date}) => {

    const [show, setStateShow] = useState(false);
    const [like, setStateLike] = useState(false);
    const [delMovie, setStateDelMovie] = useState(true);

    const onMyShowButtonHandler = () => {
        setStateShow(!show)

    };
    const onHandlerLike = () => {
        setStateLike(!like)
    };

    const movIdArrayGet = () => {
        let movIdArray = [];
        return () => {
            setStateDelMovie(!delMovie);
            movIdArray = [...movIdArray, id];
            getIdMovies(movIdArray);
        };
    }
    if (delMovie) {
        return (
            <div className={`${cs.mainItemsElement}`}>
                <div className="card" style={{width: "16rem"}}>
                    <img className="card-img-top" src={poster_path} alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-title">IMDb: {vote_average}</h6>
                        <span className="card-title">Release:  {release_date}</span>
                        <div>
                            <button className={`btn btn-outline-info btn-sm mt-1`}
                                    onClick={onMyShowButtonHandler}>{show ? "HIDE" : "SHOW"}</button>
                            {show ? <div><p className={`card-text `}>{overview}</p></div> : null}
                            <div className={`${cs.buttonArea}`}>
                                <button onClick={onHandlerLike}
                                        className={like ? `btn btn-success btn-sm ${cs.btnTrue} ` : "btn btn-outline-warning btn-sm"}>
                                    LIKE
                                </button>

                                <button onClick={movIdArrayGet()}
                                        className={`btn btn-danger btn-sm`}>
                                    WATCH
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    } else {
        return null
    }
}
export default MovieItemsCard