import React, { useState, useEffect } from 'react';
import Image from "./Image";
import Slider from "./Slider";
import getData from "../data/Data";

const App = () => {
    const [images, setImages] = useState([]);
    const [curImage, setCurImage] = useState(null);

    const timer = () => {
        if (images.length < 100)
            getData((d) => {
                let tmpData = images.slice();
                d.forEach(element => {
                    tmpData.push(element);
                });
                setImages(tmpData);
            });
    };

    useEffect(() => {
        const interval = setInterval(timer, 30000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [images]);

    return (
        <div className="App">
            <Image imageObj={curImage} />
            <Slider imagesObj={images} />
        </div>
    );
};

export default App;
