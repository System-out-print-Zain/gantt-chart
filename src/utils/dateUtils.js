
export function prodString(dateObj) {
    const year = dateObj.getFullYear().toString();

    let month = (dateObj.getUTCMonth() + 1).toString();
    month = (month.length === 1 ? `0${month}`: month);

    let day = dateObj.getUTCDate().toString();
    day = (day.length === 1 ? `0${day}`: day);

    return year + '-' + month + '-' + day;
}

export function getDaysBetween(dateObj1, dateObj2) {
    return Math.ceil(Math.abs((dateObj1.getTime() - dateObj2.getTime()))/(1000 * 3600 * 24));
}