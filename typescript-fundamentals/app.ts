function GetReview(title:string): string | number {
    if (title == "Dune") {
        return "Excellent";
    } else {
        return Math.floor(Math.random() * 10);
    }
}

function PrintMovieInfo(title:string, yearReleased:number=2000, ...cast:string[]){
    console.log(`Title: ${title}`);

    if(yearReleased){
        console.log(`Year Released: ${yearReleased}`);
    }

    console.log(`Cast: ${cast.join(', ')}`);
}


PrintMovieInfo('Dune',2021, 'Timothy','Zendaya');