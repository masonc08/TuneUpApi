import request from 'request';
import { urls } from './';
import { process_body } from './utils';


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
    } else {
      res.status(response.statusCode).send(
        process_body(query_results)
      );
    }
  });    
};