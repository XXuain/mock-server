const errorData = {
  401: {
    message: 'Unauthorized' // 不知道身份
  },
  403: {
    message: 'Forbidden' // 知道身份但不授權
  },
  404: {
    message: 'Sorry cant find that!'
  },
  500: {
    message: 'Internal Server Error'
  }
};

const notFound = (req, res) => {
  console.log('notFound');
  throw { status: 404 };
};

const onError = (err, req, res, next) => {
  console.log('onError');
  const {status = 500, message = errorData[status].message} = err;
  return res.status(status).json({status, message})
};
module.exports = {onError, notFound}
