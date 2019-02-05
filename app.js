const quoteToDisplay = fetch('http://michael-scott-api.herokuapp.com/v1/quotes')
  .then(response => response.json())
  .then((quote) => {
    document.getElementById('quote').innerText = quote;
    return true;
  });

