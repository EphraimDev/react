import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const loginUser = async (email, password) => {
    
    const fetcher = await checkFetch(`${domain}/login`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            email,
            password
        })
    });
     
    return fetcher;
}