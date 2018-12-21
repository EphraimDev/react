import { loggedIn } from "./LoggedIn";
import token from "./GetToken";
import { checkStatus } from "./CheckStatus";

export const checkFetch = (url, options) => {
    const headers = {
        'Accept': 'appliation/json',
        'Content-Type': 'application/json'
    }

    if(loggedIn) {
        headers['Authorization'] = token
    }

    // loggedIn ? headers['Authorization'] = token : null

    return fetch(url, {
        headers,
        ...options
    })
    .then(checkStatus)
    .then(response => response.json())
    .catch(err => console.log(err))
}