// TL;DR: Async is code that can start now, and finish later, basically. 

const swapiFilms = async () => {
    const url = "https://swapoi.com/api/films/",
    filmsData = {},
    films = [];

    filmsData = await fetch(url).then(data => data.json());

    films = filmsData.results.map(obj => obj.title)
    console.log(films);
};

swapiFilms();
