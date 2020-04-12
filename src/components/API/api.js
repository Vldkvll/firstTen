import axios from 'axios';

export const API_KEY_3 = "d7f2bc2d578c8e26c1660fb71abe50bf";

export const API_KEY_4 =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2YyYmMyZDU3OGM4ZTI2YzE2NjBmYjcxYWJlNTBiZiIsInN1YiI6IjVlOTA3M2JjZTY0MGQ2MDAxMzFmMWI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CGIiDBCrUIpmntX9NTmDltAbx4PnwTQZVLPVR2cY1ng";

// const iniMovieApi = axios.create({
//     baseURL: `https://api.themoviedb.org/3/movie/550?api_key=d7f2bc2d578c8e26c1660fb71abe50bf`,
//
//
// })

export const UserApi = {
    getMoviesProfile: () => {
        return axios(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}`
        ).then(response => {
            return response.data.results
        });
    },
    getSortPopularityMovies: () => {
        return axios(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => {
                return response.data.results
            });
    },
    getSortRevenueMoviesProfile: () => {
        return axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1`)
            .then(response => {
                return response.data.results
            });
    },
    getSortVoteAverageMoviesProfile: () => {
        return axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=vote_average.gte&include_adult=false&include_video=false&page=1`)
            .then(response => {
                return response.data.results
            });
    },


};


// https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`
