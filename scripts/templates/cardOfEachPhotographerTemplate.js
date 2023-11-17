//Template des cards pour chaque photographe sur la page index.html
import { Photographer } from "../factories/PhotographerFactory.js";

export function cardOfEachPhotographerTemplate(data) {
    // Utilisation du Constructor Pattern Photographer
    const photographe = new Photographer(data);

    const picture = `assets/photographers/${photographe.portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );

        //Ajout d'un lien sur chaque card pointant vers l'url  + id du photographe
        const link = document.createElement('a');
        link.setAttribute('href', 'photographer.html?id='+ photographe.id);
        link.setAttribute('title', 'Lien vers la fiche de ' + photographe.name);
        link.setAttribute("focusable", true);
        article.appendChild(link);

        //Ajout de l'image à la card 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        link.appendChild(img);
        
        //Ajout du nom à la card
        const h2 = document.createElement( 'h2' );
        h2.textContent = photographe.name;
        link.appendChild(h2);

        const containerCityAndCountry = document.createElement ('div');
        containerCityAndCountry.setAttribute("class", "containerCityAndCountry");
        article.appendChild(containerCityAndCountry);
        
        //Ajout de la ville à la card
        const spanCity = document.createElement ( 'p' );
        spanCity.textContent = photographe._city;
        containerCityAndCountry.appendChild(spanCity);

        //Ajout du pays à la card
        const spanCountry = document.createElement ( 'p' );
        spanCountry.textContent = ", " + photographe.country;
        containerCityAndCountry.appendChild(spanCountry); 

        //Ajout de l'accroche à la card
        const spanTagline = document.createElement ( 'p' );
        spanTagline.textContent = photographe.tagline;
        article.appendChild(spanTagline);

        //Ajout du prix à la card 
        const spanPrice = document.createElement ( 'p' );
        spanPrice.setAttribute("class", "priceCardOnIndexPage");
        spanPrice.textContent = photographe.price +"€/jour";
        article.appendChild(spanPrice);


        return (article);
    }
    return { getUserCardDOM };
}
