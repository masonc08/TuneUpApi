import express from 'express';
import { PORT } from '~/config';
import { authorize } from '@/providers/spotify/authorize';


const app = express();
app.get('/api', (req, res) => {
    res.send('Tune Up!');
});
app.get('/api/spotify/get_categories/', (req, res) => {
    authorize(response => res.send(response));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
