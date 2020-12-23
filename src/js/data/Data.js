let dataInfo = [];
const fetchLimit = 100;
let usedImages = new Set();

const initData = (callback) => {
    const serverLink = "https://picsum.photos/v2/list?page=1&limit=" + fetchLimit;
    fetch(serverLink)
        .then(data => data.json())
        .then(data => {
            data.forEach((val) => {
                dataInfo.push(val);
            });
        })
        .then(() => callback())
        .catch((error) => {
            console.error('Fetching error:', error);
        });;
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const returnData = () => {
    let res = [];
    let num = 0;
    const numberOfImages = Math.min(5, fetchLimit - usedImages.size);
    while (res.length < numberOfImages) {
        num = getRandomInt(0, fetchLimit);
        if (usedImages.has(num) === false) {
            usedImages.add(num);
            res.push({
                "url": dataInfo[num]["download_url"],
                "author": dataInfo[num]["author"]
            });
        }
    }
    return res;
};

const getData = (callback) => {
    if (dataInfo.length === 0) {
        const init = new Promise((resolve, reject) => {
            initData(resolve);
        });
        init.then(() => {
            callback(returnData());
        });
    } else {
        callback(returnData());
    }
};

export default getData;
