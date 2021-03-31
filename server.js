const path = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const jwt = require('jsonwebtoken')

const router = jsonServer.router(path.join(__dirname, './data/user.json'))

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)


// 取得使用者資料
const getUserDb = () => JSON.parse(fs.readFileSync(path.join(__dirname, './data/user.json'), 'UTF-8'))

// 驗證使用者
const isAuthenticated = ({ email, password }) => {
    return (
        getUserDb().users.findIndex(user => user.email === email && user.password === password) !== -1
    )
}

const SECRET = '1234567890yyyylalala';
const expiresIn = '1h';
const cerateToken = payload => jwt.sign(payload, SECRET, { expiresIn })


// auth
server.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    if(isAuthenticated({ email, password })) {
        const user = getUserDb().users.find(u => u.email === email && u.password === password);
        const { nickname, type } = user;
        const token = cerateToken({ nickname, type });
        return res.status(200).json(token);
    } else {
        const status = 401;
        const message = 'login fail';
        return res.status(401).json({ status, message });
    }
})



// config
server.use(router)
server.listen(1314, () => {
  console.log('JSON Server is running')
})