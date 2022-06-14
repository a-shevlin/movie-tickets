// Business Logic
function Ticket(name, rating, age, time, day, isStudent, isMember) {
  this.name = name;
  this.rating = rating;
  this.age = age;
  this.time = time;
  this.day = day;
  this.isStudent = isStudent;
  this.isMember = isMember;
  this.price = this.calculateTicketPrice();
}

/*
  extended goal(?)
  change price based on size of screen (IMAX 3D, IMAX 2D, 4D, REALD 3D, Digital Cinema)
*/
Ticket.prototype.calculateTicketPrice = function() {
  let basePrice = 8;
  let output = [basePrice, ""];
  if (this.age <= 8 || this.age >= 60) {
    output[0] -= 2;
    output[1] = "Congratulations, you get a discount due to your age!";
  }
  if (this.isStudent) {
    output[0] -= 1;
    output[1] = "Congratulations, you get a student discount!";
  }  
  if (this.isMember) {
    output[0] -= 1;
    output[1] = "Congratulations, you get a membership discount!";
  }
  if (this.isMember && this.isStudent) {
    output[0] += 1;
    output[1] = "Sorry you can't qualify for both of these discounts."
  }
  if (basePrice - 3 === output[0]) {
    output[1] = "Congratulations, you qualify for two discounts!";
  }
  if (basePrice - 4 === output[0] && this.isMember) {
    output[0] += 5;
    output[1] = "Are you really a member, student, and " + this.age + " years old?";
  }
  return output;
};

function MovieList() {
  this.movies = {};
  this.currentId = 0;
}

MovieList.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
}

MovieList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

MovieList.prototype.findMovie = function(id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
}

function Movie(title, rating) {
  this.title = title;
  this.rating = rating;
}

// User Interface Logic

let movieList = new MovieList();

$(document).ready(function() {
  let drStrange = new Movie('Dr. Strange in the Multiverse of Madness', 'PG-13');
  movieList.addMovie(drStrange);

  let lightyear = new Movie('Lightyear', 'PG');
  movieList.addMovie(lightyear);

  let ticket01 = new Ticket(movieList.findMovie(1).title, movieList.findMovie(1).rating, 27, '8:30 PM', 'Tuesday', true, false);

  console.log(ticket01.price);

  $('.movie-poster img').click(function() {
    const movie = movieList.findMovie(parseInt(this.parentElement.id));
    $('#movie-title').val(movie.title);
    $('#rating').val(movie.rating);
    $('form').toggle();
  });

  
});



/*
Create a webpage where a 
user can 
  select the name of a movie, 
  the time of day that they would like to see the movie and 
  their age. 

The webpage should let them 
know how much their movie ticket will cost, 
  based on those three factors. 

  Consider that 
  non-"first-release" movies, 
  matinee and 
  senior tickets tend to be 
  cheaper than the regular priced ticket.

Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

*/