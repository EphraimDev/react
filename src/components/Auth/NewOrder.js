import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const newOrder = async (userId, data) => {
    
    const fetcher = await checkFetch(`${domain}/${userId}/order-produce`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            product:data.product,
            address: data.address,
            quantity: Number(data.quantity),
            comment: data.comment,
            amount: Number(data.amount),
            price: Number(data.price),
            unit: data.unit
        })
    });
     
    return fetcher;
}