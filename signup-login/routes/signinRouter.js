const express = require('express'),
  userController = require('../controllers/userController')
router = express.Router();

router.route('/')
  .post(function(req, res) {
    userController.signin(req.body, function(err, user) {
      if (err) {
        console.dir(err);
        res.status(400).json({
          success: false,
          message: err
        });
      } else {
        //TODO make session a randomly generated token
        req.session.user = user;
        res.status(200).json({
          success: true
        });
      }
    });

  });
module.exports = router;
