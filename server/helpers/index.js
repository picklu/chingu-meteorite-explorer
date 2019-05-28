const path = require('path');

const helper = {};

helper.ignoreFavicon = (req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
};

helper.renderFavicon = (req, res, next) => {
  if (req.originalUrl === '/favicon.ico') {
    res
      .status(200)
      .sendFile(path.join(__dirname, '../../dist/static/media/favicon.ico'));
  } else {
    next();
  }
};

module.exports = helper;
