import request from 'request';
import { urls } from './';

export const get_categories = (res, key) => {
  const options = {
    'method': 'GET',
    'url': urls.get_categories,
    'headers': {
      'Authorization': `Bearer ${key}`,
    }
  };
  request(options, (error, response) => { 
    if (error) {
      throw new Error(error)
    };
    console.log(options);
    res.status(response.statusCode).send(
      JSON.parse(response.body)
    );
  });
}