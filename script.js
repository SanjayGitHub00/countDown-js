const newYear = '1 jan 2023';

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const countDown = function () {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    // Total Seconds
    const seconds = (newYearDate - currentDate) / 1000;
    // Total hours
    const hours = Math.trunc(seconds / 3600);
    // Total Days
    const days = Math.trunc(hours / 24);
    // Remaining hour
    const hour = Math.trunc(hours % 24);
    // remaining minutes
    const minute = Math.trunc((seconds % 3600) / 60);
    // Remaining Seconds
    const sec = Math.trunc((seconds % 3600) % 60);
    // const hours = Math.trunc(seconds / 3600 % 24)
    // console.log(days,day,minutes,sec)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = String(hour).padStart(2, '0');
    minutesEl.innerHTML = String(minute).padStart(2, '0');
    secondsEl.innerHTML = String(sec).padStart(2, '0');
}
setInterval(countDown, 1000);