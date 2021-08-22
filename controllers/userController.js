const data = require('../data')
const getUser = (req, res, next) => {
    try {
        const user = data.master_users.users;
    res.json({data : user})
    } catch (error) {
        res.error(error)
    }
    
}

module.exports = {
    getUser
}