import React, {Fragment} from "react";

import cs from "./search-field.module.css"

const SearchNoResult = ({onGetSearchFile, onChangeFieldSearchFile}) => {

    return (
        <Fragment>
            <div className={`${cs.NoSearchContainer} `}>
                <h3>Movie not found</h3>
                <h4>Try one more time</h4>




            <form onSubmit={onGetSearchFile} onChange={onChangeFieldSearchFile} className={` form-inline my-2 my-lg-0 ${cs.formInput}`}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button  className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </Fragment>
    )
};

export default SearchNoResult;