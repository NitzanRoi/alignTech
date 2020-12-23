import React, { useState } from 'react';
import "../../css/image.css";

const Image = ({ imageObj }) => {
    const [isAuthor, setIsAuthor] = useState(false);
    const Author = ({ name, state }) => {
        const [visible, setVisible] = useState(state);
        if (visible === true)
            return <p className="author-visible">{name}</p>;
        else
            return <p className="author-invisible"></p>;
    }

    return (
        <div className="Image">
            <img
                src={() => imageObj !== null ? imageObj.url : ""}
                className="img-elem"
                onMouseEnter={() => setIsAuthor(true)}
                onMouseLeave={() => setIsAuthor(false)}
            />
            {
                <Author
                    name={() => imageObj !== null ? imageObj.author : ""}
                    state={isAuthor} />
            }
        </div>
    );
};

export default Image;
