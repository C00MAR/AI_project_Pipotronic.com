const quotes = [
    { quote: "In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes, not there at all.", author: "Jon Bentley" },
    { quote: "The best performance improvement is the transition from the nonworking state to the working state.", author: "J. Osterhout" },
    { quote: "The most damaging phrase in the language is.. it's always been done this way", author: "Grace Hopper" },
    // Ajoutez d'autres citations ici
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = `"${quotes[randomIndex].quote}"`;
    document.getElementById('author').innerText = `- ${quotes[randomIndex].author}`;
}

// Charge une citation aléatoire au chargement de la page
window.onload = newQuote;
