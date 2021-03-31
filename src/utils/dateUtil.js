export const getCurrentBrowserTime = (timezone = null,passedDate=null) => {

    let browserTime = new Date();

    if(passedDate) browserTime = new Date(passedDate);

    return {year : browserTime.getFullYear().toString() ,month : months[browserTime.getMonth()], day : formatDateValues(browserTime.getDay().toString()),hour : formatDateValues(browserTime.getHours().toString()),minute: formatDateValues(browserTime.getMinutes().toString()),seconds: formatDateValues(browserTime.getSeconds().toString()) }

}

const formatDateValues = (number = '') => {
    if (!number) return '00';
    let stringValue = number;
    return stringValue.length > 1 ? stringValue  : `0${stringValue}`
}

const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];