export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const setLocalStorageString = (key, data) => {
    return localStorage.setItem(key, data);
}