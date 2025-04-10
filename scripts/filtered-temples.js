
let d = new Date();
document.getElementById("currentYear").innerHTML = '&copy;${d.getFullYear()}';
document.querySelector('#lastModified').textContent = 'Last Modification: ${docuemnt.lastModified}';

const hambutton = document.querySelector('#hambutton');
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

    },
    {
      templeName: "Fort Lauderdale Florida",
      location: "Fort Lauderdale, Florida, United States",
      dedicated: "2014, May, 2",
      area: 30500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/2018/800x500/02-Fort-Lauderdale-Temple-1499446.jpg"
    },
    {
      templeName: "Orlando Florida",
      location: "Orlando, Florida",
      dedicated: "1994, October, 9",
      area: 70000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/800x500/orlando-temple-lds-818549-wallpaper.jpg.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 19184,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/800x500/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    }
    ];


// function displayTemples(temples) {
//   const templeCardDiv= document.getElementById("temple-cards");

//   temples.forEach(temple => {
//     const templeDiv = document.createElement('div');
//     templeDiv.classList.add('temple-card');
//     templeDiv.innerHTML = `
//       <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
//       <div>
//         <h3>${temple.templeName}</h3>
//         <p><strong>Location: </span>${temple.location}</p>
//         <p><strong>Dedicated: </span>${temple.dedicated}</p>
//         <p><strong>Size: </span>${temple.area} sq ft</p>
//       </div>
//       `;
//     templeCardDiv.appendChild(templeDiv);
//   });
//   }
//   window.onload = displayTemples;
createTempleCard();

function createTempleCard(temples) {
  document.querySelector(".temple-cards").innerHTML ="";
  temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temple-cards").appendChild(card);

    displaycreateTempleCard(temples);

  });
}
