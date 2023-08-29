//Mettre le code JavaScript lié à la page photographer.html

//Si l'URL de votre page est https://example.com/?nom=Jonathan%20Smith&age=18 vous pouvez extraire les paramètres 'nom' et 'age' en utilisant:
// L'url de ma page est : http://127.0.0.1:5501/photographer.html?id=243


//let params = new URL(document.location).searchParams;
//let name = params.get("nom"); // la chaine de caractère "Jonathan Smith".
//let age = parseInt(params.get("age")); // le nombre 18

//passe le bouton contact en display none
const contactButton = document.querySelector(".contact_button");
contactButton.style.display = "none";

function getId() {
    //récupère l'id de la page
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    console.log(`id =` + id);
    return id;
}


//récupère les datas json
async function getPhotographerDatas(id) {
    const response = await fetch('/data/photographers.json');
    const data = await response.json();
    console.log(`data =` + data);

    const photographers = data.photographers;
    console.log(`photographers = ` + photographers);

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



async function init() {
    const id = getId();
    // Récupère les datas du photographe
    const photographer = await getPhotographerDatas(id);
    displayPhotographerDatas(photographer);
    

}
init();












//async function getPhotographerById(id){
//    const photographers = await getPhotographers();
//    const photographer = photographers.find(item => item.id === parseInt(id));
//    console.log (photographer);
//    return photographer;
//}