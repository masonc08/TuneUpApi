import express from 'express';
import { constants } from '@/constants';


const app = express();
app.get('/api', (req, res) => {  // Route handler
    res.send('Tune Up!');
});
app.get('/api/spotify/get_categories', (req, res) => {
    res.send({'pop rap': 'drake'});
});
const PORT = constants.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});