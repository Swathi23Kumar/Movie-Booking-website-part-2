function generateSeats() {
	var movie = document.getElementById("movie").value;
	var seats = document.getElementById("seats");
	var seatClass = "";
	var seatStatus = "";
  var selectedSeats =[];
  var ticketPrice = 0;
  var totalPrice = 0;

	if (movie == "Avengers") {
		seatClass = "avengers";
    ticketPrice = 10;
	} else if (movie == "The Dark Knight") {
		seatClass = "dark-knight";
    ticketPrice = 8;

	} else if (movie == "Jurassic Park") {
		seatClass = "jurassic-park";
    ticketPrice = 12;
	}

	seats.innerHTML = "";

	for (var i = 1; i <= 30; i++) {
		if (i % 6 == 0) {
			seats.innerHTML += "<br>";
		}

		if (seatClass == "avengers") {
			if (i == 9 || i == 10 || i == 15 || i == 16 || i == 21 || i == 22 || i == 27 || i == 28) {
				seatStatus = "booked";
			} else {
				seatStatus = "available";
			}
		} else if (seatClass == "dark-knight") {
			if (i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16) {
				seatStatus = "booked";
			} else {
				seatStatus = "available";
			}
		} else if (seatClass == "jurassic-park") {
if (i == 4 || i == 5 || i == 10 || i == 11 || i == 16 || i == 17 || i == 22 || i == 23 || i == 28 || i == 29) {
seatStatus = "booked";
} else {
seatStatus = "available";
}
}
seats.innerHTML += "<div class='seat " + seatStatus + "' onclick='bookSeat(this, " + i + ")'>" + i + "</div>";
}
// Define the submit button element
  var submitBtn = document.getElementById("submit-btn");

  // Add an event listener to the submit button
  submitBtn.addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the submitForm function
    submitForm();
  });
}

// Set the date and time of the next show
var nextShowDate = new Date("2023-05-15T19:30:00");

// Update the countdown timer every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  var now = new Date();

  // Calculate the time remaining until the next show
  var timeRemaining = nextShowDate.getTime() - now.getTime();

  // If the show has already started, display a message instead of the countdown timer
  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML = "The show has already started!";
    return;
  }

  // Convert the time remaining to hours, minutes, and seconds
  var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown timer
  var countdownHTML = "The next show starts in ";
  countdownHTML += hours + "h ";
  countdownHTML += minutes + "m ";
  countdownHTML += seconds + "s";
  document.getElementById("countdown").innerHTML = countdownHTML;
}

function bookSeat(seat, seatNumber) {
  // ...
}

function submitForm() {
  // ...
}








function bookSeat(seat, seatNumber) {
  var selectedSeats = document.getElementById("selected-seats");
  var totalPriceLabel = document.getElementById("total-price");
  var ticketPrice = 0;
  var totalPrice = 0;

  if (totalPriceLabel.innerHTML !== "") {
    totalPrice = parseInt(totalPriceLabel.innerHTML);
  }

  if (seat.classList.contains("available")) {
    seat.classList.remove("available");
    seat.classList.add("selected");
    selectedSeats.innerHTML += " " + seatNumber;

    if (document.getElementById("movie").value == "Avengers") {
      ticketPrice = 10;
    } else if (document.getElementById("movie").value == "The Dark Knight") {
      ticketPrice = 8;
    } else if (document.getElementById("movie").value == "Jurassic Park") {
      ticketPrice = 12;
    }

    totalPrice += ticketPrice;
    totalPriceLabel.innerHTML = totalPrice;
  } else if (seat.classList.contains("selected")) {
    seat.classList.remove("selected");
    seat.classList.add("available");
    selectedSeats.innerHTML = selectedSeats.innerHTML.replace(" " + seatNumber, "");
    totalPrice -= ticketPrice;
    totalPriceLabel.innerHTML = totalPrice;
  } else if (seat.classList.contains("booked")) {
    if (window.confirm("Are you sure you want to cancel this seat?")) {
      seat.classList.remove("booked");
      seat.classList.add("available");
      selectedSeats.innerHTML = selectedSeats.innerHTML.replace(" " + seatNumber, "");
      totalPrice -= ticketPrice;
      totalPriceLabel.innerHTML = totalPrice;
    }
  }
}




function submitForm() {
  var selectedSeats = document.querySelectorAll('.selected');
  var errorMessage = document.getElementById('error-message');

  if (selectedSeats.length === 0) {
    errorMessage.innerHTML = 'Please select at least one seat.';
    errorMessage.style.display = 'block';
    return false;
  } else {
    errorMessage.style.display = 'none';
    return true;
  }
}
