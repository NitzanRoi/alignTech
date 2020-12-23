import React from 'react';
import "../../css/slider.css";

const Slider = ({ imagesObj }) => {
    return (
        <div className="Slider">
            {
                imagesObj.map((img) => (
                    <img src={img.url} alt="img"
                    // onClick={() => { }}
                    />
                ))
            }
        </div>
    );
};

export default Slider; 
