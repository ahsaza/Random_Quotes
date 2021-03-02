const quoteAuthor = document.getElementById("quoteAuthor");
const quote = document.getElementById("quote");
const randomId = Math.ceil(Math.random() * 1000);

fetch("https://type.fit/api/quotes")
    .then((data) => data.json())
    .then((newData) => {
        quoteAuthor.innerText = `${newData[randomId].author}`;
        quote.innerText = `${newData[randomId].text}`;
    });
