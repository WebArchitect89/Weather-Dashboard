// Create a weather dashboard with form inputs.

// When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history.

// When a user views the current weather conditions for that city they are presented with:

// The city name

// The date

// An icon representation of weather conditions

// The temperature

// The humidity

// The wind speed

// When a user views future weather conditions for that city they are presented with a 5-day forecast that displays:

// The date

// An icon representation of weather conditions

// The temperature

// The humidity

// When a user clicks on a city in the search history they are again presented with current and future conditions for that city.

                       // Pseudocode(Reference to news search)

                    //    First Phase

// Create the structure to the search fora city box
// Create the structure to the right of the details would go
// Check the forecast





// Create the queryURL var.
// Create some variables(userInput/Key/City).
//Clear out the search box
//After pressing search a button should appear with the city''s name 
// after pressing the city's button the information in the right should appear


var key = "d5aed06623f6116731b6712909c097d9"
var city = "Poole"

//Grabs the current time and date
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('DD-MM-YYYY HH:MM:SS');

console.log(date)
console.log(dateTime)

var testButton = $(".search-button").text("Hey")

var cityHist = [];
//Will save the text value of the search and save it to an array and storage
$(".search-button").on("click", function (event) {
	event.preventDefault();
	city = $(this).parent('.btnPar').siblings('.textVal').val();
	if (city === "") {
		return;
	};
	cityHist.push(city);
console.log(city)
	localStorage.setItem('city', JSON.stringify(cityHist));
	fiveForecastEl.empty();
	getHistory();
	getWeatherToday();
});

var fiveForecastEl = $('.fiveForecast')
console.log(city)
console.log(cityHist)
console.log(fiveForecastEl)

