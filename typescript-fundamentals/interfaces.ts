interface Movie {
    title: string;
    director: string;
    yearReleased: number;
    streaming: boolean;
    length?: number;
    logReview?: ReviewLogger;
  }
  
  interface ReviewLogger {
    (review: string): void;
  }
  
  interface Person {
    name: string;
    email: string;
  }
  
  interface Director extends Person {
    numberOfMovies: number;
  }
  
  interface Actor extends Person {
    role: string;
    rehearse: (sceneNumber: void) => void;
  }

  export interface FavoriteItem {
    title: string;
  }

  export {  Movie, ReviewLogger as Logger, Person, Director, Actor}