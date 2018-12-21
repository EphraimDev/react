export const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        //console.log(response.status)
        return response
    } else {
        //console.log(response)
        return response.message
    }
}