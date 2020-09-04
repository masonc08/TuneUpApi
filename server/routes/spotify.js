import express from 'express';
import Joi from 'joi';
import {
  authorize,
  get_categories,
  playlist_search,
  get_playlist,
  get_playlists_from_category,
} from '@/providers/spotify';


const router = express.Router();

router.get('/authorize', (_, res) => {
  authorize(res);
});

router.get('/get_categories', (req, res) => {
  const schema = Joi.object({
    key: Joi.string().required()
  });
  const validation = schema.validate(req.query);
  if (validation.error) {
    res.status(400).send({error: validation.error.details[0].message});
  } else {
    get_categories(res, req.query.key);
  }
});

router.get('/playlist_search', (req, res) => {
  const schema = Joi.object({
    key: Joi.string().required(),
    q: Joi.string().required()
  });
  const validation = schema.validate(req.query);
  if (validation.error) {
    res.status(400).send({error: validation.error.details[0].message});
  } else {
    playlist_search(res, req.query.key, req.query.q);
  }
});

router.get('/get_playlist', (req, res) => {
  const schema = Joi.object({
    key: Joi.string().required(),
    id: Joi.string().required()
  });
  const validation = schema.validate(req.query);
  if (validation.error) {
    res.status(400).send({error: validation.error.details[0].message});
  } else {
    get_playlist(res, req.query.key, req.query.id);
  }
});

router.get('/get_playlists_from_category', (req, res) => {
  const schema = Joi.object({
    key: Joi.string().required(),
    id: Joi.string().required()
  });
  const validation = schema.validate(req.query);
  if (validation.error) {
    res.status(400).send({error: validation.error.details[0].message});
  } else {
    get_playlists_from_category(res, req.query.key, req.query.id);
  }
});

export default router;
