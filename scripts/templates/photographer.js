function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const spanCity = document.createElement ( 'span' );
        spanCity.textContent = city;

        const spanCountry = document.createElement ( 'span' );
        spanCountry.textContent = country;

        const spanTagline = document.createElement ( 'span' );
        spanTagline.textContent = tagline;

        const spanPrice = document.createElement ( 'span' );
        spanPrice.textContent = price ;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(spanCity);
        article.appendChild(spanCountry); 
        article.appendChild(spanTagline);
        article.appendChild(spanPrice);
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM };
}