import express from 'express';
import {
  authorize,
  get_categories,
  playlist_search,
  get_playlist,
  get_playlists_from_category,
} from '@/providers/spotify';


const router = express.Router();

router.get('/authorize', (req, res) => {
    authorize(res);
});

router.get('/get_categories', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else {
    get_categories(res, req.query.key);
  }
});

router.get('/playlist_search', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else if (!req.query.q) {
    res.status(400).send('There was no query provided');
  } else {
    playlist_search(res, req.query.key, req.query.q);
  }
});

router.get('/get_playlist', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else if (!req.query.id) {
    req.status(400).send('There was no playlist ID provided')
  } else {
    get_playlist(res, req.query.key, req.query.id);
  }
});

router.get('/get_playlists_from_category', (req, res) => {
  if (!req.query.key) {
    res.status(400).send('There was no auth key provided');
  } else if (!req.query.id) {
    req.status(400).send('There was no category ID provided')
  } else {
    get_playlists_from_category(res, req.query.key, req.query.id);
  }
});

export default router;