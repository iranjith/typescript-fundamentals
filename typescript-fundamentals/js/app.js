"use strict";
function GetReview(title) {
    if (title == "Dune") {
        return "Excellent";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(title, yearReleased = 2000, ...cast) {
    console.log(`Title: ${title}`);
    if (yearReleased) {
        console.log(`Year Released: ${yearReleased}`);
    }
    console.log(`Cast: ${cast.join(', ')}`);
}
//PrintMovieInfo('Dune',2021, 'Timothy','Zendaya');
const LogMessage = (message) => console.log(message);
LogMessage("Hello World");
