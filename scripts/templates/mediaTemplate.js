// Template des cards de medias, sur la page personnelle de chaque photographe

function mediaTemplate(data) {

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


        function imgOrVideo(photographerMedias) {
            if (image) {
                const photographerImage = document.createElement('img');
                photographerImage.setAttribute("src", photographerMedias);
                photographerImage.setAttribute("class", "photographer-image");
                photographerImage.setAttribute("alt", title);
                photographerImage.setAttribute("alt", "Image de " + title);
                photographerImage.style.cursor = "pointer";
                article.appendChild(photographerImage);

            } else if (video) {
                const photographerVideo = document.createElement('video');
                photographerVideo.setAttribute("src", photographerMedias);
                photographerVideo.setAttribute("class", "photographer-video");
                photographerVideo.setAttribute("controls", "true");
                photographerVideo.style.cursor = "pointer";
                article.appendChild(photographerVideo);

                /*photographerVideo.addEventListener("click", (event) => {
                    /*event.preventDefault();
                    const carouselContainer = document.querySelector(".carousel-container");
                    carouselContainer.style.display = "flex";
                    carouselContainer.setAttribute("aria-hidden", "false");

                    const carousel = document.querySelector(".carousel");
                    carousel.style.margin = "auto";

                    const carouselHeader = document.querySelector(".carousel-header");
                    carouselHeader.style.display = "flex";
                    carouselHeader.style.justifyContent = "end";
                    carouselHeader.innerHTML = "";

                    const crossInCarouselHeader = document.querySelector("#crossInCarousel");
                    crossInCarouselHeader.addEventListener("click", closeCarousel);

                    const carouselVideoContainer = document.querySelector(".carousel-image-container");
                    carouselVideoContainer.innerHTML = "";

                    const videoInCarousel = document.createElement("video");
                    videoInCarousel.setAttribute("src", photographerMedias);
                    videoInCarousel.setAttribute("class", "imageInCarousel");
                    videoInCarousel.setAttribute("controls", "true");
                    carouselVideoContainer.appendChild(videoInCarousel);

                    const titleInCarousel = document.createElement("span");
                    titleInCarousel.setAttribute("class", "titleInCarousel");
                    titleInCarousel.textContent = title;
                    carouselImageContainer.appendChild(titleInCarousel);

                    const photographerBody = document.querySelector("#photographerBody");
                    photographerBody.setAttribute("aria-hidden", "true");
                    photographerBody.style.overflow = "hidden";
                });*/
            }
        }
        imgOrVideo(photographerMedias);

        const bottomLine = document.createElement('div');
        bottomLine.setAttribute('class', 'bottom-line');
        article.appendChild(bottomLine);

        const leftContainer = document.createElement('div');
        leftContainer.setAttribute('class', "leftContainer");
        bottomLine.appendChild(leftContainer);

        const rightContainer = document.createElement('div');
        const heartNextToTitle = document.createElement('i');
        heartNextToTitle.setAttribute("class", "fa-regular fa-heart");
        rightContainer.appendChild(heartNextToTitle);
        bottomLine.appendChild(rightContainer);

        const imageTitle = document.createElement('p');
        imageTitle.textContent = title;
        imageTitle.setAttribute("focusable", false);
        leftContainer.appendChild(imageTitle);

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