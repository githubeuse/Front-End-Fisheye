//Pages 
import { cardOfEachPhotographerTemplate } from "scripts/templates/cardOfEachPhotographerTemplate.js";

    async function getPhotographers() {
        const response = await fetch('data/photographers.json');
        const photographers = await response.json();
        return photographers;            
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = cardOfEachPhotographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
