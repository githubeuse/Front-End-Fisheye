//Template des cards pour chaque photographe sur la page index.html

export function cardOfEachPhotographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );

        //Ajout d'un lien sur chaque card pointant vers l'url  + id du photographe
        const link = document.createElement('a');
        link.setAttribute('href', 'photographer.html?id='+ id);
        link.setAttribute('title', 'Lien vers la fiche de ' + name);
        article.appendChild(link);

        //Ajout de l'image à la card 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + name);
        link.appendChild(img);
        
        //Ajout du nom à la card
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("focusable", true);
        link.appendChild(h2);
        
        //Ajout de la ville à la card
        const spanCity = document.createElement ( 'span' );
        spanCity.textContent = city;
        article.appendChild(spanCity);


        //Ajout du pays à la card
        const spanCountry = document.createElement ( 'span' );
        spanCountry.textContent = country;
        article.appendChild(spanCountry); 


        //Ajout de l'accroche à la card
        const spanTagline = document.createElement ( 'span' );
        spanTagline.textContent = tagline;
        article.appendChild(spanTagline);


        //Ajout du prix à la card 
        const spanPrice = document.createElement ( 'span' );
        spanPrice.textContent = price +"€/jour";
        article.appendChild(spanPrice);


        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM };
}
