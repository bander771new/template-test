// constants . . 
const quoteContainer  = document.getElementById('quote-container');
const quoteText  = document.getElementById('quote');
const authorText  = document.getElementById('author');
const twitterBtn  = document.getElementById('twitter');
const newQuoteBtn  = document.getElementById('new-quote');


let apiQuotes = [];

// Show New Random Quote
function newQuote() {
    // pick a random quote . . 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    // Check if Author is blank then replace it with 'unknown'
    if (!quote.author) {
        author.textContent = 'unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);
        newQuote();
    }   catch (error) {
        // Catch Error Here
    }
}

// on Load 
getQuotes();