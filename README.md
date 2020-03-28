# TuneUpApi
WIP: RESTful APIs for TuneUp

## Endpoints
| Endpoint | Description | Parameters | Response |
|----------|-------------|------------|----------|
| /v1/spotify/authorize/| Returns Spotify bearer auth key  | N/A        |[Spotify Documentation](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow)|
| /v1/spotify/get_categories/ | Returns Spotify music categories | key=oauthkey | [Spotify Documentation](https://developer.spotify.com/documentation/web-api/reference/browse/get-list-categories/)|
| /v1/spotify/playlist_search/| Returns Spotify playlist query of given search|key=oauthkey, q=query| See below |
| /v1/spotify/get_playlist/ | Returns songs and sample tracks | key=oauthkey, id=playlistid | See below |


## Sample Responses
### v1/spotify/playlist_search/
```
{
  "href": [Spotify query API url],
  "playlist": [
    {
      "name": [NAME],
      "description": [PLAYLIST DESCRIPTION],
      "href": [Spotify playlist API url],
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