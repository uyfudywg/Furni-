
let btn = document.querySelector(".but");
let output = document.querySelector(".txt");
let body = document.querySelector("body");
let text = document.querySelector(".output");
let author = document.querySelector(".author");
let colours = ["#ED6A5A", "#5ca4a9", "#ff5666", "#0C0A3E", "#F9564F", "#55286F", "#3BC14A", "#DE6E35"];

let quotes = [
    {quote: "The greatest obstacle to connecting with our joy is resentment.",
    author: "~Pema Chodron"},

    {quote: "Love does not consist of gazing at each other, but in looking together in the same direction.", 
    author: "~Antoine de Saint-Exupery"},

    {quote: "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.",
    author: "~Henry Van Dyke"},

    {quote: "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "~Mary Kay Ash"},

    {quote: "Small opportunities are often the beginning of great enterprises.",
    author: "~Demosthenes"},

    {quote: "The reason most goals are not achieved is that we spend our time doing second things first.",
     author: "~Robert McKain"},

    {quote: "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings.",
    author: "~Byron Pulsifer"},
   
]    

// Function to validate and remove duplicates using filter
function validateAndRemoveDuplicates(quotes) {
    const seen = new Set();
    return quotes.filter((quoteObj) => {
        if (quoteObj.quote && quoteObj.author) {
            if (!seen.has(quoteObj.quote)) {
                seen.add(quoteObj.quote);
                return true; 
            }
        } else {
            console.warn("Invalid quote object:", quoteObj);
        }
        return false; // Remove this quote
    });
}

// Use the validation function
quotes = validateAndRemoveDuplicates(quotes);

function random() {
    // Get a random quote
    let randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randQuote.quote;
    author.innerHTML = randQuote.author;

    // Get a random color
    let randColor = colours[Math.floor(Math.random() * colours.length)];

    // Change the background color
    body.style.backgroundColor = randColor;
    text.style.color = randColor;
    author.style.color = randColor;
    btn.style.backgroundColor = randColor;
}

window.onload = random;
btn.addEventListener('click', random);
