import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const lastProduct = async (userId) => {
    
    const fetcher = await checkFetch(`${domain}/${userId}/last-product-ordered`, {
        mode: 'cors'
    });
     
    return fetcher;
}