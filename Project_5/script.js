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


// Step 2
let runQuote, quoteNumber, quoteType, quoteConfirmation;

init();
output();

/* function output() {
    while (quoteType === 1 && quoteNumber <= 5) {
        loopMotivationalQuote();
        runQuoteType();
        runQuoteNumber();

        while (quoteType === 2 && quoteNumber <= 5) {
            loopInspirationalQuote();
            runQuoteType();
            runQuoteNumber();
        }   
        if (quoteType === 0 || quoteType > 2) {
            runQuote = false;
            break;
        } 
    }
    while (quoteType === 2 && quoteNumber <= 5) {
        loopInspirationalQuote();
        runQuoteType();
        runQuoteNumber();
       
        while (quoteType === 1 && quoteNumber <= 5) {
            loopMotivationalQuote();
            runQuoteType();
            runQuoteNumber();
        }   
        if (quoteType === 0 || quoteType > 2) {
            runQuote = false;
            break;
        } 
    }  
} */

function output() {
    displayQuote();
    confirmation();
}

function displayQuote() {
    if (quoteType === 1 && quoteNumber <= 5) {
        for (let i = 0; i < quoteNumber; i++) {
            console.log(generateMotivationalQuote());  
        }

    } else if (quoteType === 2 && quoteNumber <= 5) {
        for (let i = 0; i < quoteNumber; i++) {
            console.log(generateInspirationalQuote());     
        }

    } else {
        runQuote = false;
    } 
}

function confirmation() {
    quoteConfirmation = parseInt(prompt('Do you want to continue or exit (1 = continue or 0 = exit)'));
    if (quoteConfirmation !== 1 || quoteConfirmation !== 0) {
        alert('Please input 1 to continue or 0 to exit');
    }
}

function runQuoteType() {
    quoteType = parseInt(prompt('Please input the quote type (1 = Motivational or 2 = Inspirational)')); 
}

function quoteTypeCheck() {
    if (quoteType !== 1 || quoteType !== 2) {
        alert('Please input 1 to select the motivational quote or 2 to select the inspirational quote');
    }
}

function runQuoteNumber() {
    quoteNumber = parseInt(prompt('Please input the number of quote (1-5)')); 
}

function quoteNumberCheck() {
    if (quoteNumber < 1 || quoteNumber >5) {
        alert('Please input number between 1 to 5');
    }
}


// Function to generate random motivational quote
function generateMotivationalQuote() {
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
function generateInspirationalQuote () {
    let inspirationalQuote, beginningInspirationalIndex, middleInspirationalIndex, endInspirationalIndex;

    const inspirationalQuoteText = {
        beginningQuote : ["The way to get started", "Never stop dreaming", "Forget yesterday - it has already forgotten you", "You’re not obligated to win", "If you have a dream, don’t just sit there"],
        middleQuote : ["is to quit talking", "never stop believing", "don't sweat tomorrow - you haven't even met", "you’re obligated to keep trying", "gather courage to believe that you can succeed"],
        endQuote : ["and begin doing", "never give up", "open your eyes and your heart to a truly precious gift - today", "to the best you can do everyday", "and leave no stone unturned to make it a reality"]
    }

    beginningInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.beginningQuote.length);
    middleInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.middleQuote.length);
    endInspirationalIndex = Math.floor(Math.random() * inspirationalQuoteText.endQuote.length);

    inspirationalQuote = `${inspirationalQuoteText.beginningQuote[beginningInspirationalIndex]} ${inspirationalQuoteText.middleQuote[middleInspirationalIndex]} ${inspirationalQuoteText.endQuote[endInspirationalIndex]}`;

    return inspirationalQuote;       
}

function init() {
    runQuote = true;
    runQuoteType();
    quoteTypeCheck();
    runQuoteNumber();
}