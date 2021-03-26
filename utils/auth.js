const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  const apiAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      return res.status(401);
    } else {
      next();
    }
  };
  
  module.exports = { withAuth, apiAuth } ;
  