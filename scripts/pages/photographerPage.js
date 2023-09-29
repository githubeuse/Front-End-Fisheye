//Mettre le code JavaScript lié à la page photographer.html

//Si l'URL de votre page est https://example.com/?nom=Jonathan%20Smith&age=18 vous pouvez extraire les paramètres 'nom' et 'age' en utilisant:
// L'url de ma page est : http://127.0.0.1:5501/photographer.html?id=243


//let params = new URL(document.location).searchParams;
//let name = params.get("nom"); // la chaine de caractère "Jonathan Smith".
//let age = parseInt(params.get("age")); // le nombre 18

//passe le bouton contact en display none
//const contactButton = document.querySelector(".contact_button");
//contactButton.style.display = "none";

function getId() {
    //récupère l'id de la page
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    console.log(`id =` + id);
    return id;
}

//getMediaCardDOM
const id = getId();


//récupère les datas PHOTOGRAPHER du ficher json
async function getPhotographerDatas(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    //Filtre les photographes en fonction de l'id
    const photographer = photographers.find(photographer => photographer.id === parseInt(id));
    console.log(`photographer = ` + photographer.price);
    // 3/ retourne la response au format json
    return photographer;

}
//affiche les informations PHOTOGRAPHER
async function displayPhotographerDatas(photographer) {
    const photographersSection = document.querySelector(".photograph-header");

    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}

//récupère les datas MEDIA du fichier json
async function getPhotographerMedias(id) {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    const medias = data.media;

    //medias.forEach((media) => {
    //    medias.find(media => media.photographerId === parseInt(id));
    //});

    const media = medias.filter(item => item.photographerId === parseInt(id));
    console.log(media);

    return media;

    //console.log(media.photographerId);
}

//affiche les informations MEDIA
async function displayPhotographerMedias(media) {
    const mediasSection = document.querySelector(".realisations");
    console.log("media length : " + media.length);


    media.forEach((med) => {
        const mediaModel = mediaTemplate(med);
        const mediaCardDom = mediaModel.getMediaCardDOM();
        console.log(mediaCardDom);
        mediasSection.appendChild(mediaCardDom);
        console.log("med", med.title);
    })

}




async function init() {
    // Récupère les datas du photographe
    const photographer = await getPhotographerDatas(id);
    displayPhotographerDatas(photographer);
}
init();

async function init2() {
    //récupère les médias et les affiche
    const media = await getPhotographerMedias(id);
    displayPhotographerMedias(media);
}
init2();


//const carouselItems = getPhotographerMedias(id);
//console.log(carouselItems.length);
const previousButton = document.querySelector(".crochetGauche");
const nextButton = document.querySelector(".crochetDroit");
let currentItemPosition = 0;

// Funcs
const goToNextSlide = () => {
    if (currentItemPosition + 1 >= carouselItems.length) {
       const lastItem = carouselItems[currentItemPosition];
       currentItemPosition = 0;
       const currentItem = carouselItems[currentItemPosition];
       setNodeAttributes(lastItem, currentItem);
    } else {
       currentItemPosition += 1;
       const lastItem = carouselItems[currentItemPosition - 1];
       const currentItem = carouselItems[currentItemPosition];
       setNodeAttributes(lastItem, currentItem);
    }
 }
 
 const goToPreviousSlide = () => {
    if (currentItemPosition - 1 >= 0) {
       currentItemPosition -= 1;
       const currentItem = carouselItems[currentItemPosition];
       const lastItem = carouselItems[currentItemPosition + 1];
       setNodeAttributes(lastItem, currentItem);
    } else {
       const lastItem = carouselItems[currentItemPosition];
       currentItemPosition = carouselItems.length - 1;
       const currentItem = carouselItems[currentItemPosition];
       setNodeAttributes(lastItem, currentItem);
    }
 }
 
 const setNodeAttributes = (lastItem, currentItem) => {
    lastItem.style.display = 'none';
    currentItem.style.display = 'block';
    lastItem.setAttribute('aria-hidden', 'true');
    currentItem.setAttribute('aria-hidden', 'false');
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
    if (key === 39) {
       goToNextSlide();
    } else if (key === 37) {
       goToPreviousSlide();
    }
 });



 document.addEventListener('DOMContentLoaded', () => {
    carouselInterval = setInterval(goToNextSlide, 5000);
 });





/*const photographerImages = document.querySelectorAll(".photographer-image");
photographerImages.forEach((image) => {
    image.addEventListener("click", function () {
        console.log("hello");
    });
});*/