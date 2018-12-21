import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const lastProduct = async (userId) => {
    
    const fetcher = await checkFetch(`${domain}/user/${userId}`, {
        mode: 'cors'
    });
     
    return fetcher;
}