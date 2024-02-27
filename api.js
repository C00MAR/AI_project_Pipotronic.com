const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Assurez-vous de définir votre clé API comme variable d'environnement
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "You are a helpful assistant." }],
  });

  console.log(completion.choices[0].message.content);
}

main();
