function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display ="flex";
    modal.style.position= "fixed";
    modal.style.width = "100%";
    modal.style.top = "50px";
    modal.style.left = "0px";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
