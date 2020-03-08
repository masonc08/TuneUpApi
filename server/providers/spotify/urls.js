export const urls = {
    authorize: 'https://accounts.spotify.com/api/token',
    get_categories: 'https://api.spotify.com/v1/browse/categories',
    playlist_search: (query) => (
        `https://api.spotify.com/v1/search?q=${query}&type=playlist`
    ),
};