import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '~/config';
import { urls } from './urls';
import btoa from 'btoa';
import request from 'request';

export const authorize = (send) => {
    const b64auth = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
    const options = {
      'method': 'POST',
      'url': urls.authorize,
      'headers': {
        'Authorization': `Basic ${b64auth}`,
      },
      form: {
        'grant_type': 'client_credentials'
      }
    };
    request(options, function (error, response) { 
        if (error) {
            throw new Error(error);
        }
        send(JSON.parse(response.body));
    });
};