//As a user, I can only filter one at a time
// meer filters tegelijkertijd?? tenzij het een checkbox is.

const movieList = document.querySelector("ul");

movieList.forEach((element) => {
  const li = document.createAttribute("li");
  const a = document.createAttribute("a");
  const img = document.createAttribute("img");
  ul.appendChild(li);
  li.appendChild(a);
  a.appendChild(img);
  a.href = "https://www.imdb.com/title/tt0944947/" + movies.imdbID;
  img.src = //hoe kom je aan de img?
});

for (let i = 0; (i = movies.length); i++) {

  
}

img.src = "afbeelding van de film";
// deze linkjes heb ik al eerder gemaakt is dat goed?
//https://www.imdb.com/title/tt0944947/ Bewerk de URL van de IMDB en plak de juiste ID erachter.
//https://www.imdb.com/search/title/?title=batman&title_type=feature&release_date=2014-01-01,2022-12-31 -> https://shortest.link/45TF
//avengers ->https://shortest.link/3UUP princess -> https://shortest.link/3UUT x-men ->https://shortest.link/45TM
// https://shortest.link/3UU- nieuwe films!!! New releases

/*const filmFinderMenu = document.querySelector("ul");
const filmFinderChoise = document.querySelectorAll("li");

addGlobalEventListener("click", "ul", (e) => {
  console.log("Hi hi");
});
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

if (document.getElementById("set-xmen").checked == true) {
  filterXman = movies
    .filter((movies) => movies.title.includes("xMen"))
    .map((movies) => movies);
  emptyList();
  addMoviesToDom(filterXman);
}

//callback function
// function chooseMovie() {
/* if (filmFinderChoise.classList.contains("xmen")) {
      filmFinderChoise.classList.remove(
        "avenger",
        "princess",
        "batman",
        "latestMovies"
      );
    } else {
      filmFinderChoise.classList.add("xmen");
    }
  }

  //4. to filter all new movies: from last year 2014 and newer.

  //if .filter & .map gebruiken
*/
