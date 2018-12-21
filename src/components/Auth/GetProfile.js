import decode from 'jwt-decode';

export const getProfile = (getToken) => {
    if(!getToken){
        return null
    } else {
        return decode(getToken)
    }
}