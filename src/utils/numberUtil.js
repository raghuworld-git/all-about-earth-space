export const numberWithZeroPrefix = (num) => {
    if (!num) {
        return '00'
    }
    return num.toString().length === 1 ? `0${num}` : num;
}