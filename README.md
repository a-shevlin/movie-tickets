# Movie Tickets

#### By Alex Shevlin, Seung Lee

#### A webpage that sells movie tickets.

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## [GitHub Pages Link](https://.github.io/)

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee

## Tests

Description for Ticket();

Test1: "should assign info to ticket object"
Code: console.log(Ticket);
Expected Output:
ƒ Ticket(name, rating, age, time, day, isStudent, isMember) {
  this.name = name;
  this.rating = rating;
  this.age = age;
  this.time = time;
  this.day = day;
  this.isStudent = isStudent;

Description for calculateTicketPrice()

Test1: "if age is less or equal to 8 or greater or equal to 60, output [6, "Congratulations, you get a discount due to your age!"]"
Code:
calculateTicketPrice();
Expected Output: [6, "Congratulations, you get a discount due to your age!"]"

Test2: "if age is greater than 8 or less than 60,and the person is a student, output [7, "Congratulations, you get a student discount!"]
Code:
calculateTicketPrice();
Expected Output: [7, "Congratulations, you get a student discount!"]

Test3: "if age is greater than 8 or less than 60,and the person is a member, output [7, "Congratulations, you get a membership discount!"]"
Code:
calculateTicketPrice();
Expected Output: [7, "Congratulations, you get a membership discount!"]

Test4: "if age is greater than 8 or less than 60,and the person is a student and a member, output [7, "Sorry you can't qualify for both of these discounts."]"
Code:
calculateTicketPrice();
Expected Output: [7, "Sorry you can't qualify for both of these discounts."]

Test5: "if age is less or equal to 8 or greater or equal to 60 and is a student or is a member, output [5, "Congratulations, you qualify for two discounts!"]"
Code:
calculateTicketPrice();
Expected Output: [5, "Congratulations, you qualify for two discounts!"]

Test6: "if age is less or equal to 8 or greater or equal to 60 and is a student and is a member, output [9, "Are you really a member, student, and " + age + " years old?"]"
Code:
calculateTicketPrice();
Expected Output: [9, "Are you really a member, student, and " + age + " years old?"]


Description for new Ticket();

Test1: "if assigned ticket values can be stored"
Code: 
let ticket01 = new Ticket(movies[0].title, movies[0].rating, 27, '8:30 PM', 'Tuesday', true, false);
console.log(ticket01);
Expected Output: Ticket {name: 'Dr. Strange in the Multiverse of Madness', rating: 'PG-13', age: 27, time: '8:30 PM', day: 'Tuesday', isStudent: true, isMember: false}