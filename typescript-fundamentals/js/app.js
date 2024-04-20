"use strict";
let favoriteDirector = {
    name: "Christopher Nolan",
    email: "",
    numberOfMovies: 10,
};
let favoriteActor = {
    email: "",
    name: "Tom Hanks",
    role: "Forrest Gump",
    rehearse: () => {
        console.log("Rehearsing scene...");
    },
};
function GetAllMovies() {
    return [
        {
            title: "A New Hope",
            director: "George Lucas",
            yearReleased: 1977,
            streaming: true,
        },
        {
            title: "The Empire Strikes Back",
            director: "Irvin Kershner",
            yearReleased: 1980,
            streaming: false,
        },
        {
            title: "Return of the Jedi",
            director: "Richard Marquand",
            yearReleased: 1983,
            streaming: true,
        },
        {
            title: "The Phantom Menace",
            director: "George Lucas",
            yearReleased: 1999,
            streaming: false,
        },
        {
            title: "Attack of the Clones",
            director: "George Lucas",
            yearReleased: 2002,
            streaming: true,
        },
        {
            title: "Revenge of the Sith",
            director: "George Lucas",
            yearReleased: 2005,
            streaming: true,
        },
        {
            title: "The Force Awakens",
            director: "J.J. Abrams",
            yearReleased: 2015,
            streaming: false,
        },
        {
            title: "The Last Jedi",
            director: "Rian Johnson",
            yearReleased: 2017,
            streaming: true,
        },
        {
            title: "The Rise of Skywalker",
            director: "J.J. Abrams",
            yearReleased: 2019,
            streaming: true,
        },
    ];
}
function GetReview(title) {
    if (title == "Dune") {
        return "Excellent";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    if (movie.yearReleased) {
        console.log(`Year Released: ${movie.yearReleased}`);
    }
    console.log(`Director: ${movie.director}`);
}
function GetTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
let myMovie = {
    title: "Dune",
    director: "Denis Villeneuve",
    yearReleased: 2021,
    streaming: true,
    length: 155,
    logReview: (review) => {
        console.log(`Review : ${review}`);
    },
};
let printReview = (review) => {
    console.log(`Review : ${review}`);
};
printReview("Excellent!");
// PrintMovieInfo(myMovie);
// if(myMovie.logReview){
//     myMovie.logReview("Excellent!");
// }
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
        console.log(`Subject: ${this.subject}`);
    }
}
let vid = new Documentary('The Last Dance', 2020, 'Basketball');
vid.title = 'The Last Dance';
vid.printItem();
