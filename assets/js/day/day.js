import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';

let dayCreator = (wkd, i, f) => {
    const day_un = document.querySelector(`.day_un${f}`);
    const day_deux = document.querySelector(`.day_deux${f}`);
    const day_trois = document.querySelector(`.day_trois${f}`);
    const day_quatre = document.querySelector(`.day_quatre${f}`);
    const day_cinq = document.querySelector(`.day_cinq${f}`);

    day_un.textContent = wkd[i+1];
    day_deux.textContent = wkd[i+2];
    day_trois.textContent = wkd[i+3];
    day_quatre.textContent = wkd[i+4];
    day_cinq.textContent = wkd[i+5];
}

export let dayCalc = (k) => {
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const now = new Date();
    console.log(now)
    const day = dateFns.getDay(now)
    const index = day;
    console.log(index)
    
    const days = weekDay[index]
    console.log(days)
    dayCreator(weekDay, index, k)
}