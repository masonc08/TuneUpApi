import express from 'express';
import { PORT } from '~/config';
import { authorize } from '@/providers/spotify/authorize';


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
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
