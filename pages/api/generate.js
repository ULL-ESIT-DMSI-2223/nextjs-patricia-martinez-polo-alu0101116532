import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // pasamos la API KEY con nodejs
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",                // id del modelo de lenguaje a usar
    prompt: generatePrompt(req.body.animal),  // prompt es el texto inicial ... cadena para la que generar los complementos
    temperature: 0.6,                         // valores altos -> el modelo asume más riesgos
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {            // función auxiliar para generar el prompt
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  console.log(capitalizedAnimal);
  const suggestion = `Suggest three names for an animal that is a superhero.
  
Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
  console.log(sugestion);
  return suggestion;
}
