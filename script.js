// Arrays holding movie titles for each genre
const comedyMovies = ["Deadpool", "Step Brothers", "Anchorman", "The Hangover"];
const actionMovies = ["Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight"];
const dramaMovies = ["The Shawshank Redemption", "Forrest Gump", "Fight Club", "The Godfather"];
const sciFiMovies = ["Inception", "The Matrix", "Interstellar", "Blade Runner 2049"];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Clear any previous movie recommendations
  movieRecommendations.innerHTML = "";

  // Create a new unordered list element
  const ul = document.createElement("ul");

  // Use a for loop to go through each movie in the movieList array
  for (let i = 0; i < movieList.length; i++) {
    // Create a new list item for each movie
    const li = document.createElement("li");
    // Set the text of the list item to the movie name
    li.textContent = movieList[i];
    // Add the list item to the unordered list
    ul.appendChild(li);
  }

  // Add the unordered list to the movieRecommendations div
  movieRecommendations.appendChild(ul);
});