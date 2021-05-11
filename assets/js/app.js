// Initial Values
const API_Key = "0f232f78d2msh80bdc35b786d01dp1a92dcjsn0ab324d9264b";

const url = "https://imdb8.p.rapidapi.com/auto-complete?"
// Select elements from the DOM
const searchButton = document.querySelector('#search-btn');
const inputElement = document.querySelector('#inputValue');


function createMovieContainer() {

}


searchButton.onclick = function(event) {
  //Keeps browser from refreshing when form button is clicked
  event.preventDefault();
  const value = inputValue.value;
  console.log(value)

  const newURL = url + 'q=' + value;

  fetch(newURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0f232f78d2msh80bdc35b786d01dp1a92dcjsn0ab324d9264b",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
})
    .then((res) => res.json())
    .then((data) => {
      // data.results []
      console.log('Data: ', data);
    })
    .catch((error) => {
	     console.log('Error: ', error);
    });
  console.log('Value: ', value);
}
