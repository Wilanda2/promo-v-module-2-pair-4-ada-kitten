'use strict';



let catList = document.querySelector(".js-list");

const kittenOneImg = "https://dev.adalab.es/gato-siames.webp";
const kittenOneTitle = "Anastasio";
const kittenOneRace = "Siamés";
const kittenOneDescription = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenTwoImg = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoTitle = "Fiona";
const kittenTwoRace = "Sphynx";
const kittenTwoDescription = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";



const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenOneImg}
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneTitle}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">${kittenOneDescription}</p>
</article>
</li>`

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenTwoImg}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoTitle}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDescription}</p>
</li>`

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`


catList.innerHTML = `<li>${kittenOne} </li>`;
catList.innerHTML += `<li>${kittenTwo}</li>`;
catList.innerHTML += `<li>${kittenThree}</li>`;