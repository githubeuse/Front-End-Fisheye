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
            photographerImage.setAttribute("class", "photographer-image")
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


 
        const imageTitle = document.createElement ( 'p' );
        imageTitle.textContent = title;
        console.log("title:", title);
        article.appendChild(imageTitle);


        return article;
    }
    return  { id, photographerId, title, image, video, likes, date, price, photographerMedias, getMediaCardDOM } ;
}