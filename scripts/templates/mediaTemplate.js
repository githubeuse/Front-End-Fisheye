// Template

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
                photographerImage.style.cursor ="pointer";

                photographerImage.addEventListener("click", () => {
                    const carouselContainer = document.querySelector(".carousel-container");
                    carouselContainer.style.display = "flex";
                    /*carouselContainer.style.position = "fixed";
                    carouselContainer.style.top = "0px";
                    carouselContainer.style.left = "0px";*/
                    carouselContainer.setAttribute("aria-hidden", "false");

                    const carousel = document.querySelector(".carousel");
                    carousel.style.margin = "auto";

                    const carouselHeader = document.querySelector(".carousel-header");
                    carouselHeader.style.display= "flex";
                    carouselHeader.style.justifyContent="end";
                    carouselHeader.innerHTML="";

                    const crossInCarouselHeader = document.createElement("i");
                    crossInCarouselHeader.setAttribute("class", "fa-solid fa-xmark");
                    crossInCarouselHeader.setAttribute("id", "crossInCarouselHeader");
                    carouselHeader.appendChild(crossInCarouselHeader);
                    crossInCarouselHeader.addEventListener("click", closeCarousel);


                    const carouselImageContainer= document.querySelector(".carousel-image-container");
                    carouselImageContainer.innerHTML = "";

                    const imageInCarousel = document.createElement("img");
                    imageInCarousel.setAttribute("src", photographerMedias);
                    imageInCarousel.setAttribute("class", "imageInCarousel");
                    carouselImageContainer.appendChild(imageInCarousel);

                    const titleInCarousel = document.createElement("span");
                    titleInCarousel.setAttribute("class", "titleInCarousel");
                    titleInCarousel.textContent = title;
                    carouselImageContainer.appendChild(titleInCarousel);
                    


                    const photographerBody = document.querySelector("#photographerBody");
                    photographerBody.setAttribute("aria-hidden", "true");
                    photographerBody.style.overflow = "hidden";


                    //                showCarousel(photographerMedias);
                });
                article.appendChild(photographerImage);
            } else if (video) {
                const photographerVideo = document.createElement('video');
                photographerVideo.setAttribute("src", photographerMedias);
                photographerVideo.setAttribute("class", "photographer-video");
                photographerVideo.setAttribute("controls", "true");
                article.appendChild(photographerVideo);
            }
        }
        imgOrVideo(photographerMedias);






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

        const rightContainer = document.createElement('div');
        rightContainer.setAttribute("class", "rightContainer");
        bottomLine.appendChild(rightContainer);

        const numberOfLikes = document.createElement('span');
        numberOfLikes.setAttribute("class", "number-of-likes");
        numberOfLikes.innerText = likes;
        rightContainer.appendChild(numberOfLikes);

        const heartIcon = document.createElement('i');
        heartIcon.setAttribute("class", "fa-solid fa-heart");
        rightContainer.appendChild(heartIcon);

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