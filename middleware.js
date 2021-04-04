
const logger = (options) => {
  return function (req, res, next) {
    console.log('logger: ', req.method, req.baseUrl + req.url);
    // Implement the middleware function based on the options object
    next()
  }
}

// module.exports = function (options) {
//   return function (req, res, next) {
//     // Implement the middleware function based on the options object
//     next()
//   }
// }

module.exports = logger;