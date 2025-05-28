import { generatenanoid } from "../utils/helper.js";
import urlSchema from '../models/short_url.model.js';
import { saveShortUrl } from "../dao/short_url.js";


export const createShortUrlWithoutUserId  = async (url) => {
     const shortUrl =  await generatenanoid(7);
     if (!shortUrl) {
         throw new Error("Failed to generate short URL");
     }
    await saveShortUrl(shortUrl, url);
   return shortUrl;
}

export const createShortUrlWithUserId = async (url,userId) => {
     const shortUrl =  await generatenanoid(7);
    await saveShortUrl(shortUrl, url , userId);
   return shortUrl;
}