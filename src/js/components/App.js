import React, { useState, useEffect } from 'react';
import Image from "./Image";
import Slider from "./Slider";
import getData from "../data/Data";
import def1 from "../../images/def1.jpg";
import def2 from "../../images/def2.jpg";
import def3 from "../../images/def3.jpg";

const def1obj = {
    url: def1,
    author: "Rohan Aggarwal"
};
const def2obj = {
    url: def2,
    author: "Alex Kozlov"
};
const def3obj = {
    url: def3,
    author: "Scott Gudahl"
};

const App = () => {
    const [images, setImages] = useState([def1obj, def2obj, def3obj]);
    const [curImage, setCurImage] = useState(def2obj);

    const handleClick = e => {
        setCurImage(e);
    };

    const timer = () => {
        console.log("-");
        getData((d) => {
            let tmpData = images.slice();
            d.forEach(img => {
                tmpData.push(img);
            });
            if (tmpData.length === 8) { // delete default images
                tmpData.splice(0, 3);
                setCurImage(tmpData[1]);
            }
            setImages(tmpData);
        });
    };

    useEffect(() => {
        if (images.length >= 20)
            return;
        const interval = setInterval(timer, 10000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [images]);

    return (
        <div className="App">
            <Image
                imageObj={curImage} />
            <Slider
                imagesObj={images}
                clickEvent={handleClick} />
        </div>
    );
};

export default App;
