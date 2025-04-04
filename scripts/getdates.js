function lastModified(){
    const lastModified = document.lastModified;
    document.getElementById("lastModif").textContent = lastModified;
}

function calculateWindChill(speed, temp) {
    let windchill = 35.74 + 0.6215 + temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}
