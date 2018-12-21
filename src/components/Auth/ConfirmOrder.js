import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const confirmOrder = async (orderId) => {
    
    const fetcher = await checkFetch(`${domain}/order/${orderId}`, {
        mode: 'cors'
    });
     
    return fetcher;
}

export const cancelOrder = async(orderId) => {
    const fetcher = await checkFetch(`${domain}/order/${orderId}`, {
        method: 'DELETE',
        mode: 'cors'
    });

    return fetcher
}