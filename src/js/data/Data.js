const fetchLimit = 100;
let notUsedImages = [];
let dataInfo = {};

const initData = (callback) => {
    // console.log("fetch data"); //todo delete
    const serverLink = "https://picsum.photos/v2/list?page=1&limit=" + fetchLimit;
    fetch(serverLink)
        .then(data => data.json())
        .then(data => {
            data.forEach((val, i) => {
                dataInfo[i] = val;
            });
            notUsedImages = Array.from(Array(fetchLimit).keys());
        })
        .then(() => callback())
        .catch((error) => {
            console.error('Fetching error:', error);
        });;
};

const getRandomIdx = () => {
    return Math.floor(Math.random() * notUsedImages.length);
};

const returnData = () => {
    let res = [];
    let idx = 0;
    let num = 0;
    const numberOfImages = Math.min(5, notUsedImages.length);
    while (res.length < numberOfImages) {
        idx = getRandomIdx();
        num = notUsedImages[idx];
        res.push({
            "url": dataInfo[num]["download_url"],
            "author": dataInfo[num]["author"]
        });
        notUsedImages.splice(idx, 1);
    }
    // console.log("res"); //todo test
    // console.log(res); //todo test
    return res;
};

const getData = (callback) => {
    if (Object.keys(dataInfo).length === 0) {
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
