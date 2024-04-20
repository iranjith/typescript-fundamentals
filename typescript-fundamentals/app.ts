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

class Video {
  title: string = "";
  private year: number = 2024;

  constructor(newTitle: string, newYear: number) {
    console.log("Video class constructor");
    this.title = newTitle;
    this.year = newYear;
  }

  printItem(): void {
    console.log(`Title: ${this.title} released in ${this.year}`);
  }
}

let vid = new Video('Dune', 2021);

vid.printItem(); // Title: Dune
