// What im trying to print
// It is day of week(tuesday), date, and time of day
// it is the 199th day of the year
// it is 54468 seconds into the day
// It is during Daylight Savings time
// It is not not a leap year

// dayOfYear: [Function: getSetDayOfYear],
// seconds: [Function],
// isDST: [Function: isDaylightSavingTime],
// isLeapYear: [Function: getIsLeapYear],



var moment = require('moment');
const chalk = require('chalk');

var time = moment().format(' LLLL ');
var day =  moment().format('DDDo');
var dst = moment([2017, 7, 24]).isDST();
var leap = moment().format('');
//21 thru 26 gives answer for seconds
var now = moment();
var midnight = moment(now);
midnight.hour(0);
midnight.second(0);
midnight.minute(0);
var totalSec = now.diff(midnight, 'seconds')






console.log('It is ' + chalk.blue(time));
console.log('It is the ' + chalk.magenta(day) + ' day of the year');
console.log('It is ' + chalk.yellow(totalSec) + ' seconds into the day');
console.log('It ' + chalk.green(dst ? 'is' : 'is not') + ' during Daylight savings time');
console.log('It ' + chalk.red(leap ? 'is' : 'is not') + ' not a leap year ');
