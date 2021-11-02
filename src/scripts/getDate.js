import moment from 'moment';

const getDate = (daysToAdd = 0, format = 'YYYY-MM-DD') => {
    const date = moment().add(daysToAdd, 'days').format(format);
     
    return date;
}

export default getDate;