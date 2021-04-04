const express = require('express')
var cors = require('cors')
const app = express()

app.get('/', function (req, res) {
  console.log('------', req.headers);
  res.send('ddd')
});

app.post('/post', function (req, res) {
  console.log(req);
  res.send('Hello World')
})



// // 取得使用者資料
// const getUserDb = () => JSON.parse(fs.readFileSync(path.join(__dirname, './data/user.json'), 'UTF-8'))

// // 驗證使用者
// const isAuthenticated = ({ email, password }) => {
//     return (
//         getUserDb().users.findIndex(user => user.email === email && user.password === password) !== -1
//     )
// }

// const SECRET = '1234567890yyyylalala';
// const expiresIn = '1h';
// const cerateToken = payload => jwt.sign(payload, SECRET, { expiresIn })


// // auth
// server.post('/auth/login', (req, res) => {
//     const { email, password } = req.body;

//     if(isAuthenticated({ email, password })) {
//         const user = getUserDb().users.find(u => u.email === email && u.password === password);
//         const { nickname, type } = user;
//         const token = cerateToken({ nickname, type });
//         return res.status(200).json(token);
//     } else {
//         const status = 401;
//         const message = 'login fail';
//         return res.status(401).json({ status, message });
//     }
// })


app.use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

module.exports = app;
