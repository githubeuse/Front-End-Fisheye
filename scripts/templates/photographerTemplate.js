//Template
function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );

        const link = document.createElement('a');
        link.setAttribute('href', 'photographer.html?id='+ id);
        link.setAttribute('title', 'Lien vers la fiche de ' + name);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + name);
        link.appendChild(img);
        

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("focusable", true);
        link.appendChild(h2);
        
        const spanCity = document.createElement ( 'span' );
        spanCity.textContent = city;

        const spanCountry = document.createElement ( 'span' );
        spanCountry.textContent = country;

        const spanTagline = document.createElement ( 'span' );
        spanTagline.textContent = tagline;

        const spanPrice = document.createElement ( 'span' );
        spanPrice.textContent = price +"€/jour";

        article.appendChild(link);
        article.appendChild(spanCity);
        article.appendChild(spanCountry); 
        article.appendChild(spanTagline);
        article.appendChild(spanPrice);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM };
}
