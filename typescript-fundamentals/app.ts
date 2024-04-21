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

async function logSearchResults(director:string) {
  let foundMovies=await getMoviesByDirector(director);
  console.log(foundMovies);
}
console.log("Getting movies by director...");
logSearchResults("George Lucas")
  .catch((error)=>console.log(error));  
console.log("Search submitted...");
 