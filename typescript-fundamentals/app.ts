import { Actor, Director, Movie, Logger } from "./interfaces";
import { Performer, Documentary, Favorites } from "./classes";
import * as Utility from "./functions";

//let allMovies: Movie[] = Utility.GetAllMovies();

// console.log("Getting movies by director...");
// Utility.logSearchResults("George Lucas")
//   .catch((error)=>console.log(error));  
// console.log("Search submitted...");

let inventory: Array<Movie> = Utility.GetAllMovies();
// let purgedMovies:Array<Movie> = Utility.Purge<Movie>(inventory);

// purgedMovies.forEach((movie:Movie)=>{ console.log(movie.title)});

// let purgedNums:Array<Number> = Utility.Purge<Number>([1,2,3,4,5]);
// console.log(purgedNums);


let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach((movie:Movie)=>{favoriteMovies.add(movie)});

let firstFav: Movie = favoriteMovies.getFirst();
console.log(firstFav.title);

let docs:Array<Documentary> = [
  new Documentary("The Beatles: Get Back",2021,"Music"),
  new Documentary("The Last Dance",2020,"Sports"),
  new Documentary("The Social Dilemma",2020,"Technology")
];

let favoriteDocs: Favorites<Documentary> = new Favorites<Documentary>();
docs.forEach((doc:Documentary)=>{favoriteDocs.add(doc)});

let firstDoc: Documentary = favoriteDocs.getFirst();
console.log(firstDoc.title);




 