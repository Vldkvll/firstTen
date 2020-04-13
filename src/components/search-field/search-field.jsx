import React from "react";

import cs from "./search-field.module.css"

const SearchField = ({onGetSearchFile, onChangeFieldSearchFile}) => {

    return (
            <form onSubmit={onGetSearchFile} onChange={onChangeFieldSearchFile} className={`form-inline my-2 my-lg-0 ${cs.formInput}`}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button  className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
    )
};

export default SearchField;