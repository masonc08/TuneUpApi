export default (req, _, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};