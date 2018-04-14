const routes = require('express').Router();

routes.route('/')
.get(function(req, res, next){
  res.status(200).json({message: 'GET received at "/"'});
  console.dir(req.body);
  next();
}).post(function(req, res, next){
  res.status(200).json({message: 'POST received at "/"'});
  next();
});
routes.use('/signup', require('./signupRouter.js'))
module.exports = routes;