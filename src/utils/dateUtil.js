export const getCurrentBrowserTime = (timezone = null, passedDate = null) => {

    let browserTime = new Date();

    if (passedDate) browserTime = new Date(passedDate);

    return { year: browserTime.getFullYear().toString(), month: months[browserTime.getMonth()], day: formatDateValues(browserTime.getDate().toString()), hour: formatDateValues(browserTime.getHours().toString()), minute: formatDateValues(browserTime.getMinutes().toString()), seconds: formatDateValues(browserTime.getSeconds().toString()) }

}

export const getFullFormattedDateTime = (dateTime, timezone = null) => {
    let fullDate = { month: null, year: null, day: null, hour: null, minutes: null, seconds: null };

    try {
        const passeddate = new Date(dateTime);
        fullDate.year = passeddate.getFullYear();
        fullDate.month = months[passeddate.getMonth().toString()];
        fullDate.day = formatDateValues(passeddate.getDate().toString());
        fullDate.hour = formatDateValues(passeddate.getHours().toString());
        fullDate.minutes = formatDateValues(passeddate.getMinutes().toString());
        fullDate.seconds = formatDateValues(passeddate.getSeconds().toString());
    }
    catch (error) {
        console.log(error)
    }
    finally {
        return fullDate;
    }

}

const formatDateValues = (number = '') => {
    if (!number) return '00';
    let stringValue = number;
    return stringValue.length > 1 ? stringValue : `0${stringValue}`
}



const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
