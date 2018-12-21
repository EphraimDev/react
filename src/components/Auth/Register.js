import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const register = async (firstname, lastname, email, password) => {
    
    const fetcher = await checkFetch(`${domain}/register-user`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        })
    });
     
    return fetcher;
}