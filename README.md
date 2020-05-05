# TuneUpApi
RESTful APIs for [TuneUp](https://github.com/masonc08/TuneUp), responsible for fetching and parsing data from [Spotify APIs](https://developer.spotify.com).

## Environment
| Key | Value | Default |
|-----|-------|---------|
| SPOTIFY_CLIENT_ID | Obtained from the [Spotify Developers dashboard](https://developer.spotify.com/dashboard/) |  "" |
| SPOTIFY_CLIENT_SECRET | Obtained from the [Spotify Developers dashboard](https://developer.spotify.com/dashboard/) | "" |
| REGION | App deployment region ("US", "CA", etc...), used for music localization | "" |
| PORT | Port to run the server on | 3000 |

## Endpoints
| Endpoint | Description | Parameters | Response |
|----------|-------------|------------|----------|
| /v1/spotify/authorize/| Returns Spotify bearer auth key  | N/A        |[Spotify Documentation](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow)|
| /v1/spotify/get_categories/ | Returns Spotify music categories | key=oauthkey | [Spotify Documentation](https://developer.spotify.com/documentation/web-api/reference/browse/get-list-categories/)|
| /v1/spotify/playlist_search/| Returns Spotify playlist query of given search|key=oauthkey, q=query| See below |
| /v1/spotify/get_playlist/ | Returns PLAYABLE songs and sample tracks | key=oauthkey, id=playlistid | See below |
| /v1/spotify/get_playlists_from_category |  Returns Spotify playlist query of given category | key=oauthkey, id=playlistid | See below |

## Sample Responses
### v1/spotify/playlist_search/ AND /v1/spotify/get_playlists_from_category
```
{
  "href": [Spotify query API url],
  "playlist": [
    {
      "name": [NAME],
      "description": [PLAYLIST DESCRIPTION],
      "id": [Spotify playlist ID],
      "image": [IMAGE URL]
    }
  ]
}
```

### v1/spotify/get_playlist/
```
  {
    "tracks": [
        {
            "id": [ID],
            "name": [NAME],
            "preview_url": [URL],
            "image": [URL]
        }
    ],
    "tracksWithPreview": 1,
    "totalTracks": 1
}
```
