import request from 'request';
import { urls } from './';
import { process_body } from './utils';


export const get_playlist_from_category = (res, key, id) => {
  const options = {
    'method': 'GET',
    'url': 'https://api.spotify.com/v1/browse/categories/at_home/playlists',
    'headers': {
      'Authorization': 'Bearer BQBj4XRrivB2m52_UM-hhTbUxxjHoFBwln4E1FinAziGdeKQOyhI5RdCOE9sWcZVesxCfBB6mPmptziMuaA'
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
        process_body(returned_tracks)
      );
    }
  });
};