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
    const photographerModel = photographerHeaderTemplate(photographer, media);
    const userCardDOM = photographerModel.getUserCardDOM();
    console.log(media);
    photographersSection.appendChild(userCardDOM);
}

async function getPhotographerMedias(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const medias = data.media;
    const media = medias.filter(item => item.photographerId === parseInt(id));
    return media;
}


async function displayPhotographerMedias(media) {
    const mediasSection = document.querySelector(".realisations");
    carouselItems = media;
    media.forEach((med) => {
        const mediaModel = mediaTemplate(med);
        const mediaCardDom = mediaModel.getMediaCardDOM();
        mediaCardDom.addEventListener("click", () => {
            openLightBox(med);
            currentItemPosition = media.indexOf(med);
        });
        mediasSection.appendChild(mediaCardDom);
    });

}
const carouselMediaContainer = document.querySelector(".carousel-media-container");

function openLightBox(med) {
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.display = "flex";
    carouselContainer.setAttribute("aria-hidden", "false");

    const carousel = document.querySelector(".carousel");
    carousel.style.margin = "auto";

    const crossInCarouselHeader = document.querySelector("#crossInCarousel");
    crossInCarouselHeader.addEventListener("click", closeCarousel);

    carouselMediaContainer.innerHTML = "";

    const photographerMedias = med.image ? `assets/images/${med.image}` : `assets/images/${med.video}`;
    
    let mediaElement;
    if (med.image) {
        const imageInCarousel = document.createElement("img");
        mediaElement = imageInCarousel;
        imageInCarousel.setAttribute("src", photographerMedias);
        imageInCarousel.setAttribute("class", "imageInCarousel");

    } else if (med.video) {
        const videoInCarousel = document.createElement("video");
        mediaElement = videoInCarousel;
        videoInCarousel.setAttribute("src", photographerMedias);
        videoInCarousel.setAttribute("class", "videoInCarousel");
        videoInCarousel.setAttribute("controls", "true");
    }
    carouselMediaContainer.appendChild(mediaElement);

    const titleInCarousel = document.createElement("span");
    titleInCarousel.setAttribute("class", "titleInCarousel");
    titleInCarousel.textContent = med.title;
    carouselMediaContainer.appendChild(titleInCarousel);

    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.setAttribute("aria-hidden", "true");
    photographerBody.style.overflow = "hidden";

}


async function init() {
    const photographer = await getPhotographerDatas(id);
    const media = await getPhotographerMedias(id);
    displayPhotographerMedias(media);
    displayPhotographerDatas(photographer, media);

}

init();



let carouselItems = [];

const previousButton = document.querySelector(".crochetGauche");
const nextButton = document.querySelector(".crochetDroit");
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


const setNodeAttributes = (currentItem) => {
    carouselMediaContainer.innerHTML = "";
    if (currentItem.image) {
        const carouselImage = document.createElement('img');
        carouselImage.setAttribute("src", `assets/images/${currentItem.image}`);
        carouselImage.setAttribute("class", "imageInCarousel");
        carouselMediaContainer.appendChild(carouselImage);
        console.log("currentItem ====>" + currentItem.image);

    } else if (currentItem.video){
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

function closeCarousel(){
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.display = "none";
    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.style.overflow= "auto";
}

//Mise en place touche escape pour fermer la modale
document.addEventListener('keydown', function (esc) {
    const key = esc.key;
    const carouselContainer = document.querySelector(".carousel-container");
    if (carouselContainer.getAttribute('aria-hidden') === 'false' && key === 'Escape') {
        closeCarousel();
    }
}); 
