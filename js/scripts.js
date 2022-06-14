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

function Ticket(name, rating, ) {
  this.name = name;
  this.rating = rating;
}

const movies = [
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

Ticket.prototype.calculateTicketPrice = function() {
  
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

// User Interface Logic

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