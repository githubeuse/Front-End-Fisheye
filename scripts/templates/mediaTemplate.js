// Template des cards de medias, sur la page personnelle de chaque photographe
import {
    closeCarousel
} from "./scripts/pages/photographerPage.js";

export function mediaTemplate(data) {

    const {
        id,
        photographerId,
        title,
        image,
        video,
        likes,
        date,
        price
    } = data;

    const photographerMedias = image ? `assets/images/${image}` : `assets/images/${video}`;

    function getMediaCardDOM() {

        const article = document.createElement('article');
        article.setAttribute('class', 'article-media');

        const link = document.createElement("a");
        link.setAttribute("aria-label", title);


        function imgOrVideo(photographerMedias) {
            if (image) {
                const photographerImage = document.createElement('img');
                photographerImage.setAttribute("src", photographerMedias);
                photographerImage.setAttribute("class", "photographer-image");
                photographerImage.setAttribute("alt", "Image de " + title);
                photographerImage.setAttribute("tabindex", "0");
                photographerImage.style.cursor = "pointer";
                link.appendChild(photographerImage);
                photographerImage.addEventListener("click", () => {
                    openLightBox(data);             
                });
                photographerImage.addEventListener("keyup", (event) => {
                    if (event.key === "Enter") {
                    openLightBox(data);           
                    }
                });

            } else if (video) {
                const photographerVideo = document.createElement('video');
                photographerVideo.setAttribute("src", photographerMedias);
                photographerVideo.setAttribute("class", "photographer-video");
                photographerVideo.setAttribute("controls", "true");
                photographerVideo.style.cursor = "pointer";
                link.appendChild(photographerVideo);
            }
        }
        imgOrVideo(photographerMedias);

        article.appendChild(link);

        const bottomLine = document.createElement('div');
        bottomLine.setAttribute('class', 'bottom-line');
        article.appendChild(bottomLine);

        const leftContainer = document.createElement('div');
        leftContainer.setAttribute('class', "leftContainer");
        bottomLine.appendChild(leftContainer);

        const imageTitle = document.createElement('p');
        imageTitle.textContent = title;
        imageTitle.setAttribute("focusable", false);
        leftContainer.appendChild(imageTitle);

        const middleContainer = document.createElement('div');
        middleContainer.setAttribute("class", "middle-container-mediaCard");
        bottomLine.appendChild(middleContainer);

        let LikesForEachMedia = document.createElement('span');
        LikesForEachMedia.innerText = likes;
        middleContainer.appendChild(LikesForEachMedia);

        const rightContainer = document.createElement('div');
        bottomLine.appendChild(rightContainer);

        const heartNextToTitle = document.createElement('i');
        heartNextToTitle.setAttribute("class", "fa-regular fa-heart heartNextToTitle");
        heartNextToTitle.style.cursor = "pointer";
        heartNextToTitle.setAttribute("aria-label", "likes");
        heartNextToTitle.setAttribute("tabindex", "0");
        middleContainer.appendChild(heartNextToTitle);
        // incrémentation du nombre de likes 



        /*        heartNextToTitle.addEventListener("click", () => {
                    // si le coeur n'est pas disabled
                    if (!heartNextToTitle.disabled) {
                        // incrémentation du nombre de likes en dessous de chaque média
                        LikesForEachMedia.innerText = likes + 1;
                        heartNextToTitle.setAttribute("class", "fa-solid fa-heart");

                        // on rappelle la constante totalOfLikes ici, car on n'y a pas accès à la base
                        const totalOfLikes = document.querySelector("#totalOfLikes");

                        // on fait passer le contenu du texte de totalOfLikes qui est dispo dans le DOM en integer, et on lui ajoute + 1
                        const newTotal = parseInt(totalOfLikes.textContent) + 1;

                        // on dit que le contenu de totalOfLikes est remplacé par le nouveau total
                        totalOfLikes.textContent = newTotal;

                        //on passe heartToTitle disabled à true
                        heartNextToTitle.disabled = true;

                        console.log(newTotal);
                    }
                });
        */

        function incrementeLesLikes() {
            if (!heartNextToTitle.disabled) {
                // Incrémentation du nombre de likes en dessous de chaque média
                LikesForEachMedia.innerText = likes + 1;
                heartNextToTitle.setAttribute("class", "fa-solid fa-heart heartNextToTitle");

                // On rappelle la constante totalOfLikes ici, car on n'y a pas accès à la base
                const totalOfLikes = document.querySelector("#totalOfLikes");

                // On fait passer le contenu du texte de totalOfLikes qui est disponible dans le DOM en tant qu'entier, et on lui ajoute +1
                const newTotal = parseInt(totalOfLikes.textContent) + 1;

                // On met à jour le contenu de totalOfLikes avec le nouveau total
                totalOfLikes.textContent = newTotal;

                // On passe heartToTitle.disabled à true
                heartNextToTitle.disabled = true;

                console.log(newTotal);
            }
        }

        // Vous pouvez ensuite ajouter les écouteurs d'événements comme vous l'avez mentionné :
        heartNextToTitle.addEventListener("click", incrementeLesLikes);
        heartNextToTitle.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                incrementeLesLikes();
            }
        });




        return article;
    }
    return {
        id,
        photographerId,
        title,
        image,
        video,
        likes,
        date,
        price,
        photographerMedias,
        getMediaCardDOM
    };
}

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

}

