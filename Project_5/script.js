/* const beginningQuote = ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"];
const middleQuote = ["or whether you think you can't", "it's time to grow up and be strong", "but if you do it right", "with what you have"];
const endQuote = ["you're right!", "tomorrow may well be too late", "once is enough", "where you are"];

let quote;
let beginningQuoteIndex, middleQuoteIndex, endQuoteIndex;


beginningQuoteIndex = Math.floor(Math.random() * beginningQuote.length);
middleQuoteIndex = Math.floor(Math.random() * middleQuote.length);
endQuoteIndex = Math.floor(Math.random() * endQuote.length);


quote = `${beginningQuote[beginningQuoteIndex]} ${middleQuote[middleQuoteIndex]} ${endQuote[endQuoteIndex]}`;

console.log(quote); */


const motivationalQuote = {
    beginningQuote : ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
    middleQuote : ["or whether you think you can't", "it's time to grow up and be strong", "but if you do it right", "with what you have"],
    endQuote : ["you're right!", "tomorrow may well be too late", "once is enough", "where you are"]
}

const inspirationalQuote = {
    beginningQuote : ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
    middleQuote : ["or whether you think you can't", "it's time to grow up and be strong", "but if you do it right", "with what you have"],
    endQuote : ["you're right!", "tomorrow may well be too late", "once is enough", "where you are"]
}

The way to get started is to quit talking and begin doing.

Never stop dreaming, never stop believing,  never give up, 

Forget yesterday - it has already forgotten you. Don't sweat tomorrow - you haven't even met. Instead, open your eyes and your heart to a truly precious gift - today

You’re not obligated to win. You’re obligated to keep trying. To the best you can do everyday.

If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality


let quote;
let beginningMotivationalIndex, middleMotivationalIndex, endMotivationalIndex;

beginningMotivationalIndex = Math.floor(Math.random() * motivationalQuote.beginningQuote.length);
middleMotivationalIndex = Math.floor(Math.random() * motivationalQuote.middleQuote.length);
endMotivationalIndex = Math.floor(Math.random() * motivationalQuote.endQuote.length);

quote = `${motivationalQuote.beginningQuote[beginningMotivationalIndex]} ${motivationalQuote.middleQuote[middleMotivationalIndex]} ${motivationalQuote.endQuote[endMotivationalIndex]}`;

console.log(quote);