export let movies = [
    {
        id: 0,
        name: "Parasite",
        score: 10
    },
    {
        id: 1,
        name: "the host",
        score: 10
    },
    {
        id: 2,
        name: "Memory of murder",
        score: 10
    },
    {
        id: 3,
        name: "snow piercer",
        score: 10
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeople = movies.filter(movie => id === movie.id);
    return filteredPeople[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movie.length > cleanedMovies,length ){
        return true;
    }else {
        return false;
    }
}

export const addMovie = (name,score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}