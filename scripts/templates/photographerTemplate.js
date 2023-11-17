//Template du header de chaque page personnelle de photographe

let totalLikes = 0;

export function photographerTemplate(data, medias) {
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

    // Fonctionnalité pour la Card en entête avec les informations de chaque photographe

    function getUserCardDOM() {
        //AFFICHE LES MEDIAS
        //console.log(medias);
        const article = document.createElement('article');
        article.setAttribute("class", "photographer_presentation");

        //Dans l'entete, container avec nom, prénom, accroche du photographe
        const div1 = document.createElement('div');
        article.appendChild(div1);

        //Nom du photographe
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute("focusable", true);
        h2.setAttribute("tabindex", "0");
        h2.setAttribute("aria-hidden", false);
        h2.setAttribute("class", "nameOfPhotographer");
        div1.appendChild(h2);

        //Ville du photographe
        const spanCity = document.createElement('span');
        spanCity.textContent = city + ", ";
        spanCity.setAttribute("class", "cityOfPhotographer");
        div1.appendChild(spanCity);

        //Pays du photographe
        const spanCountry = document.createElement('span');
        spanCountry.textContent = country;
        spanCountry.setAttribute("class", "countryOfPhotographer");
        div1.appendChild(spanCountry);

        //Accroche du photographe
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        pTagline.setAttribute("class", "pTagline");
        div1.appendChild(pTagline);

        //Dans l'entete, container avec bouton "contactez moi"
        const div2 = document.createElement('div');
        article.appendChild(div2);

        const contactButton = document.querySelector(".contact_button");
        //contactButton.style.display = "block";
        div2.appendChild(contactButton);

        //Dans l'entete, container avec photo du photographe
        const div3 = document.createElement('div');
        article.appendChild(div3);

        //Portrait du photographe
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("class", "profile_picture");
        div3.appendChild(img);

        //Dans la bottombar (à droite, en bas) : tarif du photographe
        const rightBottomBar = document.querySelector("#rightBottomBar");
        rightBottomBar.innerText = price + "€ / jour ";

        //Dans la modale du formulaire => le nom du photographe
        const h1InModalWindow = document.querySelector('.h1InModalWindow');
        const nameInModalWindow = document.createElement('h2');
        nameInModalWindow.innerText = name;
        nameInModalWindow.setAttribute("class", "nameInModalWindow");
        h1InModalWindow.appendChild(nameInModalWindow);

        //Dans la bottombar (à droite, en bas) : mise à jour du nombre de likes total en fonction des like sur chaque image
        medias.forEach(media => {
            totalLikes += media.likes;
        });
        const totalOfLikes = document.querySelector("#totalOfLikes");
        totalOfLikes.innerText = totalLikes;
        //AFFICHAGE DES LIKES TOTAL
        //console.log(totalLikes);

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
        getUserCardDOM,
    };
}