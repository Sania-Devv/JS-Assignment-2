
(async function (){
    
const response = await fetch("./data.json");
const data = await response.json();

// Get references to the HTML elements
const form = document.querySelector('form');
const genreSelect = document.getElementById('genre');
const ratingSelect = document.getElementById('rating');
const yearSelect = document.getElementById('year');
const recommendationsList = document.getElementById('recommendations');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the user's selected preferences
	const selectedGenre = genreSelect.value;
	const selectedRating = ratingSelect.value;
	const selectedYear = yearSelect.value;

	// Filter the movies based on the user's preferences
	const filteredMovies = movies.filter(function(movie) {
		return (
			(!selectedGenre || movie.genre === selectedGenre) &&
			(!selectedRating || movie.rating >= selectedRating) &&
			(!selectedYear || movie.year == selectedYear)
		);
	});

	// Clear the previous recommendations from the list
	recommendationsList.innerHTML = '';

	// Create a new list item for each recommended movie and add it to the list
	filteredMovies.forEach(function(movie) {
		const listItem = document.createElement('li');
		listItem.textContent = `${movie.title} (${movie.year}) - ${movie.rating} stars`;
		recommendationsList.appendChild(listItem);
	});
});



})();
