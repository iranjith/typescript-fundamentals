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

let favoriteDirector: Director = {
  name: "Christopher Nolan",
  email: "",
  numberOfMovies: 10,
};

let favoriteActor: Actor = {
  email: "",
  name: "Tom Hanks",
  role: "Forrest Gump",
  rehearse: () => {
    console.log("Rehearsing scene...");
  },
};

function GetAllMovies(): Movie[] {
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

function GetReview(title: string): string | number {
  if (title == "Dune") {
    return "Excellent";
  } else {
    return Math.floor(Math.random() * 10);
  }
}

function PrintMovieInfo(movie: Movie) {
  console.log(`Title: ${movie.title}`);

  if (movie.yearReleased) {
    console.log(`Year Released: ${movie.yearReleased}`);
  }
  console.log(`Director: ${movie.director}`);
}

function GetTitles(director: string): string[];
function GetTitles(director: string, streaming: boolean): string[];
function GetTitles(director: string, streaming?: boolean): string[] {
  const allMovies = GetAllMovies();
  const searchResults: string[] = [];

  if (streaming !== undefined) {
    for (let movie of allMovies) {
      if (movie.director === director && movie.streaming === streaming) {
        searchResults.push(movie.title);
      }
    }
  } else {
    for (let movie of allMovies) {
      if (movie.director === director) {
        searchResults.push(movie.title);
      }
    }
  }
  return searchResults;
}

let myMovie: Movie = {
  title: "Dune",
  director: "Denis Villeneuve",
  yearReleased: 2021,
  streaming: true,
  length: 155,
  logReview: (review: string) => {
    console.log(`Review : ${review}`);
  },
};

let printReview: ReviewLogger = (review: string) => {
  console.log(`Review : ${review}`);
};
printReview("Excellent!");

// PrintMovieInfo(myMovie);

// if(myMovie.logReview){
//     myMovie.logReview("Excellent!");
// }

abstract class Video {

  private _producer: string = ''; 
  static medium:string = 'Audio-Visual';

  get producer(): string {
    return this._producer.toUpperCase();
  }

  set producer(value: string) {
    this._producer = value;
  }

  constructor(public title: string, protected year: number) {
    console.log("Video class constructor");
  }

  printItem(): void {
    console.log(`Title: ${this.title} released in ${this.year}`);
    console.log(`Medium: ${Video.medium}`);
  }

  abstract printCredits(): void;
}

class Documentary extends Video {
  constructor(newTitle:string,newYear:number, public subject:string){
    super(newTitle,newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Subject: ${this.subject} ${this.year}`);
  }
 
  printCredits(): void {
    console.log(`Credits: ${this.title} ${this.year}`);
  
  }
}

let Musical= class extends Video{
  printCredits(): void {
    console.log(`Musical Credits: ${this.producer}`);
  }
}

let vid:Video =new Documentary('The Last Dance',2020,'Basketball');
vid.title='The Last Dance';
vid.printCredits();