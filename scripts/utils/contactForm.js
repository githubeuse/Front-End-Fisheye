function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
    modal.style.justifyContent= "center";
    modal.style.position = "fixed";
    modal.style.top = "450px" ;

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
