// Question No 1
// Is Downloading VS Code, Typescript and Node JS

// I have already Downloaded

// Question No 2
// Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”


let personName:string = "Asharib";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`)

// Question No 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log(personName.toUpperCase()+ " This is UpperCase")
console.log(personName.toLowerCase()+ " This is LowerCase")
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()+ " This is TitleCase")

// Question No 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"


console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”")


// Question No 5
// Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


let famousPerson:string = "Albert Einstein once said, ";
let message:string = `${famousPerson}“A person who never made a mistake never tried anything new.”`
console.log(message)


// Question No 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.


let strippingName:string = "@ \t# Ali $\n % %"
console.log(strippingName)
console.log(strippingName.trim())

// Question No 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.

console.log(4 + 4 + " This is Addition")
console.log(10 - 2 + " This is Subraction")
console.log(2 * 4 + " This is multiplication")
console.log(16 / 2 + " This is Division")

// Question No 8
// ou should create four lines that look like this: console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4 + " This is Addition")
console.log(10 - 2 + " This is Subraction")
console.log(2 * 4 + " This is multiplication")
console.log(16 / 2 + " This is Division")

// Question No 9
// Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.

let favNumber: number = 10;

console.log(`My favorite Number is ${favNumber}`)


// Question No 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

// Ali, 10-03-2024
// This program prints a personal message.
let myName: string = "Ali";
console.log(`Hello ${myName}`);


// Question No 11
// Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

let friends:string[] = ['Ali', 'Abdullah', 'Ashal']
for(let i = 0; i < friends.length; i++){
     console.log(friends[i])
}

// // Question No 12
// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let friends1:string[] = ['Ali', 'Abdullah', 'Ashal']
for(let a of friends1){
    console.log(`Hello ${a}, your my Best Friend`)
}


// Question No 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transports: string[] = ["Honda", "Toyota", "Buggati"];

transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});


// Question No 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let dinner: string[] = ["Bill Gates", "Elon Musk", "Mark Zakarbark"];

dinner.forEach(invitation => {
    console.log(`I want to invite you ${invitation}, Came and Enjoy.`);
});


// Question No 15
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let unableToAttend = "Mark Zakarbark";
console.log(`${unableToAttend} can't make it to dinner.`);

let newGuest = "Leonardo da Vinci";
dinner[dinner.indexOf(unableToAttend)] = newGuest;

dinner.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});