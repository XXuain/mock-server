const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const { usersData } = require('../data/users')

const SECRET = '1234567890yyyylalala';
const expiresIn = '1h';
const cerateToken = payload => jwt.sign(payload, SECRET, { expiresIn })

// 驗證使用者
const isAuthenticated = ({ email, password }) => {
    const users = usersData[200];

    return (
        users.findIndex(user => user.email === email && user.password === password) !== -1
    )
}

// auth
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if(isAuthenticated({ email, password })) {
        const user = usersData[200].find(u => u.email === email && u.password === password);
        const { nickname, type } = user;
        const token = cerateToken({ nickname, type });
        return res.status(200).json({token});
    } else {
        throw { status: 401, message: 'login fail'};
    }
})

module.exports = router;