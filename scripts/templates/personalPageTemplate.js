function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        //container avec tous les éléments de présentation du photographe
        const article = document.createElement( 'article' );
        article.setAttribute("class", "photographer_presentation");

        //div 1
        const div1 = document.createElement( 'div');
        article.appendChild(div1);

        //div 2
        const div2 = document.createElement( 'div');
        article.appendChild(div2);

        //div 3
        const div3 = document.createElement( 'div');
        article.appendChild(div3);


        //titre h1
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        h1.setAttribute("focusable", true);
        div1.appendChild(h1);

        //ville
        const spanCity = document.createElement ( 'span' );
        spanCity.textContent = city + ", ";
        div1.appendChild(spanCity);

        //pays
        const spanCountry = document.createElement ( 'span' );
        spanCountry.textContent = country;
        div1.appendChild(spanCountry);

        //phrase inspirante
        const pTagline = document.createElement ( 'p' );
        pTagline.textContent = tagline;
        div1.appendChild(pTagline);

        //me contacter
        const contactButton = document.querySelector(".contact_button");
        contactButton.style.display = "block";
        div2.appendChild(contactButton);
        
        //prix
        //const spanPrice = document.createElement ( 'span' );
        //spanPrice.textContent = price +"€/jour";

        //image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("class", "profile_picture");
        div3.appendChild(img);

        const bottomBar = document.querySelector("#bottom-bar");
        bottomBar.innerText = price;

        return (article);
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM };
}

