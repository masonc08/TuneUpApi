import express from 'express';

import spotifyRoute from '@/routes/spotify';
import { PORT } from '~/config';


const app = express();
app.use('/v1/spotify', spotifyRoute);
app.get('/v1', (_, res) => {
  res.send('Tune Up!');
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});