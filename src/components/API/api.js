import axios from 'axios';

export const API_KEY_3 = "d7f2bc2d578c8e26c1660fb71abe50bf";

export const API_KEY_4 =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2YyYmMyZDU3OGM4ZTI2YzE2NjBmYjcxYWJlNTBiZiIsInN1YiI6IjVlOTA3M2JjZTY0MGQ2MDAxMzFmMWI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CGIiDBCrUIpmntX9NTmDltAbx4PnwTQZVLPVR2cY1ng";

const iniMovieApi = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
})

export const UserApi = {
    getMoviesProfile: () => {
        return iniMovieApi(
            `discover/movie?api_key=${API_KEY_3}`
        ).then(response => {
            return response.data
        });
    },
    getSortPopularityMovies: (page=1) => {
        return iniMovieApi(
            `discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
            .then(response => {
                return response.data
            });
    },
    getSortRevenueMoviesProfile: (page=1) => {
        return iniMovieApi(`discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${page}`)
            .then(response => {
                return response.data
            });
    },
    getSortVoteAverageMoviesProfile: (page=1) => {
        return iniMovieApi(`discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}`)
            .then(response => {
                return response.data
            });
    },
    getSortReleaseMoviesProfile: (page=1) => {
        return iniMovieApi(`discover/movie?api_key=${API_KEY_3}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=${page}`)
            .then(response => {
                return response.data
            });
    },
    getSearchMovies: (searchFilm, page=1) => {
        return iniMovieApi(
            `search/movie?api_key=${API_KEY_3}&query=${searchFilm}&page=${page}`
        )
            .then(response => {
                return response.data
            });
    }
};

