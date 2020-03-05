//#region jQuery

// this function scrolls sidebar on a "Get Started" button click
$(document).ready(() => {
    $(".body__container--button").click(() => {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".line5").offset().top
        },
        1500
      );
    });
  });
  
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  //#endregion
  
  //#region Styling/Animation
  
  let startButton = document.querySelector(".body__container--button");
  let genre = document.querySelector(".genre");
  let genre2 = document.querySelector(".genre2");
  let contentContainer = document.querySelector(".content__container");
  
  function getStarted() {
    // Hides "get started button"
    startButton.style.display = "none";
  
    contentContainer.style.display = "flex";
    contentContainer.setAttribute("id", "contentC");
  
    genre.setAttribute("id", "genreJSID");
    genre.style.display = "flex";
  
    genre2.setAttribute("id", "genreJSID2");
    genre2.style.display = "flex";
  
    let bh1 = document.querySelector(".body__h1");
    let bh2 = document.querySelector(".body__h2");
  
    bh1.style.display = "none";
    bh2.style.display = "none";
  
    let lineWrapper = document.querySelector(".linesAnimation");
    lineWrapper.style.display = "flex";
  
    let lines = document.querySelectorAll(".lines");
  
    lines.forEach(line => {
      line.classList.add("class", "lineJS");
    });
  
    document.body.style.overflow = "visible";
  
    // document.querySelector('.header').style.background = 'black'
    // document.querySelector('.body__container').style.background = '#18bc9c'
  }
  
  let genreChoice;
  
  let genreButtonTvShow = document.querySelector(".tvshow");
  let genreButtonMovie = document.querySelector(".movie");
  let genreButtonAnime = document.querySelector(".anime");
  
  genreButtonTvShow.addEventListener("click", () => {
    genreChoice = "tvshow";
  });
  
  genreButtonMovie.addEventListener("click", () => {
    genreChoice = "movie";
  });
  
  genreButtonAnime.addEventListener("click", () => {
    genreChoice = "anime";
  });
  //#endregion
  function showSuggestion() {
    if (genreChoice == "tvshow") {
      item = tvshow[Math.floor(Math.random() * tvshow.length)];
  
      axios
        .get("http://www.omdbapi.com/?apikey=1fbb2ea1&t=" + item)
        .then(response => {
          console.log(response.data.imdbID);
          document.querySelector(".name").innerHTML = response.data.Title;
          document.querySelector(".raiting").innerHTML = response.data.imdbRating;
          document.querySelector(".releaseDate").innerHTML = response.data.Year;
          document.querySelector(".content__genre").innerHTML =
            response.data.Genre;
          document
            .querySelector(".imdbLink")
            .setAttribute(
              "href",
              `http://imdb.com/title/${response.data.imdbID}`
            );
          document.querySelector(".content__img").src = response.data.Poster;
        })
        .catch(err => {
          console.log(err);
        });
    } else if (genreChoice == "movie") {
      item = movie[Math.floor(Math.random() * movie.length)];
      axios
        .get("http://www.omdbapi.com/?apikey=1fbb2ea1&t=" + item)
        .then(response => {
          document.querySelector(".name").innerHTML = response.data.Title;
          document.querySelector(".raiting").innerHTML = response.data.imdbRating;
          document.querySelector(".releaseDate").innerHTML = response.data.Year;
          document.querySelector(".content__genre").innerHTML =
            response.data.Genre;
          document
            .querySelector(".imdbLink")
            .setAttribute(
              "href",
              `http://imdb.com/title/${response.data.imdbID}`
            );
          document.querySelector(".content__img").src = response.data.Poster;
        })
        .catch(err => {
          console.log(err);
        });
    } else if (genreChoice == "anime") {
      item = anime[Math.floor(Math.random() * anime.length)];
      axios
        .get("http://www.omdbapi.com/?apikey=1fbb2ea1&t=" + item)
        .then(response => {
          document.querySelector(".name").innerHTML = response.data.Title;
          document.querySelector(".raiting").innerHTML = response.data.imdbRating;
          document.querySelector(".releaseDate").innerHTML = response.data.Year;
          document.querySelector(".content__genre").innerHTML =
            response.data.Genre;
          document
            .querySelector(".imdbLink")
            .setAttribute(
              "href",
              `http://imdb.com/title/${response.data.imdbID}`
            );
  
          document.querySelector(".content__img").src = response.data.Poster;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  
  let movie = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Fight Club",
    "Forrest Gump",
    "Inception",
    "Star Wars: Episode V - The Empire Strikes Back",
    "The Lord of the Rings: The Two Towers",
    "The Matrix",
    "Goodfellas",
    "One Flew Over the Cuckoo's Nest",
    "Seven Samurai",
    "Se7en",
    "City of God",
    "Life Is Beautiful",
    "Parasite",
    "The Silence of the Lambs",
    "It's a Wonderful Life",
    "Star Wars: Episode IV - A New Hope",
    "Saving Private Ryan",
    "The Green Mile",
    "Interstellar",
    "Léon: The Professional",
    "The Usual Suspects",
    "Harakiri",
    "American History X",
    "Terminator 2: Judgment Day",
    "Back to the Future",
    "The Pianist",
    "Modern Times",
    "Psycho",
    "Gladiator",
    "City Lights",
    "The Intouchables",
    "The Departed",
    "Whiplash",
    "Joker",
    "The Prestige",
    "Once Upon a Time in the West",
    "Grave of the Fireflies",
    "Casablanca",
    "Rear Window",
    "Cinema Paradiso",
    "Alien",
    "Apocalypse Now",
    "Raiders of the Lost Ark",
    "Memento",
    "The Great Dictator",
    "The Lives of Others",
    "1917",
    "Django Unchained",
    "Avengers: Infinity War",
    "Paths of Glory"
  ];
  let anime = [
    "Fullmetal Alchemist",
    "One Punch Man",
    "Death Note",
    "Cowboy Bebop",
    "Hunter x Hunter",
    "Steins;Gate",
    "Attack on Titan",
    "Dragon Ball Z",
    "Dragon Ball Z",
    "One Piece: Wan pîsu",
    "Code Geass: Lelouch of the Rebellion",
    "Fullmetal Alchemist",
    "Monster",
    "Berserk",
    "Rurouni Kenshin: Trust and Betrayal",
    "Samurai Champloo",
    "Rurouni Kenshin: Wandering Samurai",
    "Neon Genesis Evangelion",
    "Dragon Ball",
    "Dragon Ball",
    "Ghost in the Shell: Stand Alone Complex",
    "Naruto: Shippûden",
    "Parasyte: The Maxim",
    "Mushi-Shi",
    "Yu Yu Hakusho: Ghost Files",
    "Hellsing Ultimate",
    "Detective Conan",
    "Ouran High School Host Club",
    "Baccano!",
    "Dragon Ball Z Kai",
    "Trigun",
    "Tengen toppa gurren lagann",
    "FLCL",
    "Psycho-Pass",
    "Bleach: Burîchi",
    "Dragon Ball Super",
    "Fairy Tail",
    "Naruto",
    "Serial Experiments Lain",
    "Paranoia Agent",
    "Erufen rîto",
    "Claymore",
    "Tokyo Ghoul",
    "Black Lagoon",
    "Ergo Proxy",
    "Wolf's Rain",
    "Akame ga Kill!",
    "KILL La KILL",
    "Darker Than Black",
    "The Melancholy of Haruhi Suzumiya",
    "Hellsing",
    "Soul Eater",
    "Angel Beats!",
    "Sword Art Online",
    "Future Diary",
    "Inuyasha",
    "Afro Samurai",
    "Blue Exorcist",
    "Sailor Moon",
    "Deadman Wonderland"
  ];
  let tvshow = [
    "Breaking Bad",
    "Game of Thrones",
    "Friends",
    "The Sopranos",
    "The Wonder Years",
    "Seinfeld",
    "House of Cards",
    "Lost",
    "Westworld",
    "Stranger Things",
    "The X-Files",
    "Better Call Saul",
    "Narcos",
    "Daredevil",
    "The Wire",
    "Rome",
    "Homeland",
    "Rick and Morty",
    "The Simpsons",
    "Family Guy",
    "Vikings",
    "The Punisher",
    "The Boys",
    "13 Reasons Why",
    "24",
    "Two and a Half Men",
    "X-Men: The Animated Series",
    "Fargo",
    "American Crime Story",
    "Dexter",
    "The Walking Dead",
    "MacGyver",
    "The Handmaid's Tale",
    "Sense8",
    "True Detective",
    "The Umbrella Academy",
    "Mr. Robot",
    "Boardwalk Empire",
    "Star Trek: The Next Generation",
    "Scooby Doo, Where Are You!",
    "Prison Break",
    "Taboo",
    "House",
    "ER",
    "The Big Bang Theory",
    "South Park",
    "Buffy the Vampire Slayer",
    "Beavis and Butt-Head",
    "Jessica Jones",
    "Big Little Lies",
    "Oz",
    "The Strain",
    "The Office",
    "Everybody Loves Raymond",
    "Law & Order: Special Victims Unit",
    "Legion",
    "Black Mirror",
    "CSI: Crime Scene Investigation",
    "American Dad!",
    "Deadwood"
  ];
  