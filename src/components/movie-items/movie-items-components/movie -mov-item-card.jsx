import React, {useState} from "react";
import cs from "../../movie-items/movie-items.module.css"

const MovieMovItemsCard = ({title, overview, poster_path, vote_average, id}) => {

    const [show, setStateShow] = useState(false);
    const [like, setStateLike] = useState(false);
    // const [delMovie, setStateDelMovie] = useState(true);
    // const [movMovie, setStateMovMovie] = useState([]);

    const onMyShowButtonHandler = () => {
        setStateShow(!show)

    };
    const onHandlerLike = () => {
        setStateLike(!like)
    };
    // const onHandlerMoveMovie = () => {
    //     setStateDelMovie(!delMovie)
    //     setStateMovMovie([...movMovie, id])
    // };

    // if (delMovie) {
        return (
            <div className={`${cs.mainItemsElement}`}>
                <div className="card" style={{width: "14rem"}}>
                    <img className="card-img-top" src={poster_path} alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-title">IMDb: {vote_average}</h6>
                        <div>
                            <button className={`btn btn-outline-info btn-sm`}
                                    onClick={onMyShowButtonHandler}>{show ? "HIDE" : "SHOW"}</button>
                            {show ? <div><p className={`card-text `}>{overview}</p></div> : null}
                            <div className={`${cs.buttonArea}`}>
                                <button onClick={onHandlerLike}
                                        className={like ? `btn btn-success btn-sm ${cs.btnTrue} ` : "btn btn-outline-warning btn-sm"}>
                                    LIKE
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    // } else {
    //     return null
    // }
    // ;

};
export default MovieMovItemsCard;