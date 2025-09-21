function getTime (){
    let now = new Date()
    let minutes = now.getMinutes()
    let hours = now.getHours()

    return [hours, minutes]
}


function updateClock() {
    time = getTime()

    let h1 = document.querySelector("h1")
    h1.textContent = `${time[0]}:${time[1]}`
}

updateClock()

setInterval(updateClock, 1000);


