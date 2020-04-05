import request from 'request';
import { urls } from './';
import { process_body } from './utils';


export const get_playlists_from_category = (res, key, id) => {
  const options = {
    'method': 'GET',
    'url': urls.get_playlists_from_category(id),
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
      res.status(response.statusCode).send(returned_tracks);
    } else {
      res.status(response.statusCode).send(
        process_body(returned_tracks)
      );
    }
  });
};