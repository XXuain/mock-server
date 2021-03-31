const path = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, './data/user.json'))
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)


const getUserDb = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, './data/user.json'), 'UTF-8'))
}

const isAuthenticated = ({ email, password }) => {
    return (
        getUserDb().users.findIndex(
            user => user.email === email && user.password === password
        ) !== -1
    )
}

// auth
server.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    if(isAuthenticated({ email, password })) {
        const token = 'saddsfdsferfdvf.sfrefdcdscds.09878987678sdf'
        return res.status(200).json(token);
    } else {
        console.log('login fail');
        return res.status(401).json('login fail');
    }
})



// config
server.use(router)
server.listen(1314, () => {
  console.log('JSON Server is running')
})