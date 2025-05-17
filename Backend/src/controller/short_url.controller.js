import { createShortUrlWithoutUserId } from "../services/short_url.service.js";

export const shortUrlController = async (req,res)=>{
    const {url} = req.body;
    const ShortUrl = await createShortUrlWithoutUserId(url);
    res.send(process.env.APP_URL + '/' + ShortUrl);
}