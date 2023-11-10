//Fonctionnalité pour lancer la modale du formulaire

//Affiche la modale
function launchDisplayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
    modal.style.position = "fixed";
    modal.style.width = "100%";

    modal.style.left = "0px";
    modal.setAttribute("aria-hidden", "false");

    const firstInput = document.querySelector("#prenom");
    firstInput.focus();

}

// Cache le body
function hideMainSection() {
    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.style.overflow = "hidden";

    const mainSection = document.querySelector("#main");
    mainSection.setAttribute("aria-hidden", "true");
}

// Lance les deux fonctionnalités précédentes => affiche la modale, cache le body
function displayModal() {
    launchDisplayModal();
    hideMainSection();
}

// Fonctionnalité pour fermer la modale 
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    const mainSection = document.querySelector("#main");
    mainSection.setAttribute("aria-hidden", "false");
}

let contactButton = document.querySelector(".contact_button");
contactButton.addEventListener("click", displayModal);

// Fermeture de la modale lors du clic de la souris
const crossInModalWindow = document.querySelector(".crossInModalWindow");
crossInModalWindow.addEventListener("click", closeModal);

// Fermeture de la modale lors de la saisie escape par navigation clavier
document.addEventListener('keydown', function (e) {
    const key = e.key;
    const modal = document.getElementById("contact_modal");
    if (modal.getAttribute('aria-hidden') === 'false' && key === 'Escape') {
        closeModal();
    }
})

//Mise en place du console.log des données
const boutonEnvoyer = document.querySelector(".bouton-envoyer");
boutonEnvoyer.addEventListener("click", function (event) {
    event.preventDefault();
    const prenom = document.querySelector("#prenom").value;
    const nom = document.querySelector("#nom").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    console.log("Données entrées par l'utilisateur : Prénom => " + prenom + " |||| Nom => " + nom + " |||| Email => " + email + " |||| Message => " + message);
});