const data = require('../data')
const getEvent = (req, res, next) => {
    try {
        const event = data.master_events.events;
    res.json({data : event})
    } catch (error) {
        res.error(error)
    }
    
}

module.exports = {
    getEvent
}