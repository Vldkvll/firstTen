import React from "react";

import cs from "./movie-items-images.module.css"

const Images = ({image, ...restProps}) => {
    return (
        <div className={cs.main}>
            <img className={cs.imageMain}
                 src={image}
                 alt="image"
            />
        </div>
    )
};

export default Images;