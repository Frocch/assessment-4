const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quotesContainer = document.querySelector("#quotes-container")
const form = document.querySelector('form')

const quotesCallback = ({ data: quotes}) => displayQuotes(quotes)
const errCalback = err => console.log(err)


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const updateQuote = (id, body) => axios.put(`http://localhost:4000/api/quotes/:id`, body).then(quotesCallback).cath(errCalback)

const createQuote = body => axios.post('http://localhost:4000/api/quotes/', body).then(quotesCallback).catch(errCalback)

const deleteQuote = id => axios.delete(`http://localhost:4000/api/quotes/:id`).then(quotesCallback).catch(errCalback)

function submitHandler(e) {
    e.preventDefault()

    let quote = document.querySelector('#quote')

    let bodyObj = {
        quote: quote.value,
    }

    createQuote(bodyObj)

    quote.value = ''
}

function createQuoteCard(quotes) {
    const quoteCard = document.createElement('div')
    quoteCard.classList.add('quote-card')

    quoteCard.innerHTML = `<p class="quote">${quotes.quote}</p>`

    quotesContainer.appendChild(quoteCard)
}

function displayQuotes(arr) {
    quotesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createQuoteCard(arr[i])
    }
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)