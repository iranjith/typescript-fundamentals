import { Actor, Director, Movie, Logger } from "./interfaces";
import { Performer, Documentary } from "./classes";
import * as Utility from "./functions";

//let allMovies: Movie[] = Utility.GetAllMovies();


function getMoviesByDirector(director:string):Promise<string[]>{
  let p:Promise<string[]> = new Promise((resolve,reject)=>{
    setTimeout(() => {
      let foundMovies:string[] = Utility.GetTitles(director);
      if(foundMovies.length>0){
        resolve(foundMovies);
      }
      else{
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
 