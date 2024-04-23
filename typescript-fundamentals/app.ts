import { Actor, Director, Movie, Logger } from "./interfaces";
import { Performer, Documentary } from "./classes";
import * as Utility from "./functions";

//let allMovies: Movie[] = Utility.GetAllMovies();

// console.log("Getting movies by director...");
// Utility.logSearchResults("George Lucas")
//   .catch((error)=>console.log(error));  
// console.log("Search submitted...");


let inventory: Array<Movie> = Utility.GetAllMovies();
let purgedMovies:Array<Movie> = Utility.Purge<Movie>(inventory);

purgedMovies.forEach((movie:Movie)=>{ console.log(movie.title)});

let purgedNums:Array<Number> = Utility.Purge<Number>([1,2,3,4,5]);
console.log(purgedNums);


 