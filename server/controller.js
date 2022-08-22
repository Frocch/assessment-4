let quotes = require("./db.json")
let id = 4

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage", "A golden egg of opportunity falls into your lap this month",
        "A truly rich life contains love and art in abundance", "Don't let friends impose on you, work calmly and silently",
        "Failure is the chance to do better next time", "Fear and desire, two sides of the same coin"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createQuote: (req, res) => {
        const { quote } = req.body;
        req.body.id = id
        quotes.push(req.body)
        res.status(200).send(quotes)
        id++
    },

    updateQuote: (req, res) => {
        const { id } = req.params;
        const { quote } = req.body;
        const index = quotes.findIndex((quote) => quote.id === id)
        quotes[index]= quote
        res.status(200).send(quotes)
    },

    deleteQuote: (req, res) => {
        const { id } = req.params;
        const index = quotes.findIndex((quote) => quote.id === req.params.id);
        quotes.splice(index, 1);
        res.status(200).send("Quote Deleted")
    }
}