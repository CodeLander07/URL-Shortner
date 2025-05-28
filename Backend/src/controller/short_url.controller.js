import { createShortUrlWithoutUserId } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


export const shortUrlController = wrapAsync( async (req,res)=>{
        const {url} = req.body;
    const ShortUrl = await createShortUrlWithoutUserId(url);
    res.send(process.env.APP_URL + '/' + ShortUrl);

})

export const redirectFromShortUrl = wrapAsync( async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})