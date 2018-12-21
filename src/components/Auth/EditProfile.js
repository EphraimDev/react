import { domain } from "./Domain";
import {checkFetch} from "./Fetch";

export const editProfile = async (userId, data) => {
    
    const fetcher = await checkFetch(`${domain}/user/${userId}/edit-profile`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify({
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip
        })
    });
     
    return fetcher;
}