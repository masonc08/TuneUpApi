import express from 'express';

import loggerMiddleware from '@/middleware/logger';
import spotifyRoute from '@/routes/spotify';
import { PORT } from '~/config';


const app = express();

app.use(loggerMiddleware);
app.use('/v1/spotify', spotifyRoute);
app.get('/v1', (_, res) => {
  res.send('Tune Up!');
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
