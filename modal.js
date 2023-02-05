function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const validForm = document.querySelector(".validationForm");
const formulaire = document.getElementById("form");
const form = document.querySelector("#loginForm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}
closeBtn[0].addEventListener("click", closeModal);

// Validation Prénom
function validPrenom() {
  let firstText = document.getElementById("firstText");
  let prenomRegExp = new RegExp(/^([A-Z][A-Za-z\é\è\ê\-]{2,})+$/i);
  if (first.value.trim().match(prenomRegExp)) {
    firstText.classList.remove("text-danger");
    firstText.classList.add("text-succes");
    first.classList.remove("border-danger");
    first.classList.add("border-succes");
    firstText.innerHTML = "";
    return true;
  } else {
    firstText.innerHTML = "Veuillez saisir 2 caractère minimum";
    firstText.classList.remove("text-succes");
    firstText.classList.add("text-danger");
    first.classList.remove("border-succes");
    first.classList.add("border-danger");
    return false;
  }
}

// Validation Nom
function validNom() {
  let nomRegExp = new RegExp(/^([A-Z][A-Za-z\é\è\ê\-]{2,})+$/i);
  let lastText = document.getElementById("lastText");
  if (last.value.trim().match(nomRegExp)) {
    lastText.classList.remove("text-danger");
    lastText.classList.add("text-succes");
    last.classList.remove("border-danger");
    last.classList.add("border-succes");
    lastText.innerHTML = "";
    return true;
  } else {
    lastText.innerHTML = "Veuillez saisir 2 caractère minimum";
    lastText.classList.remove("text-succes");
    lastText.classList.add("text-danger");
    last.classList.remove("border-succes");
    last.classList.add("border-danger");
    return false;
  }
}

//Validation Email
function validEmail() {
  let emailText = document.getElementById("emailText");
  let emailRegExp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
  );
  if (email.value.trim().match(emailRegExp)) {
    emailText.classList.remove("text-danger");
    emailText.classList.add("text-succes");
    email.classList.remove("border-danger");
    email.classList.add("border-succes");
    emailText.innerHTML = "";
    return true;
  } else {
    emailText.innerHTML = "Veuillez saisir une adresse mail valide";
    emailText.classList.remove("text-succes");
    emailText.classList.add("text-danger");
    email.classList.remove("border-succes");
    email.classList.add("border-danger");
    return false;
  }
}

//Validation date de naissance
function validNaissance() {
  let birthdateText = document.getElementById("birthdateText");
  if (birthdate.value.trim().length !== 10) {
    birthdateText.innerHTML = "Veuillez entrer une date de naissance valide";
    birthdateText.classList.remove("text-succes");
    birthdateText.classList.add("text-danger");
    birthdate.classList.remove("border-succes");
    birthdate.classList.add("border-danger");
    return false;
  }
  birthdateText.classList.remove("text-danger");
  birthdateText.classList.add("text-succes");
  birthdate.classList.remove("border-danger");
  birthdate.classList.add("border-succes");
  birthdateText.innerHTML = "";
  return true;
}

//Validation tournois
function validTournoi() {
  let quantityText = document.getElementById("quantityText");
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0
  ) {
    quantityText.innerHTML = "Merci d'indiquer le nombre de tournois";
    quantityText.classList.remove("text-succes");
    quantityText.classList.add("text-danger");
    quantity.classList.remove("border-succes");
    quantity.classList.add("border-danger");
    return false;
  }
  quantityText.innerHTML = "";
  quantityText.classList.remove("text-danger");
  quantityText.classList.add("text-succes");
  quantity.classList.remove("border-danger");
  quantity.classList.add("border-succes");
  return true;
}

//Validation ville
function valideVille() {
  let locationText = document.getElementById("locationText");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked === true) {
      locationText.innerHTML = "";
      locationText.classList.remove("text-danger");
      locationText.classList.add("text-succes");
      return true;
    }
    locationText.innerHTML = "Merci de cocher une ville";
    locationText.classList.remove("text-succes");
    locationText.classList.add("text-danger");
  }
}

//Validation conditions
function validCondition() {
  let conditionText = document.getElementById("conditionText");
  if (checkbox1.checked === false) {
    conditionText.innerHTML = "Merci d'accepter les conditions d'utilisations";
    conditionText.classList.remove("text-succes");
    conditionText.classList.add("text-danger");
    return false;
  }
  conditionText.innerHTML = "";
  conditionText.classList.remove("text-danger");
  conditionText.classList.add("text-succes");
  return true;
}

function tousChampsValide() {
  validPrenom();
  validNom();
  validEmail();
  validNaissance();
  validTournoi();
  valideVille();
  validCondition();
}

function formValide() {
  if (
    validPrenom() === true &&
    validNom() === true &&
    validEmail() === true &&
    validNaissance() === true &&
    validTournoi() === true &&
    valideVille() === true &&
    validCondition() === true
  ) {
    return true;
  }
  return false;
}

//----- BTN VALIDATION -----
function openRemerciments() {
  form.style.display = "none";
  validForm.style.display = "flex";
  validMessage.innerHTML = "Merci pour votre inscription";
}
btnValid.addEventListener("click", function () {
  window.location.reload();
});

document.querySelector(".btn-submit").addEventListener("click", (event) => {
  event.preventDefault();
  if (formValide() == true) {
    openRemerciments();
    document.querySelector("form").reset();
  } else {
    tousChampsValide();
  }
});
