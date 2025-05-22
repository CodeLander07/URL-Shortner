import  urlSchema  from "../models/short_url.model.js";

export const saveShortUrl = async (shortUrl,longURL,userId) => {

    const newUrl = new urlSchema({
        full_url: longURL,
        short_url: shortUrl,
    })
    if (userId) {
        newUrl.userId = userId;
    }
    newUrl.save();
}

export const findUrl = async (shortUrl) => {
    const url = await urlSchema.findOne({ short_url: shortUrl });
    if (!url) {
        return null;
    }
    return url.full_url;
}

export const getShortUrl = async (shortUrl) => {
    // console.log(clicks);
    return await urlSchema.findOneAndUpdate({ short_url: shortUrl }, { $inc: { clicks: 1 } });
}