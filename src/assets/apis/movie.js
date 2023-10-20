import axios from "axios";

export const getMovies = async () => {
    const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/shows',
        headers: {
            'X-RapidAPI-Key': '5c57509fbfmsh62f8b2d86d1bfb2p1ec5c5jsnbb2ea867d053',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getMovie = async (id) => {
    const options = {
        method: 'GET',
        url: `https://movies-api14.p.rapidapi.com/movie/${id}`,
        headers: {
            'X-RapidAPI-Key': '5c57509fbfmsh62f8b2d86d1bfb2p1ec5c5jsnbb2ea867d053',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}