"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = exports.Documentary = exports.Performer = void 0;
class Performer {
    constructor() {
        this.name = '';
        this.email = '';
        this.role = '';
    }
    rehearse(sceneNumber) {
        console.log("Rehearsing scene...");
    }
}
exports.Performer = Performer;
class Video {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(value) {
        this._producer = value;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = '';
        console.log("Video class constructor");
    }
    printItem() {
        console.log(`Title: ${this.title} released in ${this.year}`);
        console.log(`Medium: ${Video.medium}`);
    }
}
Video.medium = 'Audio-Visual';
class Documentary extends Video {
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear);
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject} ${this.year}`);
    }
    printCredits() {
        console.log(`Credits: ${this.title} ${this.year}`);
    }
}
exports.Documentary = Documentary;
class Favorites {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
}
exports.Favorites = Favorites;
let Musical = class extends Video {
    printCredits() {
        console.log(`Musical Credits: ${this.producer}`);
    }
};
let vid = new Documentary('The Last Dance', 2020, 'Basketball');
vid.title = 'The Last Dance';
vid.printCredits();
