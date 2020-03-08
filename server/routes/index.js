import express from 'express';
import { PORT } from '~/config';
import {
    authorize,
    get_categories,
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
    get_categories(res, req.query.key);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
