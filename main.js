let libraryArray = 
[
    [
        "To Kill a Mockingbird"
    ],
    [
        "1984", 
        "Romeo and Juliet"
    ],
    [
        "The Catcher in the Rye", 
        "The Perks of Being a Wallflower", 
        "The Great Gatsby",
        "A Tale of Two Cities",
        "Lord of the Flies",
        "Hamlet"
    ]
];



console.log(libraryArray[0][0]);
console.log(libraryArray[1][0]);
console.log(libraryArray[1][1]);
console.log(libraryArray[2][0]);
console.log(libraryArray[2][1]);
console.log(libraryArray[2][2]);
console.log(libraryArray[2][3]);
console.log(libraryArray[2][4]);
console.log(libraryArray[2][5]);



let row = 0; 
let item = 0;
console.log(libraryArray[row][item]);

row = 1; 
item = 0;
console.log(libraryArray[row][item]);

row = 1;
item = 1;
console.log(libraryArray[row][item]);

row = 2;
item = 0;
console.log(libraryArray[row][item]);

row = 2;
item = 1;
console.log(libraryArray[row][item]);

row = 2;
item = 2;
console.log(libraryArray[row][item]);

row = 2;
item = 3;
console.log(libraryArray[row][item]);

row = 2;
item = 4;
console.log(libraryArray[row][item]);

row = 2;
item = 5;
console.log(libraryArray[row][item]);



for (let i = 0; i < libraryArray[1].length; i++)
{
    console.log(libraryArray[1][i]);
}
