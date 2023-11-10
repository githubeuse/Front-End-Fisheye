//Page index.html
import {
    cardOfEachPhotographerTemplate
} from "../templates/cardOfEachPhotographerTemplate.js";

// Fonctionnalité pour afficher les datas de chaque photographe sur la page index.html

// Va chercher les datas des photographers
async function getPhotographers() {
    const response = await fetch('data/photographers.json');
    const photographers = await response.json();
    return photographers;
}

// Affiche les datas des photographers
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    // Pour chaque photographe => création d'une card
    photographers.forEach((photographer) => {
        const photographerModel = cardOfEachPhotographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

// Affichage des datas en fonction des datas récupérées
async function init() {
    const {
        photographers
    } = await getPhotographers();
    displayData(photographers);
}

// initiatilisation de la fonctionnalité
init();