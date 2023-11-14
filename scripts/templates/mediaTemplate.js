// Template des cards de medias, sur la page personnelle de chaque photographe
import {
    Media
} from "../factories/MediaFactory.js";

import {
    closeCarousel
} from "../pages/photographerPage.js";



export function mediaTemplate(data) {

    const singleMedia = new Media(data);

    const photographerMedias = singleMedia.image ? `assets/images/${singleMedia.image}` : `assets/images/${singleMedia.video}`;

    function getMediaCardDOM() {

        const article = document.createElement('article');
        article.setAttribute('class', 'article-media');

        const link = document.createElement("a");
        

        // Fonctionnalité d'affichage en fonction de vidéo ou image
        function imgOrVideo(photographerMedias) {
            //Si image
            if (singleMedia.image) {
                const photographerImage = document.createElement('img');
                photographerImage.setAttribute("src", photographerMedias);
                photographerImage.setAttribute("class", "photographer-image");
                photographerImage.setAttribute("alt", "Image de " + singleMedia.title);
                photographerImage.setAttribute("tabindex", "0");
                photographerImage.style.cursor = "pointer";
                photographerImage.setAttribute("aria-label", singleMedia.title);
                link.appendChild(photographerImage);

                // lors du clic souris sur l'image
                photographerImage.addEventListener("click", () => {
                    openLightBox(data);
                });

                // lors de la touche entrée sur l'image (navigation clavier)
                photographerImage.addEventListener("keyup", (event) => {
                    if (event.key === "Enter") {
                        openLightBox(data);
                    }
                });

                //si vidéo
            } else if (singleMedia.video) { 
                const photographerVideo = document.createElement('video');
                photographerVideo.setAttribute("src", photographerMedias);
                photographerVideo.setAttribute("class", "photographer-video");
                photographerVideo.setAttribute("controls", "true");
                photographerVideo.setAttribute("aria-label", singleMedia.title);
                photographerVideo.style.cursor = "pointer";
                link.appendChild(photographerVideo);

                // lors du clic souris sur la vidéo
                photographerVideo.addEventListener("click", () => {
                    openLightBox(data);
                });

                // lors de la touche entrée sur la vidéo (navigation clavier)
                photographerVideo.addEventListener("keyup", (event) => {
                    if (event.key === "Enter") {
                        openLightBox(data);
                    }
                });
            }
        }
        article.appendChild(link);

        imgOrVideo(photographerMedias);




        // Ligne basse de la card : avec le titre, l'icone coeur et le nombre de likes par image
        const bottomLine = document.createElement('div');
        bottomLine.setAttribute('class', 'bottom-line');
        article.appendChild(bottomLine);

        // Dans ligne basse : container de gauche : avec le titre
        const leftContainer = document.createElement('div');
        leftContainer.setAttribute('class', "leftContainer");
        bottomLine.appendChild(leftContainer);
        const imageTitle = document.createElement('p');
        imageTitle.textContent = singleMedia.title;
        imageTitle.setAttribute("focusable", false);
        leftContainer.appendChild(imageTitle);

        // Dans ligne basse : container milieu avec l'icone coeur
        const middleContainer = document.createElement('div');
        middleContainer.setAttribute("class", "middle-container-mediaCard");
        bottomLine.appendChild(middleContainer);
        let LikesForEachMedia = document.createElement('span');
        LikesForEachMedia.innerText = singleMedia.likes;
        middleContainer.appendChild(LikesForEachMedia);

        //Dans ligne basse : container droite avec le nombre de likes
        const rightContainer = document.createElement('div');
        bottomLine.appendChild(rightContainer);
        const heartNextToTitle = document.createElement('i');
        heartNextToTitle.setAttribute("class", "fa-regular fa-heart heartNextToTitle");
        heartNextToTitle.style.cursor = "pointer";
        heartNextToTitle.setAttribute("aria-label", "likes");
        heartNextToTitle.setAttribute("tabindex", "0");
        middleContainer.appendChild(heartNextToTitle);

        // incrémentation du nombre de likes 
        function incrementeLesLikes() {
            if (!heartNextToTitle.disabled) {
                // Dans ligne basse card : Incrémentation du nombre de likes en dessous de chaque média
                LikesForEachMedia.innerText = singleMedia.likes + 1;
                heartNextToTitle.setAttribute("class", "fa-solid fa-heart heartNextToTitle");

                // Dans bottom bar de la page photographer.html : Incrémentation du nombre total de likes
                const totalOfLikes = document.querySelector("#totalOfLikes");
                // On fait passer le contenu du texte de totalOfLikes qui est disponible dans le DOM en tant qu'entier, et on lui ajoute +1
                const newTotal = parseInt(totalOfLikes.textContent) + 1;
                // On met à jour le contenu de totalOfLikes avec le nouveau total
                totalOfLikes.textContent = newTotal;

                // On passe heartToTitle.disabled à true afin de ne pas pouvoir réitérer le like
                heartNextToTitle.disabled = true;

                // AFFICHAGE DU TOTAL DE NOMBRE DE LIKES DANS LA BOTTOM BAR DE LA PAGE PHOTOGRAPHER.HTML
                //console.log(newTotal);
            }
        }
        //Appel de la fonction incrementeLesLikes lors du clic souris sur l'icone coeur (ligne basse card media)
        heartNextToTitle.addEventListener("click", incrementeLesLikes);

        //Idem que ci dessus, lors navigation clavier
        heartNextToTitle.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                incrementeLesLikes();
            }
        });

        return article;
    }
    //    return { id, photographerId, title, image, video, likes, date, price, photographerMedias, getMediaCardDOM };
    return {
        getMediaCardDOM
    };
}


// Fonctionnalité pour afficher la lightbox
const carouselMediaContainer = document.querySelector(".carousel-media-container");

function openLightBox(med) {
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.display = "flex";

    const carousel = document.querySelector(".carousel");
    carousel.style.margin = "auto";

    const crossInCarouselHeader = document.querySelector("#crossInCarousel");
    crossInCarouselHeader.addEventListener("click", closeCarousel);

    carouselMediaContainer.innerHTML = "";

    const photographerMedias = med.image ? `assets/images/${med.image}` : `assets/images/${med.video}`;

    let mediaElement;
    if (med.image) {
        const imageInCarousel = document.createElement("img");
        mediaElement = imageInCarousel;
        imageInCarousel.setAttribute("src", photographerMedias);
        imageInCarousel.setAttribute("class", "imageInCarousel");
        imageInCarousel.focus();
    } else if (med.video) {
        const videoInCarousel = document.createElement("video");
        mediaElement = videoInCarousel;
        videoInCarousel.setAttribute("src", photographerMedias);
        videoInCarousel.setAttribute("class", "videoInCarousel");
        videoInCarousel.setAttribute("controls", "true");
    }
    carouselMediaContainer.appendChild(mediaElement);

    const titleInCarousel = document.createElement("span");
    titleInCarousel.setAttribute("class", "titleInCarousel");
    titleInCarousel.textContent = med.title;
    carouselMediaContainer.appendChild(titleInCarousel);

    const photographerBody = document.querySelector("#photographerBody");
    photographerBody.setAttribute("aria-hidden", "true");
    photographerBody.style.overflow = "hidden";

    const photographerMain = document.querySelector("#main");
    photographerMain.style.display= "none";
}