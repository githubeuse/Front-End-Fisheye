//RECUP ET AFFICHAGE DES MEDIAS POUR CHAQUE PHOTOGRAPHE EN FONCTION DE SON ID

import {
    photographerTemplate
} from "../templates/photographerTemplate.js";

import {
    mediaTemplate
} from "../templates/mediaTemplate.js";


// Recupère l'id du photographe
function getId() {
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    //AFFICHAGE ID
    //console.log(`id =` + id);
    return id;
}

// constante globale id et appel de la fonction
const id = getId();

// Va chercher les datas du photographe en fonction de l'id 
async function getPhotographerDatas(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    const photographer = photographers.find(photographer => photographer.id === parseInt(id));
    //AFFICHAGE PRIX PHOTOGRAPHE
    //console.log(`photographer = ` + photographer.price);
    return photographer;
}

// Affiche les datas du photographe
async function displayPhotographerDatas(photographer, media) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerTemplate(photographer, media);
    const userCardDOM = photographerModel.getUserCardDOM();
    //AFFICHAGE TOUS LES MEDIAS
    //console.log(media);
    photographersSection.appendChild(userCardDOM);
}

//constante globale mediaData 
let mediaData;

// Va chercher les datas des medias en fonction de l'id
async function getPhotographerMedias(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const medias = data.media;
    const media = medias.filter(item => item.photographerId === parseInt(id));
    mediaData = media;
    //AFFICHE LES MEDIAS DU PHOTOGRAPHE EN FONCTION DE L'ID
    //console.log("mediaData===+>" + mediaData);
    return media;
}

// Affiche les medias du photographe en fonction de l'id
async function displayPhotographerMedias(media) {
    const mediasSection = document.querySelector(".realisations");
    carouselItems = media;
    mediasSection.innerHTML = "";

    //Pour chaque média,
    //Création d'une card
    //Au clic : initialisation d'une position
    media.forEach((med) => {
        const mediaModel = mediaTemplate(med);
        const mediaCardDom = mediaModel.getMediaCardDOM();
        mediaCardDom.addEventListener("click", () => {
            currentItemPosition = media.indexOf(med);
        });
        mediasSection.appendChild(mediaCardDom);
    });
}



//Fonction qui regroupe les 4 fonctions précédentes
async function init() {
    //Récupère les datas du photographe en fonction de l'id
    const photographer = await getPhotographerDatas(id);
    //Récupère les medias du photographe en fonction de l'id
    const media = await getPhotographerMedias(id);
    //Affiche les medias du photographe
    displayPhotographerMedias(media);
    //Afiche les datas du photographe
    displayPhotographerDatas(photographer, media);
}

// Lancement des 4 fonctions
init();


// Fonctionnalité select/tri de la page photographer.html : popularité, date, ou titre
const sortButton = document.querySelector("#tri");

function sorting() {
    const sortButtonValue = sortButton.value;

    switch (sortButtonValue) {
        //Cas tri par popularité
        case "popularite":
            console.log("p");
            mediaData.sort((a, b) => {
                const likesA = a.likes;
                const likesB = b.likes;
                if (likesA > likesB) {
                    return -1;
                }
                if (likesA < likesB) {
                    return 1;
                }
                return 0;
            });
            break;
        //Cas tri par date    
        case "date":
            console.log("d");
            mediaData.sort((a, b) => {
                const dateA = a.date.toUpperCase();
                const dateB = b.date.toUpperCase();
                if (dateA < dateB) {
                    return -1;
                }
                if (dateA > dateB) {
                    return 1;
                }
                return 0;
            });
            break;
        //Cas tri par titre de photos
        case "titre":
            console.log("titre");
            mediaData.sort((a, b) => {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            });
            break;

    }
    //AFFICHE LES MEDIAS APRES LE TRI
    //console.log("mediaData après tri:", mediaData);

    displayPhotographerMedias(mediaData);
}

sortButton.addEventListener("change", sorting);


// Fonctionnalité navigation carousel de la page photographer.html
let carouselItems = [];
let currentItemPosition = 0;


// Pour aller sur la slide précédente
const previousButton = document.querySelector(".crochetGauche");
previousButton.setAttribute("title", "Image précédente");

const goToPreviousSlide = () => {
    if (currentItemPosition == 0) {
        currentItemPosition = carouselItems.length - 1;
    } else {
        currentItemPosition -= 1;

    }
    let currentItem = carouselItems[currentItemPosition];

    setNodeAttributes(currentItem);
    //AFFICHAGE DU NOMBRE DE ITEMS DANS LE CAROUSEL
    //console.log("carousel items length ====>" + carouselItems.length);
    //AFFICHAGE DE LA POSITION ACTUELLE DE L ELEMENT DANS LE CAROUSEL
    //console.log("current item position ====> " + currentItemPosition);

}

previousButton.addEventListener('click', () => {
    goToPreviousSlide();
});

// Pour aller sur la slide suivante
const nextButton = document.querySelector(".crochetDroit");
nextButton.setAttribute("title", "Image suivante");

const goToNextSlide = () => {
    if (currentItemPosition + 1 >= carouselItems.length) {
        currentItemPosition = 0;
    } else {
        currentItemPosition += 1;
    }
    let currentItem = carouselItems[currentItemPosition];

    setNodeAttributes(currentItem);

    //AFFICHAGE DU NOMBRE DE ITEMS DANS LE CAROUSEL
    //console.log("carousel items length ====>" + carouselItems.length);
    //AFFICHAGE DE LA POSITION ACTUELLE DE L ELEMENT DANS LE CAROUSEL
    //console.log("current item position ====> " + currentItemPosition);
}

nextButton.addEventListener('click', () => {
    goToNextSlide();
});

// Pour fermer la slide
export function closeCarousel() {
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.display = "none";
    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.style.overflow = "auto";

    const photographerMain = document.querySelector("#main");
    photographerMain.style.display= "block";
}

// Navigation au clavier : précédente, suivante, fermer
document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (key === 'ArrowRight') {
        goToNextSlide();
    } else if (key === 'ArrowLeft') {
        goToPreviousSlide();
    } else if (key === 'Escape') {
        closeCarousel();
    }
});



//Fonctionnalité affichage carousel
let carouselMediaContainer = document.querySelector(".carousel-media-container");
const setNodeAttributes = (currentItem) => {
    
    carouselMediaContainer.innerHTML = "";

    //Si format de currentItem est une image
    if (currentItem.image) {
        const carouselImage = document.createElement('img');
        carouselImage.setAttribute("src", `assets/images/${currentItem.image}`);
        carouselImage.setAttribute("class", "imageInCarousel");
        carouselMediaContainer.appendChild(carouselImage);
    
    //Si format de currentItem est vidéo
    } else if (currentItem.video) {
        const carouselVideo = document.createElement('video');
        carouselVideo.setAttribute("src", `assets/images/${currentItem.video}`);
        carouselVideo.setAttribute("controls", "true");
        carouselVideo.setAttribute("class", "videoInCarousel");
        carouselMediaContainer.appendChild(carouselVideo);
    }

    // Ajout du titre
    const titleInCarousel = document.createElement("span");
    titleInCarousel.setAttribute("class", "titleInCarousel");
    titleInCarousel.textContent = currentItem.title;
    carouselMediaContainer.appendChild(titleInCarousel);
}