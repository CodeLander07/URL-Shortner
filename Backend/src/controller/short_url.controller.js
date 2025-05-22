import { createShortUrlWithoutUserId } from "../services/short_url.service.js";
import { findUrl } from "../dao/short_url.js";


export const shortUrlController = async (req,res)=>{
    const {url} = req.body;
    const ShortUrl = await createShortUrlWithoutUserId(url);
    res.send(process.env.APP_URL + '/' + ShortUrl);
}

export const redirectFromShortUrl = async (req,res)=>{
    const {id} = req.params;
    const url = await findUrl(id);
    res.redirect(url);
}