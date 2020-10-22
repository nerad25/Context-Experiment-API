const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  //INSERT USER
  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO user () VALUES (?)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  // END INSERT USER

  //SELECT FROM USER
  router.get('/event', function (req, res, next) {
    db.query(
      'SELECT id FROM user WHERE userID=?',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
  //END SELECT FROM USER

  //DELETE USER
  router.delete('/event/:id', function (req, res, next) {
    db.query(
      'DELETE FROM user WHERE userID=?',
      [req.params.id, owner],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;