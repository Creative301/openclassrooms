const beginningQuote = ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"];
const middleQuote = ["or whether you think you can't", "It's time to grow up and be strong", "but if you do it right", "with what you have"];
const endQuote = ["you're right!", "Tomorrow may well be too late", "once is enough", "where you are"];

let quote;
let quoteIndex;


quoteIndex = Math.floor(Math.random() * 6);


quote = beginningQuote[quoteIndex] + " " + middleQuote[quoteIndex] + " " + endQuote[quoteIndex];

console.log(quote);
