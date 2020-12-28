import React, { useState } from 'react';
import "../../css/image.css";

const Author = ({ name, state }) => {
    if (state === true)
        return <p className="author-visible">{name}</p>;
    else
        return <p className="author-invisible"></p>;
}

const Image = ({ imageObj }) => {
    const [isAuthor, setIsAuthor] = useState(false);
    return (
        <div className="Image">
            <img
                src={imageObj !== null ? imageObj.url : ""}
                alt={imageObj !== null ? imageObj.author : "no image"}
                className="img-elem"
                onMouseEnter={() => setIsAuthor(true)}
                onMouseLeave={() => setIsAuthor(false)}
            />
            {
                <Author
                    name={imageObj !== null ? imageObj.author : ""}
                    state={isAuthor} />
            }
        </div>
    );
};

export default Image;
