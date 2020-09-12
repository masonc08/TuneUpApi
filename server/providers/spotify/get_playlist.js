import request from 'request';
import { urls } from './';


export const process_tracks = body => {
  const response = {};
  response.tracks = [];
  for (const item of body['items']){
    const track = item.track;
    if (!track) {
      continue;
    }
    const previewUrl = track.preview_url;
    if (previewUrl) {
      response['tracks'].push({
        id: track.id || '',
        name: track.name || '',
        preview_url: previewUrl || '',
        image: track.album.images[0].url,
      });
    }
  }
  response.tracksWithPreview = response.tracks.length;
  response.totalTracks = body.items.length;
  return response;
};

export const get_playlist = (res, key, id) => {
  const options = {
    'method': 'GET',
    'url': urls.get_playlist(id),
    'headers': {
      'Authorization': `Bearer ${key}`
    }
  };
  console.log(urls.get_playlist(id))
  request(options, (error, response) => {
    if (error) {
      throw new Error(error);
    }
    const returned_tracks = JSON.parse(response.body);
    if (response.statusCode != 200) {
      res.status(response.statusCode).send(JSON.parse(response.body));
    } else {
      res.status(response.statusCode).send(
        process_tracks(returned_tracks)
      );
    }
  });
};