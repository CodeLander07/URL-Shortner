import  urlSchema  from "../models/short_url.model.js";
import { ConflictError } from "../utils/error_handler.js";

export const saveShortUrl = async (shortUrl,longURL,userId) => {
    try{
    const newUrl = new urlSchema({
        full_url: longURL,
        short_url: shortUrl,
    })
    if (userId) {
        newUrl.userId = userId;
    }
     await newUrl.save(); }
    catch (err) {
        if (err.code === 11000) { // Duplicate key error
            throw new ConflictError("Short URL already exists");
        }
        throw new Error(err);
    }
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