const API_KEY = 'f80c98cc93a3de2c8ef47465ad9d38be';
const API_BASE = 'https://api.themoviedb.org/3'


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => 
        [
            {
                slug: 'originals',
                title: 'netflix originals',
                items: await basicFetch(`/discover/tv?with_networks=213&api_key=${API_KEY}`)
            },
            {
                slug: 'anime',
                title: 'Anime',
                items: await basicFetch(`/keyword/210024/movies?api_key=${API_KEY}&language=en-US`)
            },
            {
                slug: 'trending',
                title: 'Trending',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'top rated',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            }
        ],
    getMovieInfo: async (movieId, type) => {
        let info = {}
        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`)
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`)
                break
            }
        }

        return info
    }
}
