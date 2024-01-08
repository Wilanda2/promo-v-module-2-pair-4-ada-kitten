'use strict';

//VARIABLES:

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
const inputRace = document.querySelector('.js-input-race');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');



// const valueRace = inputRace.value;
const btnCancel = document.querySelector('.button-cancel');
const formSection = document.querySelector('.js-new-form');
const searchDesc = document.querySelector ('.js_in_search_desc');
const btnPlus = document.querySelector('.js-btnPlus');


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



 //FUNCIONES:

 function showNewCatForm() {
  formSection.classList.remove('collapsed');
};

function hideNewCatForm() {
  formSection.classList.add('collapsed');
};

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
};

function handleClickaddNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;


  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = "¡Uy! Parece que has olvidado algo.";

  }
  else {
    catList.innerHTML += `<li>${newKitten}}</li>`;
    
  }
}


// const valueDesc = inputDesc.value;
// const valuePhoto = inputPhoto.value;
// const valueName = inputName.value;
//   inputName.innerHTML = valueName ;
//console.log(inputName.value);

//EVENTOS: 

btnAdd.addEventListener('click', handleClickaddNewKitten);
   
btnCancel.addEventListener('click', () => {
formSection.classList.add('collapsed');
});

btnPlus.addEventListener('click', handleClickNewCatForm);




//¿Hemos de añadir los value a los elementos HTML para poder completar arriba la condición en caso de no cumplimentarse los campos?


const searchDesc_text = searchDesc.value;

catList.innerHTML = '';

if( kittenOneDescription .includes(searchDesc_text) ) {
 catList.innerHTML += kittenOne;
//  console.log('Mostrar resultados gato 1:', kittenOneDescription);
  };
  
  if( kittenTwoDescription .includes(searchDesc_text) ) {
    catList.innerHTML += kittenTwo;
    // console.log('Mostrar resultados gato 2:', kittenTwoDescription);
  };
  
  if( kittenThreeDescription .includes(searchDesc_text) ) {
    catList.innerHTML += kittenThree;
    // console.log('Mostrar resultados gato 3:', kittenThreeDescription);
  };

 

 




//PRIMER INTENTO ARROW:   const showNewCatForm = () => {
//     formSection.classList.remove('collapsed');
//   } ;

//   btnPlus.addEventListener('click', showNewCatForm);
  
//  const hideNewCatForm = () => {
//   formSection.classList.add('collapsed');
//  } ;
//  btnPlus.addEventListener('click', hideNewCatForm);
  