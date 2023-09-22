function displayModal() {
    function launchDisplayModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "flex";
        modal.style.position = "fixed";
        modal.style.width = "100%";

        modal.style.left = "0px";
        modal.setAttribute("aria-hidden", "false");
    }
    launchDisplayModal();

    function hideMainSection() {
        const photographerBody = document.querySelector("#photographerBody");
        photographerBody.style.overflow = "hidden";
        
        const mainSection = document.querySelector("#main");
        mainSection.setAttribute("aria-hidden", "true");
    }    
    hideMainSection();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
            
    const mainSection = document.querySelector("#main");
    mainSection.setAttribute("aria-hidden", "false");
}

//Mise en place touche escape pour fermer la modale
document.addEventListener('keydown', function (e) {
    const key = e.key;
    const modal = document.getElementById("contact_modal");
    if (modal.getAttribute('aria-hidden') === 'false' && key === 'Escape') {
        closeModal();
    }
    
})