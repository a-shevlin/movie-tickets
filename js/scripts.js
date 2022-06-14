// Business Logic
/*
movie {
  name
  rating
}
time
day (M-S)
base price
*/

function Ticket(name, rating, age, time, day, isStudent, isMember) {
  this.name = name;
  this.rating = rating;
  this.price = 8;
  this.age = age;
  this.time = time;
  this.day = day;
  this.isStudent = isStudent;
  this.isMember = isMember;
}

/*
method that calculates the price based on age
  child/senior tickets = cheapest same price 
    8     60
  student = slightly cheaper price
  adult = most expensive

  extended goal(?)
  change price based on size of screen and stuff (IMAX 3D, IMAX 2D, 4D, REALD 3D, Digital Cinema, membership)
    stacking discounts?
*/
Ticket.prototype.calculateTicketPrice = function() {
  let output = [this.price, ""];
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
  if (this.price - 3 === price) {
    output[1] = "Congratulations, you qualify for two discounts!";
  }
  if (this.price - 4 === price && this.isMember) {
    output[0] += 5;
    output[1] = "Are you really a member, student, and " + this.age + " years old?";
  }
  return output;
};

const movies = [
  {
    title: "Dr. Strange in the Multiverse of Madness", 
    rating: "PG-13"
  },
]
let ticket01 = new Ticket(movies[0].title, movies[0].rating, 27, '8:30 PM', 'Tuesday', true, false);
console.log(ticket01.calculateTicketPrice());



// User Interface Logic
const moviesMain = [
  {
    title: "Dr. Strange in the Multiverse of Madness", 
    rating: "PG-13"
  },
  {
    title: "Lightyear",
    rating: "PG"
  },
  {
    title: "Jurassic World: Dominion",
    rating: "PG-13"
  },
  {
    title: "The Bob's Burgers Movie",
    rating: "PG-13"
  },
  {
    title: "The Black Phone",
    rating: "R"
  },
]

$(document).ready(function() {
  
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