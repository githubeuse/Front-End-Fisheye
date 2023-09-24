function photographerTemplate(data) {
    const {
        name,
        portrait,
        city,
        country,
        tagline,
        price,
        id
    } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        //container avec tous les éléments de présentation du photographe
        const article = document.createElement('article');
        article.setAttribute("class", "photographer_presentation");

        //div 1
        const div1 = document.createElement('div');
        article.appendChild(div1);

        //div 2
        const div2 = document.createElement('div');
        article.appendChild(div2);

        //div 3
        const div3 = document.createElement('div');
        article.appendChild(div3);


        //titre h1
        const h1 = document.createElement('h1');
        h1.textContent = name;
        h1.setAttribute("focusable", true);
        h1.setAttribute("class", "nameOfPhotographer");
        div1.appendChild(h1);

        //ville
        const spanCity = document.createElement('span');
        spanCity.textContent = city + ", ";
        spanCity.setAttribute("class", "cityOfPhotographer");
        div1.appendChild(spanCity);

        //pays
        const spanCountry = document.createElement('span');
        spanCountry.textContent = country;
        spanCountry.setAttribute("class", "countryOfPhotographer");
        div1.appendChild(spanCountry);

        //phrase inspirante
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        div1.appendChild(pTagline);

        //me contacter
        const contactButton = document.querySelector(".contact_button");
        //contactButton.style.display = "block";
        div2.appendChild(contactButton);

        //prix
        //const spanPrice = document.createElement ( 'span' );
        //spanPrice.textContent = price +"€/jour";

        //image
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("class", "profile_picture");
        div3.appendChild(img);

        // ajout du prix dans la bottom  bar
        const rightBottomBar = document.querySelector("#rightBottomBar");
        rightBottomBar.innerText = price + "€ / jour ";

        // ajout du nom dans la modale
        const h1InModalWindow = document.querySelector('.h1InModalWindow');

        const nameInModalWindow = document.createElement('h2');
        nameInModalWindow.innerText = name;
        nameInModalWindow.setAttribute("class", "nameInModalWindow");
        h1InModalWindow.appendChild(nameInModalWindow);
        
        return (article);
    }
    return {
        name,
        picture,
        city,
        country,
        tagline,
        price,
        id,
        getUserCardDOM
    };
}



const parentStatic = document.querySelector(".realisations");
parentStatic.addEventListener("click", function (event) {
    // Vérifiez si l'élément cliqué a la classe .photographer-image
    if (event.target.classList.contains("photographer-image")) {
        showCarousel();
    }
});

function showCarousel() {
    console.log("hello");
    /*const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.display = "flex";
    carouselContainer.style.position = "fixed";
    carouselContainer.style.top= "0px";
    carouselContainer.style.left= "0px";
    carouselContainer.setAttribute("aria-hidden", "false");

    const carousel = document.querySelector(".carousel");
    carousel.style.margin ="auto";
    

    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.setAttribute("aria-hidden", "true");
    photographerBody.style.overflow = "hidden";*/
}

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
})


