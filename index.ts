// Question:1
//Personal Message:Store a person’s name in a variable,and print a message to that person.
let Name ="Mirha";
console.log(`Hello,I am ${Name}.`);

// Question:2
//Name Cases:Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name1 ="Mirha";
console.log(Name1.toLowerCase());
console.log(Name1.toUpperCase());
console.log(Name1.charAt(0).toUpperCase() + Name1.slice(1).toLowerCase());

// Question:3
//Famous Quote:Find a quote from a famous person you admire. Print the quote and the name of its author.
let famousquote="A winner is a dreamer Who never gives up";
console.log(`Nelson Mandela once said:"${famousquote}".`);

// Question:4
//Famous Quote 2:Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.Then compose your message and store it in a new variable called message.Print your message.
let famous_person="Albert Einstein";
let Message="Failure is success in progress";
console.log(`${famous_person} once said:"${Message}".`);

// Question:5
//Stripping Names:Store a person’s name,and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let Name2 =" Mirha \t Doll \n";
console.log(Name2);
console.log(Name2.trim());

// Question:6
//Write addition,subtraction,multiplication,and division operations that each result in the number 8.
let a=2;
let b=6;
console.log(`addition=${a+b}`);
let c=10;
let d=2;
console.log(`subtraction=${c-d}`);
let e=2;
let f=4;
console.log(`multiplication=${e*f}`);
let g=16;
let h=2;
console.log(`division=${g/h}`);

// Question:7
//Favorite Number:Store your favorite number in a variable.Then,using that variable,create a message that reveals your favorite number.Print that message.
let FavoriteNumber=6;
let message=`My favorite number is :${FavoriteNumber}.`
console.log(message);

// Question:8
//Adding Comments:Choose two of the programs you’ve written,and add at least one comment to each.If you don’t have anything specific to write because your programs are too simple at this point,just add your name and the current date at the top of each program file.Then write one sentence describing what the program does. 
 
// Question:9
//Store the names of a few of your friends in a array called names.Print each person’s name by accessing each element in the list,one at a time.
const MyFriends:string[]=["Ayesha","Noor","Fatima"];
console.log(MyFriends);
console.log(MyFriends[0]);
console.log(MyFriends[1]);
console.log(MyFriends[2]);

// Question:10
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names: string[] = ["Ali", "Babar", "Charlie", "Danish"];
function printPersonalizedMessage(name: string) {
     console.log(`Hello, ${name}! Welcome to the personalized message program.`);
}
function main() {
    names.forEach((name) => {
        printPersonalizedMessage(name);
    });
}
main();


// Question:11
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const motorcycles: string[] = ["Honda", "Yamaha", "Kawasaki", "Ducati", "Harley-Davidson"];
function printTransportationStatements(transport: string) {
    console.log(`I would like to own a ${transport} motorcycle.`);
}
function main1() {
    motorcycles.forEach((brand) => {
        printTransportationStatements(brand);
    });
}
main1();

// Question:12
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
const guests: string[] = ["Arslan", "Nadeem", "Zainab"];
function sendDinnerInvitation(name: string){
    console.log(`Dear ${name},\nYou are invited to join me for dinner. It would be an honor to have your presence.\nLooking forward to meeting you!\nBest regards,\n[Your Name]`);
}
function main3() {
    guests.forEach((guest) => {
        sendDinnerInvitation(guest);
        console.log();
    });
}
main3();

// Question:13
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestlist: string[] = ["Laraib", "Maria", "Nooram"];

function sendDinnerInvitations(name: string): void {
    console.log(`Dear ${name},\nYou are invited to join me for dinner. It would be an honor to have your presence.\nLooking forward to meeting you!\nBest regards,\n[Your Name]`);
}

function initialinvitations() {
    console.log("--- Initial Invitations ---");
    guests.forEach((guest) => {
        sendDinnerInvitation(guest);
        console.log();
    });
    const cancelledGuest = guestlist[1];
    console.log(`${cancelledGuest} can't make it to dinner.\n`);
    guestlist[1] = "Alishba"; 
    console.log("--- Updated Invitations ---");
    guests.forEach((guest) => {
        sendDinnerInvitation(guest);
        console.log(); // Adding a blank line for clarity between invitations
    });
}
initialinvitations();

// Question:14
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestslist: string[] = ["Alisha", "Moiz", "Neelum"];
function SendDinnerInvitation(name: string): void {
    console.log(`Dear ${name},\nYou are invited to join me for dinner. It would be an honor to have your presence.\nLooking forward to meeting you!\nBest regards,\n[Your Name]`);
}
function Initialinvitations() {
    guests.forEach((guest) => {
        sendDinnerInvitation(guest);
        console.log();
    });
    console.log(`${guestslist[1]} can't make it to dinner.`);
    
    guestslist[1] = "Alishba";
    console.log("\n----- Updated Invitations -----");
    guests.forEach((guest) => {
        sendDinnerInvitation(guest);
        console.log();
    });
    guests.push("Adnan", "Maham", "Anila");
    console.log("\n----- Additional Invitations -----");
    guests.slice(3).forEach((guest) => {
        sendDinnerInvitation(guest);
        console.log(); // Adding a blank line for clarity between invitations
    });
}

Initialinvitations();

// Question:15
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people foR dinner
let Guests: string[] = ['Ahmad', 'Zain', 'Ali', 'Danish'];
console.log("Original guest list:");
console.log(Guests);

console.log("\nSorry, I can only invite two people for dinner.");
while (Guests.length > 2) {
    let removedGuest: string | undefined = Guests.pop();  
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}
console.log("\nRemaining guests invited to dinner:");
for (let Guest of Guests) {
    console.log(`${Guest}, you're still invited.`);
}
guests.pop();
guests.pop();
console.log("\nFinal guest list:");
console.log(Guests);

// Question:16
//Seeing the World: Think of at least five places in the world you’d like to visit.
let placesToVisit: string[] = [
    'Tokyo',
    'Paris',
    'New York',
    'Sydney',
    'Cairo'
];

console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order:");
let sortedAlphabetical = [...placesToVisit].sort();
console.log(sortedAlphabetical);

console.log("\nOriginal order check:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order:");
let sortedReverseAlphabetical = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log(sortedReverseAlphabetical);

console.log("\nOriginal order check:");
console.log(placesToVisit);

console.log("\nReversed order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nBack to original order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nSorted in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\nSorted in reverse alphabetical order:");
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log(placesToVisit);

// Question:17
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let Guest: string[] = ['Ali', 'Babar', 'Zain', 'Danish'];

console.log("Original guest list:");
console.log(guests);

console.log(`\nYou are inviting ${guests.length} people to dinner.`);

console.log("\nFinal guest list:");
console.log(guests);

// Question:18
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array of programming languages
let programmingLanguages: string[] = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'Ruby',
    'Swift',
    'Go',
    'TypeScript',
    'PHP'
];
console.log("List of Programming Languages:");
console.log(programmingLanguages);

// Question:19
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface Book {
    title: string;
    author: string;
    publicationYear: number;
}
let books: Book[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960 },
    { title: '1984', author: 'George Orwell', publicationYear: 1949 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', publicationYear: 1813 }
];
console.log("List of Books:");
console.log(books);

// Question:20
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let index = 3;
console.log(fruits[index]);
if (index < fruits.length) {
    console.log("Corrected access:");
    console.log(fruits[index]);
} else {
    console.log(`Index ${index} is out of bounds.`);
}
// Question:21
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';
let number = 10;
let isRaining = true;
let isSunny = false;
let Fruits = ['apple', 'banana', 'orange'];

// Test 1:
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true

// Test 2:
console.log("Is number > 5? I predict True.");
console.log(number > 5); // true

// Test 3:
console.log("Is isRaining && isSunny? I predict False.");
console.log(isRaining && isSunny); // false

// Test 4:
console.log("Is number < 0? I predict False.");
console.log(number < 0); // false

// Test 5:
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda'); // true

// Test 6:
console.log("Is fruits.length == 3? I predict True.");
console.log(fruits.length == 3); // true

// Test 7:
console.log("Is isRaining || isSunny? I predict True.");
console.log(isRaining || isSunny); // true

// Test 8: 
console.log("Is number >= 10? I predict True.");
console.log(number >= 10); // true

// Test 9:
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // false

// Test 10:
console.log("Is fruits.includes('grape')? I predict False.");
console.log(fruits.includes('grape')); // false


// Question:22
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array
// Tests for equality and inequality with strings
let animal = 'dog';
console.log("Is animal == 'dog'? I predict True.");
console.log(animal == 'dog'); // true

let fruit = 'apple';
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana'); // true

// Tests using the toLowerCase() function
let color = 'Blue';
console.log("Is color.toLowerCase() == 'blue'? I predict True.");
console.log(color.toLowerCase() == 'blue'); // true

// Numerical tests :
let number1 = 10;
let number2 = 5;

console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2); // true

console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2); // false

// Tests using "and" and "or" operators
let sunny = true;
let warm = false;

console.log("Is sunny && warm? I predict False.");
console.log(sunny && warm); // false

console.log("Is sunny || warm? I predict True.");
console.log(sunny || warm); // true

// Test whether an item is in an array
let Fruit = ['apple', 'banana', 'orange'];
let searchFruit = 'banana';

console.log(`Is '${searchFruit}' in fruits? I predict True.`);
console.log(fruits.includes(searchFruit)); // true

// Test whether an item is not in an array
let notInFruit = 'grape';

console.log(`Is '${notInFruit}' not in fruits? I predict True.`);
console.log(!fruits.includes(notInFruit)); // true

// Question:23
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let Alien_color: string = 'red';

// Check if the alien's color is green
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Question:24
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.
let alien_Color: string = 'green';

// Check the alien's color using an if-else chain
if (alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
let Alien_Color: string = 'yellow';

// Check the alien's color using an if-else chain
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Question:25
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

let ALIEN_COLOr: string = 'green';

// Check the alien's color using an if-else chain
if (ALIEN_COLOr === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (ALIEN_COLOr === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (ALIEN_COLOr === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
} else {
    console.log("Invalid alien color. No points awarded.");
}
let ALIEN_COLOR: string = 'yellow';

// Check the alien's color using an if-else chain
if (ALIEN_COLOR === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (ALIEN_COLOR === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (ALIEN_COLOR=== 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
} else {
    console.log("Invalid alien color. No points awarded.");
}
let ALIEN_COLor: string = 'red';

// Check the alien's color using an if-else chain
if (ALIEN_COLor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (ALIEN_COLor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (ALIEN_COLor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
} else {
    console.log("Invalid alien color. No points awarded.");
}

//Question:26
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.
let age: number = 12;
if (age < 2) {
    console.log("You are a baby");
    } else if (age >= 2 && age < 4) {
        console.log("You are a toddler");
        } else if (age >= 4 && age < 13) {
            console.log("You are a kid");
            } else if (age >= 13 && age < 20) {
                console.log("You are a teenager");
                } else if (age >= 20 && age < 65) {
                    console.log("You are an adult");
                    } else if (age >= 65) {
                        console.log("You are an elder");
                        } else {
                            console.log("Invalid age");
                        }

// Question:27
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
const FavoriteFRUITS = ['Apple' , 'Banana' , 'Peach'];
if (FavoriteFRUITS.includes('Apple')) {
    console.log("It's one of my favorite fruit!");
}
if (FavoriteFRUITS.includes('Banana')) {
    console.log("It's one of my favorite fruit!");
}
if (FavoriteFRUITS.includes('Peach')) {
    console.log("It's one of my favorite fruit!");
}
if (FavoriteFRUITS.includes('grape')) {
    console.log("It's one of my favorite fruit!");
}
if (FavoriteFRUITS.includes('Orange')) {
    console.log("It's one of my favorite fruit!")
}

// Question:28
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const usernames = ['admin', 'eric', 'john', 'jane', 'admin2'];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`
                );
                }
            }
// Question:29
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
const Usernames: string | any[] = [];
for (let i = 0; i < Usernames.length; i++) {
    if (Usernames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${Usernames[i]}, thank you for logging in again.`)
            }
}

// Question:30
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
const current_users = ['admin', 'eric', 'john', 'jane', 'admin2']
const new_users = ['aeera', 'aly', 'jan', 'janifer', 'john']
for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(`${new_users[i]} is already taken`
            );
            } else {
                console.log(`${new_users[i]} is available`
                    );
                }
            };
// Question:31
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
        console.log(`${numbers[i]}st`
            );
            } else if (numbers[i] === 2) {
                console.log(`${numbers[i]}nd`)
                }
                else if (numbers[i] === 3) {
                    console.log(`${numbers[i]}rd`
                        );
                        } else {
                            console.log(`${numbers[i]}th`
                                );
                            }
                        };
                        
//Question:32
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
const pizzas = ['pepperoni', 'hawaiian', 'meat lovers']
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza`
        );
    }

//Question:33
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ['dog', 'cat', 'bird']
for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]} would make a great pet`
        );
        };

// Question:34
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: any, message: any) {
    console.log(`I would like a ${size} t-shirt that says '${message}'`
        );
    }

// Question:35
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function Make_shirt(size: any, message: any = 'I love TypeScript') {
    console.log(`I would like a ${size} t-shirt that says '${message}'`
        );
    }

//Question:36
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: any, country: any = 'Pakistan') {
    console.log(`${city} is in ${country}`
        );
    }

//Question:37
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city: any, country: any) {
    return `${city}, ${country}`
};

//Question:38
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist: any, title: any, tracks?: number) :object {
    let album = {
        artist: artist,
        title: title,
        tracks: number
        };
        if (tracks !== undefined) {
            album.tracks = tracks;
        }
        return album;
    }
        console.log(make_album('The Beatles', 'Sgt. Pepper\'s Lonely Hearts Club Band', 13));
        console.log(make_album('The Rolling Stones', 'Beggars Banquet'));
        console.log(make_album('The Who', 'Tommy'));

//Question:39
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: any[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ['David', 'Harry potter', 'Angel'];
show_magicians(magicians);

//Question:40
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians: any[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
    return magicians;
}

//Question:41
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function Make_great(magicians: any[]) {
    let new_magicians = magicians.slice();
    for (let i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = new_magicians[i] + ' the Great';
    }
    return new_magicians;
}

//Question:42
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items: any[]) {
    console.log('You ordered a sandwich with the following items:')
    for (let item of items) {
        console.log(item);
    }
}

//Question:43
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Car(manufacturer: string, model: string, ...info: { [key: string]: any }[]): object {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    info.forEach((infoObject) => {
        Object.assign(car, infoObject);
    });
    return car;
}
const myCar = Car('Toyota', 'Camry', { color: 'red' }, { year: 2024 });
console.log(myCar);