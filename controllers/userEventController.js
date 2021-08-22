const data = require("../data")
const getEventByEmail = (req, res, next) => {
    try {
        const event = data.user_events.user_events.filter(data => data.email === req.params.email)
        const event_user = data.master_events.events.filter(datas => event.find(data => data.event_code == datas.code) !== undefined )
        res.json({data : event_user})
    } catch (error) {
        res.error(error)
    }
}

module.exports = {
    getEventByEmail
}