// Template

function mediaTemplate(data) {

    const { id, photographerId, title, image, video, likes, date, price } = data;

    const photographerMedias = image ? `assets/images/${image}` : `assets/images/${video}`;

    function getMediaCardDOM(){
        
        const article = document.createElement ( 'article' );
        article.setAttribute('class', 'article-media');


        function imgOrVideo (photographerMedias) {
            if(image) {
            const photographerImage = document.createElement ('img');
            photographerImage.setAttribute("src", photographerMedias);
            photographerImage.setAttribute("class", "photographer-image");
            photographerImage.setAttribute("alt", title);
            photographerImage.setAttribute("alt", "Image de " + title);
            article.appendChild(photographerImage);
            } else if (video) {
            const photographerVideo = document.createElement ('video');
            photographerVideo.setAttribute("src", photographerMedias);
            photographerVideo.setAttribute("class", "photographer-video");
            photographerVideo.setAttribute("controls", "true");
            article.appendChild(photographerVideo);
            }
        } 
        imgOrVideo(photographerMedias);


        const bottomLine = document.createElement( 'div' );
        bottomLine.setAttribute('class', 'bottom-line');
        article.appendChild(bottomLine);

        const leftContainer = document.createElement ('div');
        leftContainer.setAttribute('class', "leftContainer");
        bottomLine.appendChild(leftContainer);

        const imageTitle = document.createElement ( 'p' );
        imageTitle.textContent = title;
        imageTitle.setAttribute("focusable", false);
        leftContainer.appendChild(imageTitle);

        const rightContainer = document.createElement ('div');
        rightContainer.setAttribute("class", "rightContainer");
        bottomLine.appendChild(rightContainer);

        const numberOfLikes = document.createElement ('span');
        numberOfLikes.setAttribute("class", "number-of-likes");
        numberOfLikes.innerText = likes;
        rightContainer.appendChild(numberOfLikes);
    
        const heartIcon = document.createElement ('i');
        heartIcon.setAttribute("class", "fa-solid fa-heart");
        rightContainer.appendChild(heartIcon);

        return article;
    }
    return  { id, photographerId, title, image, video, likes, date, price, photographerMedias, getMediaCardDOM } ;
}