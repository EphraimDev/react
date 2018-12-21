export const validateRegistration = (data) => {
    for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
            if(!element || element.length < 2) {
                return document.getElementById(`${key}-error`).style.display='block'
            } else {
                document.getElementById(`${key}-error`).style.display='none'
            }
        }
    }
}
