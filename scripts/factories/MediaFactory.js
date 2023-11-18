//FACTORY PATTERN POUR MEDIA
export class MediaFactory {
    constructor(data, openLightBoxFunction) {
        if (data.image) {
            return new ImageMedia(data, openLightBoxFunction);
        } else if (data.video) {
            return new VideoMedia(data, openLightBoxFunction);
        }
    }
}

class ImageMedia {
    constructor(media, openLightBoxFunction) {
        this._id = media.id;
        this._photographerId = media.photographerId;
        this._title = media.title;
        this._image = media.image;
        this._likes = media.likes;
        this._date = media.date;
        this._price = media.price;
        this.openLightBox = openLightBoxFunction;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get image() {
        return this._image;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }
}

class VideoMedia {
    constructor(media, openLightBoxFunction) {
        this._id = media.id;
        this._photographerId = media.photographerId;
        this._title = media.title;
        this._video = media.video;
        this._likes = media.likes;
        this._date = media.date;
        this._price = media.price;
        this.openLightBox = openLightBoxFunction;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get video() {
        return this._video;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }

}