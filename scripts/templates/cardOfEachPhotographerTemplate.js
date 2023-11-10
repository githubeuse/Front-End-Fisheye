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
        article.appendChild(link);

        //Ajout de l'image à la card 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + photographe.name);
        link.appendChild(img);
        
        //Ajout du nom à la card
        const h2 = document.createElement( 'h2' );
        h2.textContent = photographe.name;
        h2.setAttribute("focusable", true);
        link.appendChild(h2);
        
        //Ajout de la ville à la card
        const spanCity = document.createElement ( 'span' );
        spanCity.textContent = photographe._city;
        article.appendChild(spanCity);


        //Ajout du pays à la card
        const spanCountry = document.createElement ( 'span' );
        spanCountry.textContent = photographe.country;
        article.appendChild(spanCountry); 


        //Ajout de l'accroche à la card
        const spanTagline = document.createElement ( 'span' );
        spanTagline.textContent = photographe.tagline;
        article.appendChild(spanTagline);


        //Ajout du prix à la card 
        const spanPrice = document.createElement ( 'span' );
        spanPrice.textContent = photographe.price +"€/jour";
        article.appendChild(spanPrice);


        return (article);
    }
    return { getUserCardDOM };
}
