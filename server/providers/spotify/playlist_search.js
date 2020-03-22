import request from 'request';
import { urls } from './';


const process_results = body => {
  const response = {};
  response['href'] = body['playlists']['href'];
  response['playlists'] = [];
  for (const item of body['playlists']['items']) {
    response['playlists'].push({
      'name': item['name'] || '',
      'description': item['description'] || '',
      'href': item['href'] || '',
      'image': item['images'][0]['url'] || '',
    });
  }
  return response;
}

export const playlist_search = (res, key, query) => {
  const options = {
    'method': 'GET',
    'url': urls.playlist_search(query),
    'headers': {
      'Authorization': `Bearer ${key}`
    }
  };
  request(options, (error, response) => { 
    if (error) {
      throw new Error(error);
    }
    const query_results = JSON.parse(response.body);
    if (response.statusCode != 200) {
      res.status(response.statusCode).send(query_results);
      return;
    }
    res.status(response.statusCode).send(
      process_results(query_results)
    );
  });    
};