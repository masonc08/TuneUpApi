import express from 'express';
import { PORT } from '~/config';
import {
  authorize,
  get_categories,
  playlist_search,
  get_playlist,
} from '@/providers/spotify';


const app = express();

app.get('/v1/', (req, res) => {
  res.send('Tune Up!');
});

app.get('/v1/spotify/authorize/', (req, res) => {
    authorize(res);
});

app.get('/v1/spotify/get_categories/', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else {
    get_categories(res, req.query.key);
  }
});

app.get('/v1/spotify/playlist_search/', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else if (!req.query.q) {
    res.status(400).send('There was no query provided');
  } else {
    playlist_search(res, req.query.key, req.query.q);
  }
});

app.get('/v1/spotify/get_playlist/', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else if (!req.query.id) {
    req.status(400).send('There was no playlist ID provided')
  } else {
    get_playlist(res, req.query.key, req.query.id);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
