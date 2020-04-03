export const urls = {
  authorize: 'https://accounts.spotify.com/api/token',
  get_categories: 'https://api.spotify.com/v1/browse/categories',
  playlist_search: query => `https://api.spotify.com/v1/search?q=${query}&type=playlist`,
  get_playlist: id => (
    `https://api.spotify.com/v1/playlists/${id}/` +
    `tracks?fields=items(track(name,preview_url,id,album(images)))`
  ),
  get_playlist_from_category: id => (
    `https://api.spotify.com/v1/browse/categories/${id}/playlists`
  )
};