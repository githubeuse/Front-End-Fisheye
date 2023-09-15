function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.top = "5vh" ;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
