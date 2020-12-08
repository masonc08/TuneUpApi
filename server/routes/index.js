import express from 'express';
import cors from 'cors';
import { PORT } from '~/config';
import {
  authorize,
  get_categories,
  playlist_search,
  get_playlist,
  get_playlists_from_category,
} from '@/providers/spotify';


const app = express();
app.use(cors({credentials: true, origin: true}));
app.options('*', cors());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

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

app.get('/v1/spotify/get_playlists_from_category/', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else if (!req.query.id) {
    req.status(400).send('There was no category ID provided')
  } else {
    get_playlists_from_category(res, req.query.key, req.query.id);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
