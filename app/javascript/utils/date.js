import moment from 'moment';

export const calculatePeriod = (date) => {
  let difference = '';
  const a = moment();
  const b = moment(date);

  const dayDifference = a.diff(b, 'days')
  const hourDifference = a.diff(b, 'hours')
  const minutesDifference = a.diff(b, 'minutes')
  const secondDifference = a.diff(b, 'seconds')

  if (dayDifference) {
    difference = `${dayDifference} days ago`
  } else if (hourDifference) {
    difference = `${hourDifference} hours ago`
  } else if (minutesDifference) {
    difference = `${minutesDifference} mins ago`
  } else {
    difference = `${secondDifference} secs ago`
  }
  return difference
}
