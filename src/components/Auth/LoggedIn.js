import token from './GetToken';
import { isTokenExpired } from './IsTokenExpired';

export const loggedIn = () => {
    //let token = localStorage.getItem('x-access-token');
    return !!token && !isTokenExpired(token)
}