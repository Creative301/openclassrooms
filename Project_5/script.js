// Step 1
/* let motivationalQuote, beginningMotivationalIndex, middleMotivationalIndex, endMotivationalIndex;

const motivationalQuoteText = {
    beginningQuote: ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
    middleQuote: ["or whether you think you can't", "it's time to grow up and be strong", "because those who mind don't matter", "but if you do it right", "with what you have"],
    endQuote: ["you're right", "tomorrow may well be too late", "and those who matter don't mind", "once is enough", "where you are"]
}

// Generate random index number from the quote
beginningMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.beginningQuote.length);
middleMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.middleQuote.length);
endMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.endQuote.length);

motivationalQuote = `${motivationalQuoteText.beginningQuote[beginningMotivationalIndex]} ${motivationalQuoteText.middleQuote[middleMotivationalIndex]} ${motivationalQuoteText.endQuote[endMotivationalIndex]}`;

displayMotivationalQuote();

function displayMotivationalQuote() {
    console.log(motivationalQuote); 
} */


// Work in progress
// Step 2 original

/* let quoteNumber, quoteType;
let quotes = []

const motivationalQuoteText = {
    beginningQuote: ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
    middleQuote: ["or whether you think you can't", "it's time to grow up and be strong", "because those who mind don't matter", "but if you do it right", "with what you have"],
    endQuote: ["you're right", "tomorrow may well be too late", "and those who matter don't mind", "once is enough", "where you are"]
}

const inspirationalQuoteText = {
    beginningQuote : ["The way to get started", "Never stop dreaming", "Forget yesterday - it has already forgotten you", "You’re not obligated to win", "If you have a dream, don’t just sit there"],
    middleQuote : ["is to quit talking", "never stop believing", "Don't sweat tomorrow - you haven't even met", "You’re obligated to keep trying", "Gather courage to believe that you can succeed"],
    endQuote : ["and begin doing", "never give up", "open your eyes and your heart to a truly precious gift - today", "To the best you can do everyday", "and leave no stone unturned to make it a reality"]
}

runQuoteNumber();

function runQuoteNumber() {
    quoteNumber = parseInt(prompt('Please input the number of quote (1-5)')); 
}

runQuoteType();

function runQuoteType() {
    quoteType = parseInt(prompt('Please input the Quote type (1 = Motivational or 2 = Inspirational)')); 
}

function chooseQuoteType () {
    if (quoteType === 1) {
        
    }
}


displayMotivationalQuote();

function displayMotivationalQuote() {
    for (let i = 0; i < quoteNumber; i++) {
        console.log(createQuote());       
    }
}

// Function to create the quote
function createQuote () {
    let motivationalQuote, inspirationalQuote, beginningMotivationalIndex, middleMotivationalIndex, endMotivationalIndex, beginningInspirationalIndex, middleInspirationalIndex, endInspirationalIndex;

    beginningMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.beginningQuote.length);
    middleMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.middleQuote.length);
    endMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.endQuote.length);

    beginningInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.beginningQuote.length);
    middleInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.middleQuote.length);
    endInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.endQuote.length);

    motivationalQuote = `${motivationalQuoteText.beginningQuote[beginningMotivationalIndex]} ${motivationalQuoteText.middleQuote[middleMotivationalIndex]} ${motivationalQuoteText.endQuote[endMotivationalIndex]}`;

    inspirationalQuote = `${motivationalQuoteText.beginningQuote[beginningMotivationalIndex]} ${motivationalQuoteText.middleQuote[middleMotivationalIndex]} ${motivationalQuoteText.endQuote[endMotivationalIndex]}`;

    return motivationalQuote;
} */


// Step 2 edited

let runQuote, quoteNumber, quoteType;

init();
chooseQuoteType();
// output();

// function output() {
//     while (quoteType === 1) {
//         loopMotivationalQuote();

//         while (quoteType === 2) {
//             loopInspirationalQuote()
//         }    

//         if (quoteType === 0 || quoteType > 2) {
//             runQuote = false;
//             break;
//         }
//     }
// }

function runQuoteNumber() {
    quoteNumber = parseInt(prompt('Please input the number of quote (1-5)')); 
}

function runQuoteType() {
    quoteType = parseInt(prompt('Please input the quote type (1 = Motivational or 2 = Inspirational)')); 
}

function chooseQuoteType() {
    if (quoteType === 1) {
        loopMotivationalQuote();
        while (quoteType === 1) {
            runQuoteNumber();
            runQuoteType();
            loopMotivationalQuote();
        }
    } else if (quoteType === 2) {
        loopInspirationalQuote();
        while (quoteType === 2) {
            runQuoteNumber();
            runQuoteType();
            loopMotivationalQuote();
        }
    } else {
        runQuote = false;
    }
}

function loopMotivationalQuote() {
    for (let i = 0; i < quoteNumber; i++) {
        console.log(displayMotivationalQuote());  
    }
}

function loopInspirationalQuote() {
    for (let i = 0; i < quoteNumber; i++) {
        console.log(displayInspirationalQuote());     
    }
}

// Function to generate random motivational quote
function displayMotivationalQuote() {
    let motivationalQuote, beginningMotivationalIndex, middleMotivationalIndex, endMotivationalIndex;

    const motivationalQuoteText = {
        beginningQuote: ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
        middleQuote: ["or whether you think you can't", "it's time to grow up and be strong", "because those who mind don't matter", "but if you do it right", "with what you have"],
        endQuote: ["you're right", "tomorrow may well be too late", "and those who matter don't mind", "once is enough", "where you are"]
    }

    beginningMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.beginningQuote.length);
    middleMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.middleQuote.length);
    endMotivationalIndex = Math.floor(Math.random() * motivationalQuoteText.endQuote.length);

    motivationalQuote = `${motivationalQuoteText.beginningQuote[beginningMotivationalIndex]} ${motivationalQuoteText.middleQuote[middleMotivationalIndex]} ${motivationalQuoteText.endQuote[endMotivationalIndex]}`;
 
    return motivationalQuote; 
}

// Function to generate random inspirational quote
function displayInspirationalQuote () {
    let inspirationalQuote, beginningInspirationalIndex, middleInspirationalIndex, endInspirationalIndex;

    const inspirationalQuoteText = {
        beginningQuote : ["The way to get started", "Never stop dreaming", "Forget yesterday - it has already forgotten you", "You’re not obligated to win", "If you have a dream, don’t just sit there"],
        middleQuote : ["is to quit talking", "never stop believing", "don't sweat tomorrow - you haven't even met", "you’re obligated to keep trying", "gather courage to believe that you can succeed"],
        endQuote : ["and begin doing", "never give up", "open your eyes and your heart to a truly precious gift - today", "To the best you can do everyday", "and leave no stone unturned to make it a reality"]
    }

    beginningInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.beginningQuote.length);
    middleInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.middleQuote.length);
    endInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.endQuote.length);

    inspirationalQuote = `${inspirationalQuoteText.beginningQuote[beginningInspirationalIndex]} ${inspirationalQuoteText.middleQuote[middleInspirationalIndex]} ${inspirationalQuoteText.endQuote[endInspirationalIndex]}`;

    return inspirationalQuote;       
}


function init() {
    runQuote = true;
    runQuoteNumber();
    runQuoteType();

}