const quotes = generateQuotes();

function generateQuotes() {
    // Utilisez ici votre modèle de langage pré-entraîné pour générer des citations
    // Assurez-vous d'avoir installé et importé la bibliothèque TensorFlow.js

    // Exemple simplifié de génération de citation aléatoire
    const generatedQuotes = [
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        // Ajoutez d'autres citations générées ici
    ];

    return generatedQuotes;
}
async function initializeAssistantAndGenerateQuote() {
    const assistant = await openai.beta.assistants.create({
        name: "Developer Quotes Generator",
        instructions: "Generate an inspiring quote for web developers.",
        model: "gpt-4-turbo-preview"
    });

    const thread = await openai.beta.threads.create();

    const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: "Please generate an inspiring quote for web developers."
    });

    const run = await openai.beta.threads.runs.create(thread.id, { 
        assistant_id: assistant.id,
    });

    const runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    const messages = await openai.beta.threads.messages.list(thread.id);
    
    console.log(assistant);
    console.log(thread);
    console.log(message);
    console.log(runStatus);
    console.log(messages);
}

async function newQuote() {
    try {
        const response = await fetch('/generateQuote', { method: 'POST' });
        const data = await response.json();
        document.getElementById('quote').innerText = `"${data.quote}"`;
        document.getElementById('author').innerText = `- AI`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Charge une citation aléatoire au chargement de la page
window.onload = () => {
    initializeAssistantAndGenerateQuote(); // Notez que cela ne gère pas les erreurs directement ici
    newQuote(); // Ceci est appelé séparément et pourrait être ajusté en fonction de votre logique de traitement
};