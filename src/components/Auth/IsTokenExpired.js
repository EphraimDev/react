import decode from 'jwt-decode';

export const isTokenExpired = async (token) => {
    try {
        const decoded = await decode(token);

        if(decoded.exp < Date.now() / 1000) {
            return true
        } else {
            return false
        }
    }
    catch (err) {
        return false;
    }
}