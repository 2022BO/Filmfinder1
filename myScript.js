//As a user, I can only filter one at a time
// meer filters tegelijkertijd?? tenzij het een checkbox is.

const movieList = document.getElementById("ul");
function addMoviesToDom(movies) {
  movies.forEach((movie) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    ul.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
    a.href = "https://www.imdb.com/title/tt0944947/" + movies.imdbID;
    img.src = movie.poster;
  });
}
addMoviesToDom(movies);
const latestButton = document.getElementById("latestMovies");
const filterButtons = document.getElementsByClassName("filterButtons");
console.log(latestButton);
console.log(filterButtons);

latestButton.addEventListener("change", (e) => {
  const li = e.target.parentElement;
  li.parentNode.removeChild(li);
  //eerst alle films verwijderen
  const latestButton = movies.filter((movies) => {
    return movies.year >= 2014;
  });
  console.log(latestButton);
  // dan alle films toevoegen aan de hand van je conditie- latest.
});

var parent = document.getElementById("movieList").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[(0, 1, 2, 3, 4)]; //latestmovies
parent.removeChild(child);

filterButtons.addEventListener("change", (e) => {
  const filterButtons = document.getElementById(
    ("#The Avengers", title).movies == true
  );
  return movies.title;
});

console.log(filterButtons, "Avengers");
/*if (document.getElementById("X-Men").movies == true) return movies.title;
  console.log(filterButtons, "X-men");
  if (document.getElementById("Princess").movies == true) return movies.title;
  console.log(filterButtons, "Princess");
  if (document.getElementById("Batman").movies == true) return movies.title;
  console.log(filterButtons, "Batman");*/

/*emptyMovielist[("title", "year", "imdbID", "type", "poster")];
emptyMovielist.remove("title", "year", "imdbID", "type", "poster");
print(emptyMovielist);
// adventlistener voor andere knoppen = collectie elke knop uit de collectie met for loop.
// filter movies opslaan in movies meegeven als parameter in de functie addmoviestoDom
const li = e.target.parentElement;
  li.parentNode.removeChild(li);

/*var btns = document.querySelectorAll("#filterButtons"); //waarom geeft var geen probleem??? en const wel (hier)

Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});*/

/*filterButtons.addEventListener("change", (e) => {
  const li = e.target.parentElement;
  li.parentNode.removeChild(li);
});
//eerst alle films verwijderen
// dan alle films toevoegen aan de hand van je conditie- latest.
//eerst alle films verwijderen

 const link = document.querySelector(".a.href");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("navigation to", e.target.textContent, "was prevented");
  });

  let latestMovies = document.querySelector("movieList");
  latestMovies.addEventListener("click", function () {
    movies.filter((movie) => movie.year >= "2014");
    movies.map((movie) => movie.title);
  });

  console.log(latestMovies[4]);
  console.log(latestButton);*/
