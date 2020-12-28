import React, { useState, useEffect } from 'react';
import "../../css/slider.css";

const Slider = ({ imagesObj, clickEvent }) => {
    const [style, setStyle] = useState({
        style: { marginLeft: "-5px", width: "800px" },
        curMargin: -5,
        curWidth: 800
    });
    const [curIdx, setCurIdx] = useState(1);

    useEffect(() => {
        let width = imagesObj.length * 200;
        setStyle({
            style: {
                marginLeft: `${style.curMargin}px`,
                width: `${width}px`
            },
            curMargin: style.curMargin,
            curWidth: width
        });
        // eslint-disable-next-line
    }, [imagesObj]);

    useEffect(() => {
        clickEvent(imagesObj[curIdx]);
        // eslint-disable-next-line
    }, [curIdx]);

    return (
        <div className="Slider">
            <p
                className="right"
                onClick={() => {
                    if (style.curMargin >= -5)
                        return;
                    let curStyle = Object.assign({}, style);
                    curStyle.curMargin += 200;
                    setCurIdx(curIdx - 1);
                    setStyle({
                        style: {
                            marginLeft: `${curStyle.curMargin}px`,
                            width: `${curStyle.curWidth}px`
                        },
                        curMargin: curStyle.curMargin,
                        curWidth: curStyle.curWidth
                    });
                }}>
                {">"}
            </p>
            <div className="sld" style={style.style}>
                {
                    imagesObj.map((img, i) => (
                        <img
                            src={img.url}
                            alt="img"
                            key={i}
                            onClick={() => clickEvent(img)}
                        />
                    ))
                }
            </div>
            <p
                className="left"
                onClick={() => {
                    if (style.curMargin <= (-5 - style.curWidth + 600))
                        return;
                    let curStyle = Object.assign({}, style);
                    curStyle.curMargin -= 200;
                    setCurIdx(curIdx + 1);
                    setStyle({
                        style: {
                            marginLeft: `${curStyle.curMargin}px`,
                            width: `${curStyle.curWidth}px`
                        },
                        curMargin: curStyle.curMargin,
                        curWidth: curStyle.curWidth
                    });
                }}>
                {"<"}
            </p>
        </div>
    );
};

export default Slider; 
