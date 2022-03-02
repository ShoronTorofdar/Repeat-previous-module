function kanye(){
  fetch('https://api.kanye.rest/')
  .then(response => response.json())
  .then(data => showQuote(data.quote))
}

function showQuote(quote){
 const showdisplayQuote = document.getElementById('showQuotehere')
  showdisplayQuote.innerText = quote;
  


}