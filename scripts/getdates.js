
let oLastModif = new Date(document.lastModified);
var lastModified = document.lastModified;

console.log("Last modified date: " + lastModified);

calculateWindChill(50, 10);
windchill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(speed, 0.16);
