const artikelData = require('./asset/artikeldata')

const getArticle = (req, res) => {
    try{
    console.log(req.params);
    console.log(req.token);
    const { type }  = req.params;
    console.log(type);
    if (type === 'all'){
        return res.status(200).json(
            {message : 'get article for all, last update June 7th 2023',
            error : false,
            data: artikelData.artikelAll,
        })
    }
    else if(type === 'ios'){
        return res.status(200).json(
            {message : 'get article for ios, last update June 7th 2023',
            error : false,
            data: artikelData.artikelIOS,
        })
    }
    else if (type === 'android'){
        return res.status(200).json(
            {message : 'get article for android, last update June 7th 2023',
            error : false,
            data: artikelData.artikelAndroid,
        })
    }
    else if (type === 'dslr' ) {
        return res.status(200).json(
            {message : 'get article for DSLR, last update June 7th 2023',
            error : false,
            data: artikelData.artikelDSLR,
        })
    }
    else if (type === 'video') {
        return res.status(200).json(
            {message : 'get article for video, last update June 7th 2023',
            error : false,
            data: artikelData.artikelVideo,
        })
    }
    // return res.status(200).json(
    //         {message : 'get article for video, last update June 7th 2023',
    //         error : false,
    //         data: artikelData.artikelVideo,
    //     })
}
    catch (err) {
        console.log(err);
        console.log('Article Handler Error');
        return res.status(401).json(
            {message : 'wrong param for content',
            error : true,
        })
    }
};

module.exports = { getArticle }