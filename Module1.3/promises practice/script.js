const text = document.getElementById('');

fetch('')
.then((response) => {return response.json()})
.then((data) => {text.innerText = data});

// one way to display data in a html 