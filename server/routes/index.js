import express from 'express';
import { PORT } from '~/config';
import {
    authorize,
    get_categories,
    playlist_search,
} from '@/providers/spotify';


const app = express();

app.get('/v1', (req, res) => {
    res.send('Tune Up!');
});

app.get('/v1/spotify/authorize/', (req, res) => {
    try {
        authorize(res);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/v1/spotify/get_categories/', (req, res) => {
    if (!req.query.key) {
        res.status(400).send('There was no auth key provided');
        return;
    }
    try {
        get_categories(res, req.query.key);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/v1/spotify/playlist_search/', (req, res) => {
    if (!req.query.key) {
        res.status(400).send('There was no auth key provided');
    } else if (!req.query.q) {
        res.status(400).send('There was no query provided');
    } else {
        try {
            playlist_search(res, req.query.key, req.query.q);
        } catch (e) {
            res.status(500).send(e);
        }
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
