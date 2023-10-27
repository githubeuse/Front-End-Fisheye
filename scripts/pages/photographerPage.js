import { photographerTemplate } from "/scripts/templates/photographerTemplate.js";
import { mediaTemplate } from "/scripts/templates/mediaTemplate.js";

function getId() {
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    console.log(`id =` + id);
    return id;
}

const id = getId();

async function getPhotographerDatas(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    const photographer = photographers.find(photographer => photographer.id === parseInt(id));
    console.log(`photographer = ` + photographer.price);
    return photographer;
}


async function displayPhotographerDatas(photographer, media) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerTemplate(photographer, media);
    const userCardDOM = photographerModel.getUserCardDOM();
    console.log(media);
    photographersSection.appendChild(userCardDOM);
}




let mediaData;

async function getPhotographerMedias(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const medias = data.media;
    const media = medias.filter(item => item.photographerId === parseInt(id));
    mediaData = media;
    console.log("mediaData===+>" + mediaData);
    return media;
}



async function displayPhotographerMedias(media) {
    const mediasSection = document.querySelector(".realisations");
    carouselItems = media;
    mediasSection.innerHTML = "";
    media.forEach((med) => {
        const mediaModel = mediaTemplate(med);
        const mediaCardDom = mediaModel.getMediaCardDOM();
        mediaCardDom.addEventListener("click", () => {
            //openLightBox(med);
            currentItemPosition = media.indexOf(med);
        });
        mediasSection.appendChild(mediaCardDom);
    });
}




async function init() {
    const photographer = await getPhotographerDatas(id);
    const media = await getPhotographerMedias(id);
    displayPhotographerMedias(media);
    displayPhotographerDatas(photographer, media);
}

init();




const sortButton = document.querySelector("#tri");

function sorting() {
    const sortButtonValue = sortButton.value;

    switch (sortButtonValue) {
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

    // Maintenant que le tableau a été trié, vous pouvez l'afficher dans la console ou effectuer d'autres opérations avec les données triées.
    console.log("mediaData après tri:", mediaData);
    displayPhotographerMedias(mediaData);
}

sortButton.addEventListener("change", sorting);


let carouselItems = [];

const previousButton = document.querySelector(".crochetGauche");
previousButton.setAttribute("title", "Image précédente");
const nextButton = document.querySelector(".crochetDroit");
nextButton.setAttribute("title", "Image suivante");
let currentItemPosition = 0;

// Funcs
const goToNextSlide = () => {
    if (currentItemPosition + 1 >= carouselItems.length) {
        currentItemPosition = 0;
    } else {
        currentItemPosition += 1;
    }
    let currentItem = carouselItems[currentItemPosition];
    setNodeAttributes(currentItem);
    console.log("carousel items length ====>" + carouselItems.length);
    console.log("current item position ====> " + currentItemPosition);
}

const goToPreviousSlide = () => {
    // si la position actuelle moins 1 correpond à la position 0
    if (currentItemPosition == 0) {
        currentItemPosition = carouselItems.length - 1;
    } else {
        currentItemPosition -= 1;

    }
    let currentItem = carouselItems[currentItemPosition];
    setNodeAttributes(currentItem);
    console.log("carousel items length ====>" + carouselItems.length);
    console.log("current item position ====> " + currentItemPosition);

}


let carouselMediaContainer = document.querySelector(".carousel-media-container");
const setNodeAttributes = (currentItem) => {
    carouselMediaContainer.innerHTML = "";
    if (currentItem.image) {
        const carouselImage = document.createElement('img');
        carouselImage.setAttribute("src", `assets/images/${currentItem.image}`);
        carouselImage.setAttribute("class", "imageInCarousel");
        carouselMediaContainer.appendChild(carouselImage);
        console.log("currentItem ====>" + currentItem.image);

    } else if (currentItem.video) {
        const carouselVideo = document.createElement('video');
        carouselVideo.setAttribute("src", `assets/images/${currentItem.video}`);
        carouselVideo.setAttribute("controls", "true");
        carouselVideo.setAttribute("class", "videoInCarousel");
        carouselMediaContainer.appendChild(carouselVideo);
    }
    const titleInCarousel = document.createElement("span");
    titleInCarousel.setAttribute("class", "titleInCarousel");
    titleInCarousel.textContent = currentItem.title;
    carouselMediaContainer.appendChild(titleInCarousel);
}

// Events
previousButton.addEventListener('click', () => {
    goToPreviousSlide();
});

nextButton.addEventListener('click', () => {
    goToNextSlide();
});

document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (key === 'ArrowRight') {
        goToNextSlide();
    } else if (key === 'ArrowLeft') {
        goToPreviousSlide();
    }
});

export function closeCarousel() {
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.display = "none";
    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.style.overflow = "auto";
}

//Mise en place touche escape pour fermer la modale
document.addEventListener('keydown', function (esc) {
    const key = esc.key;
    const carouselContainer = document.querySelector(".carousel-container");
    if (carouselContainer.getAttribute('aria-hidden') === 'false' && key === 'Escape') {
        closeCarousel();
    }
});