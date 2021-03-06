import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '~/config';
import { urls } from './urls';
import btoa from 'btoa';
import request from 'request';


export const authorize = (res) => {
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    res.status(503).send({
      error: 'Spotify client keypair not detected. Are environment variables configured correctly?'
    });
    return;
  }
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
  request.post(options, (error, response) => { 
    if (error) {
        throw new Error(error);
    }
    const body = JSON.parse(response.body);
    const apiResponse = { access_token: body.access_token };
    res.status(response.statusCode).send(apiResponse);
  });
};
