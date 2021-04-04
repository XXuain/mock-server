module.exports = function (err, req, res, next) {
  console.error('------', res.headersSent)
  return res.status(err.status || 500).json({status: err.status, message: err.message})
};
