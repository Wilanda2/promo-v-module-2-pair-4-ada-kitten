'use strict';



let catList = document.querySelector(".js-list");

const kittenOneImg = "https://dev.adalab.es/gato-siames.webp";
const kittenOneTitle = "Anastasio".toUpperCase();
const kittenOneRace = "Siamés";
const kittenOneDescription = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenTwoImg = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoTitle = "Fiona";
const kittenTwoRace = "Sphynx";
const kittenTwoDescription = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenThreeImg = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeTitle = "Cielo";
const kittenThreeRace = "Maine Coon";
const kittenThreeDescription = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

const btnAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
// const valueRace = inputRace.value;

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
  src= ${kittenThreeImg}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeTitle}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDescription}</p>
</li>`



catList.innerHTML = `<li>${kittenOne} </li>`;
catList.innerHTML += `<li>${kittenTwo}</li>`;
catList.innerHTML += `<li>${kittenThree}</li>`;

btnAdd.addEventListener('click',()=>{
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = "¡Uy!Parece que has olvidado algo.";
  } else {

    
  }
});

//¿Hemos de añadir los value a los elementos HTML para poder completar arriba la condición en caso de no cumplimentarse los campos?