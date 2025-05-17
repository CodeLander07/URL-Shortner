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