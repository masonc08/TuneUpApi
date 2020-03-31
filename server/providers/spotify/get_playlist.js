import request from 'request';
import { urls } from './';


const process_tracks = body => {
  const response = {};
  let previewUrlCount = 0;
  response['tracks'] = [];
  for (const item of body['items']){
    const track = item.track;
    if (!track) {
      continue;
    }
    const previewUrl = track.preview_url;
    if (previewUrl){
      previewUrlCount++;
    }
    response['tracks'].push({
      id: track.id || '',
      name: track.name || '',
      preview_url: previewUrl || '',
      image: track.album.images[0].url,
    });
  }
  response['tracksWithPreview'] = previewUrlCount;
  response['totalTracks'] = response.tracks.length;
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
  request(options, (error, response) => {
    if (error) {
      throw new Error(error);
    }
    const returned_tracks = JSON.parse(response.body);
    if (response.statusCode != 200) {
      res.status(response.statusCode).send(query_results);
    } else {
      res.status(response.statusCode).send(
        process_tracks(returned_tracks)
      );
    }
  });
};