// "http://www.omdbapi.com/?s=batman&apikey=insertyourkeyhere"

fetch('http://www.omdbapi.com/?s=batman&apikey=9037a6f0')
.then((response) => response.json())
.then((data) => {
    console.log(data);
});

//http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=insertyourkeyhere

fetch('http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=9037a6f0')
.then((response) => response.json())
.then((data) => {
    console.log(data);
});


