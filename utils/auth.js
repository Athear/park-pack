const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  const apiAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.status(401).send('Unauthorized access to api');
    } else {
      next();
    }
  };
  
  module.exports = { withAuth, apiAuth } ;
  