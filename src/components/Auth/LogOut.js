export const logout = () => {
    return localStorage.removeItem('x-access-token')
}