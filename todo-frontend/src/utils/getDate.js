import moment from 'moment';

const DAYS_OF_WEEK = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};

export function getDate() {
    return moment().format('MMMM Do YYYY');
}

export function getDay() {
    let day = moment().day();
    return DAYS_OF_WEEK[day];
}
