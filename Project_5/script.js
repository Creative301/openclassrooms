let runQuote, quoteNumber, quoteType, quoteConfirmation;

runQuote = true;

output();

function output() {
    promptQuoteType();
    promptQuoteNumber();
    if (quoteType === 1 && quoteNumber <= 5) {
        for (let i = 0; i < quoteNumber; i++) {
            console.log(generateMotivationalQuote());  
        }

    } else if (quoteType === 2 && quoteNumber <= 5) {
        for (let i = 0; i < quoteNumber; i++) {
            console.log(generateInspirationalQuote());     
        }

    }
    confirmation();
}

function promptQuoteType() {
quoteType = parseInt(prompt('Please input the quote type (1 = Motivational or 2 = Inspirational)')); 
while (quoteType < 1 || quoteType > 2 || quoteType === '' || isNaN(quoteType)) {
    alert('Please input 1 to select the motivational quote or 2 to select the inspirational quote');
    promptQuoteType();
}
}

function promptQuoteNumber() {
quoteNumber = parseInt(prompt('Please input the number of quote (1-5)')); 
while (quoteNumber < 1 || quoteNumber > 5 || quoteNumber === '' || isNaN(quoteNumber)) {
    alert('Please input number between 1 to 5');
    promptQuoteNumber();
}
}



// Function to show continue or exit confirmation
function confirmation() {
    quoteConfirmation = parseInt(prompt('Do you want to continue or exit (1 = continue or 0 = exit)'));
    while (quoteConfirmation < 0 || quoteConfirmation > 1 || quoteConfirmation === '' || isNaN(quoteConfirmation)) {
        alert('Please input 1 to continue or 0 to exit');
        confirmation();
    }
    if (quoteConfirmation === 1) {
        output();
    } else {
        runQuote = false;
    }
}

// Function to generate random number from the quote length
function generateRandomIndexNumber(index) {
    return Math.floor(Math.random() * index);
}

// Function to generate random motivational quote
function generateMotivationalQuote() {
    let motivationalQuote, beginningMotivationalIndex, middleMotivationalIndex, endMotivationalIndex;

    const motivationalQuoteText = {
        beginningQuote: ["Whether you think you can", "The future is now", "Be who you are and say what you feel", "You only live once", "Do what you can"],
        middleQuote: ["or whether you think you can't", "it's time to grow up and be strong", "because those who mind don't matter", "but if you do it right", "with what you have"],
        endQuote: ["you're right", "tomorrow may well be too late", "and those who matter don't mind", "once is enough", "where you are"]
    }

    beginningMotivationalIndex = generateRandomIndexNumber(motivationalQuoteText.beginningQuote.length);
    middleMotivationalIndex = generateRandomIndexNumber(motivationalQuoteText.middleQuote.length);
    endMotivationalIndex = generateRandomIndexNumber(motivationalQuoteText.endQuote.length);

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

    beginningInspirationalIndex = generateRandomIndexNumber(inspirationalQuoteText.beginningQuote.length);
    middleInspirationalIndex = generateRandomIndexNumber(inspirationalQuoteText.middleQuote.length);
    endInspirationalIndex = generateRandomIndexNumber(inspirationalQuoteText.endQuote.length);

    inspirationalQuote = `${inspirationalQuoteText.beginningQuote[beginningInspirationalIndex]} ${inspirationalQuoteText.middleQuote[middleInspirationalIndex]} ${inspirationalQuoteText.endQuote[endInspirationalIndex]}`;

    return inspirationalQuote;       
}

