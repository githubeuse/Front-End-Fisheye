//Template du header de photographe sur chaque page personnelle

function photographerHeaderTemplate(data, medias) {
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
        console.log(medias);
        const article = document.createElement('article');
        article.setAttribute("class", "photographer_presentation");

        const div1 = document.createElement('div');
        article.appendChild(div1);

        const div2 = document.createElement('div');
        article.appendChild(div2);

        const div3 = document.createElement('div');
        article.appendChild(div3);

        const h1 = document.createElement('h1');
        h1.textContent = name;
        h1.setAttribute("focusable", true);
        h1.setAttribute("class", "nameOfPhotographer");
        div1.appendChild(h1);

        const spanCity = document.createElement('span');
        spanCity.textContent = city + ", ";
        spanCity.setAttribute("class", "cityOfPhotographer");
        div1.appendChild(spanCity);

        const spanCountry = document.createElement('span');
        spanCountry.textContent = country;
        spanCountry.setAttribute("class", "countryOfPhotographer");
        div1.appendChild(spanCountry);

        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        div1.appendChild(pTagline);

        const contactButton = document.querySelector(".contact_button");
        //contactButton.style.display = "block";
        div2.appendChild(contactButton);

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("class", "profile_picture");
        div3.appendChild(img);

        const rightBottomBar = document.querySelector("#rightBottomBar");
        rightBottomBar.innerText = price + "€ / jour ";

        const h1InModalWindow = document.querySelector('.h1InModalWindow');

        const nameInModalWindow = document.createElement('h2');
        nameInModalWindow.innerText = name;
        nameInModalWindow.setAttribute("class", "nameInModalWindow");
        h1InModalWindow.appendChild(nameInModalWindow);
        
        let totalLikes = 0;
        medias.forEach(media => {
            totalLikes += media.likes;
        });

        const totalOfLikes = document.querySelector("#totalOfLikes");
        totalOfLikes.innerText = totalLikes;

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


