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




let runQuote, motivationalQuote, inspirationalQuote, quoteNumber, quoteType;
let beginningMotivationalIndex, middleMotivationalIndex, endMotivationalIndex, beginningInspirationalIndex, middleInspirationalIndex, endInspirationalIndex;
let quote = [];

const motivationalQuoteText = {
    beginningQuote : ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
    middleQuote : ["or whether you think you can't", "it's time to grow up and be strong", "because those who mind don't matter", "but if you do it right", "with what you have"],
    endQuote : ["you're right", "tomorrow may well be too late", "and those who matter don't mind", "once is enough", "where you are"]
}

const inspirationalQuoteText = {
    beginningQuote : ["The way to get started", "Never stop dreaming", "Forget yesterday - it has already forgotten you", "You’re not obligated to win", "If you have a dream, don’t just sit there"],
    middleQuote : ["is to quit talking", "never stop believing", "Don't sweat tomorrow - you haven't even met", "You’re obligated to keep trying", "Gather courage to believe that you can succeed"],
    endQuote : ["and begin doing", "never give up", "open your eyes and your heart to a truly precious gift - today", "To the best you can do everyday", "and leave no stone unturned to make it a reality"]
}

/* beginningMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.beginningQuote.length);
middleMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.middleQuote.length);
endMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.endQuote.length);
beginningInspirationalIndex = Math.floor(Math.random() * motivationalQuoteText.beginningQuote.length);
middleMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.middleQuote.length);
endMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.endQuote.length); */


beginningMotivationalIndex = Math.floor(Math.random() * quoteNumber);
middleMotivationalIndex = Math.floor(Math.random() * quoteNumber);
endMotivationalIndex = Math.floor(Math.random() * quoteNumber);
beginningInspirationalIndex = Math.floor(Math.random() * quoteNumber);
middleMotivationalIndex = Math.floor(Math.random() * quoteNumber);
endMotivationalIndex = Math.floor(Math.random() * quoteNumber);

motivationalQuote = `${motivationalQuoteText.beginningQuote[beginningMotivationalIndex]} ${motivationalQuoteText.middleQuote[middleMotivationalIndex]} ${motivationalQuoteText.endQuote[endMotivationalIndex]}`;

inspirationalQuote = `${inspirationalQuoteText.beginningQuote[beginningInspirationalIndex]} ${inspirationalQuoteText.middleQuote[middleInspirationalIndex]} ${inspirationalQuoteText.endQuote[endInspirationalIndex]}`;

init();
output();

function output() {
    if (quoteType === 1 || quoteType === 2) {
        console.log(quote);
    } else {
        runQuote = false;
    }
}

function runQuoteNumber() {
    quoteNumber = parseInt(prompt('Please input the number of quote (1-5)')); 
}

function runQuoteType() {
    quoteType = parseInt(prompt('Please input the Quote type (1 = Motivational or 2 = Inspirational)')); 
}

function displayMotivationalQuote() {
    for (let i = 0; i <= quoteNumber; i++) {
        if(quoteType === 1) {
            quote.push(motivationalQuote);
        } else {
            quote.push(inspirationalQuote)
        }      
        return quote;    
    }
}

function init() {
    runQuote = true;
    runQuoteNumber(); 
    console.log(quoteNumber);
    runQuoteType();
    console.log(quoteType);
    console.log(beginningMotivationalIndex);
    console.log(typeof beginningMotivationalIndex);
}