function getTime (){
    let now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    if (minutes < 10)
    {
        minutes = minutes + "0";
    }

    if (hours < 10)
    {
        hours = hours + "0";
    }

    return [hours, minutes];
}


function updateClock() {
    time = getTime();

    let h1 = document.querySelector("h1");
    h1.textContent = `${time[0]}:${time[1]}`;
}

updateClock();

setInterval(updateClock, 1000);


