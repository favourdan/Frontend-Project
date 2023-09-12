const currentDayOfTheWeekTag = document.getElementById("currentDayOfTheWeek");
const currentUTCTimeTag = document.getElementById("currentUTCTime")

const getDay = (dayInt) => {
    switch(dayInt) {
        case 0 : return "Sunday"
        case 1 : return "Monday"
        case 2 : return "Tuesday"
        case 3 : return "Wednesday"
        case 4 : return "Thursday"
        case 5 : return "Friday"
        case 6 : return "Saturday"
        default: return "Invalid Day"
    }
}

let currentDayOfTheWeek = currentDayOfTheWeekTag.textContent 
currentDayOfTheWeekTag.textContent = currentDayOfTheWeek + getDay(new Date(Date.now()).getDay())


let currentUTCTime = currentUTCTimeTag.textContent 
setInterval(() => {
    currentUTCTimeTag.textContent = currentUTCTime + new Date(Date.now())
}, 1000)