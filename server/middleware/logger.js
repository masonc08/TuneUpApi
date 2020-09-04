import moment from 'moment';


export default (req, _, next) => {
  console.log(`[${moment().format()}] ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};