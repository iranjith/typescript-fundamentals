"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utility = __importStar(require("./functions"));
//let allMovies: Movie[] = Utility.GetAllMovies();
function getMoviesByDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = Utility.GetTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject("No movies found for the director.");
            }
        }, 2000);
    });
    return p;
}
console.log("Getting movies by director...");
getMoviesByDirector("George Lucas")
    .then((movies) => {
    console.log("Movies found: ", movies);
    return movies.length;
})
    .then((numOfMovies) => {
    console.log(`Number of movies found: ${numOfMovies}`);
})
    .catch((error) => {
    console.log("Error: ", error);
});
console.log("Search submitted...");
