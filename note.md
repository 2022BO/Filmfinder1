//5/8 can filter movies with "Avenger"+++++movies in the title
//Use array methods for the filters.
// check if a string is already in another string with .includes()` method.
// VOORBEELD let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// Do you need multiple functions for lookalike filters?
//9. can click on a poster from the movie, which will link me to their IMDB page
//VOORBEELD juiste zoeken https://www.imdb.com/title/tt0944947/ Bewerk de URL van de IMDB en plak de juiste ID erachter.
//https://www.imdb.com/search/title/?title=batman&title_type=feature&release_date=2014-01-01,2022-12-31 -> https://shortest.link/45TF
//avengers ->https://shortest.link/3UUP princess -> https://shortest.link/3UUT x-men ->https://shortest.link/45TM
// https://shortest.link/3UU- nieuwe films!!! New releases
//BONUS I can type the title of a movie into an input field

//Design
//css grid of flex-box
//Navigation
//1.Below <nav> we want to create a <main> or a container <div> ->need their own container
//Create a <ul> inside the container
//use JavaScript to add <li> elements to this <ul>, add a suiting id, which you can select later.
//create a header and a footer in your webpage
//2.Create 2 JavaScript files, add script tags on your HTML page.the order matters!
//3.Check in your script if you can log all the movies in your console
// HIERNA verder met 4.
// make a function (addMoviesToDom) that takes 1 argument: The movies.

/\*
const heavySuperHeroNamesChained = heroes
.filter(hero => hero.weight == 200)
.map(hero => hero.name);
console.log(heavySuperHeroNamesChained);

/\* .filter((movies) => movies.year > "2014")
.map((movies) => movies);
emptyList();
addMoviesToDom(latetsMovies);

"year", "title", "imdbID" , "type", "poster"
function () {
console.log("Show movies from 2014");
//const latetsMovies = 2014;

    /*if (latetsMovies >= "2014") {
    } else {
      console.log(
        "Unfortunately you don't get more movies, but it's nice to have you!"
      );
      return year.map >= 2014;
    }
    latetsMovies();
    console.log(latetsMovies[0]);

};*/
/*const filmFinderMenu = document.querySelector("ul");
const filmFinderChoise = document.querySelectorAll("li");

addGlobalEventListener("click", "ul", (e) => {

//4. to filter all new movies: from last year 2014 and newer.

//if .filter & .map gebruiken
\*/
// functie maken met alle films verwijderd .remove
// adventlistener voor andere knoppen = collectie elke knop uit de collectie met for loop.
// filter movies opslaan in movies meegeven als parameter in de functie addmoviestoDom

/\*let latetsMovies = movies.filter((movie) => {
return movie.year <= 2014;
// .filter((movie) => movie.year >= "2014")
// .map((movie) => movie.title);
});

console.log(latetsMovies, [4]);
console.log(latestButton);

latetsMovies();

});\*/
/_const emptyList = document.getElementsByClassName("movieList");
const verwijderMovies = (e) => {
console.log("verwijderMoviesEvent", e);
console.log("verwijderMovies event.target:", e.target);
console.log(
"verwijderMoviesEvent event.target.innerHTML:",
e.target.innerHTML
);
};
verwijderMovies.remove();
_/
