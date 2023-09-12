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


//récupère les datas photographers du ficher json
async function getPhotographerDatas(id) {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    //Filtre les photographes en fonction de l'id
    const photographer = photographers.find(photographer => photographer.id === parseInt(id));
    console.log(`photographer = ` + photographer);
    // 3/ retourne la response au format json
    return photographer;

}
//affiche les informations
async function displayPhotographerDatas(photographer) {
    const photographersSection = document.querySelector(".photograph-header");

    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}

//récupère les datas media du fichier json
async function getPhotographerMedias(id) {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    const medias = data.media;

    //medias.forEach((media) => {
    //    medias.find(media => media.photographerId === parseInt(id));
    //});

    const media = medias.filter(item => item.photographerId === parseInt(id));

    return media;

    //console.log(media.photographerId);

}



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

//récupère les datas du prix
async function getPhotographerPrice(id) {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    const photographers = data.photographers;
    const photographerPrice = photographers.find(item => item.price === parseInt(id));
    console.log("price", photographerPrice);
    return photographerPrice;
}



//affiche les datas du prix
async function displayPhotographerPrice(photographerPrice) {
    const bottomBar = document.querySelector(".bottom-bar");

    const priceModel = photographerPriceTemplate(photographerPrice);
    const priceCardDom = priceModel();
    bottomBar.appendChild(priceCardDom);
}


async function init() {
    // Récupère les datas du photographe
    const photographer = await getPhotographerDatas(id);
    displayPhotographerDatas(photographer);
}
init();

async function init2() {
    const media = await getPhotographerMedias(id);
    displayPhotographerMedias(media);
}
init2();

async function init3() {
    const price = await getPhotographerPrice(id);
    displayPhotographerPrice(price);
}
init3();
