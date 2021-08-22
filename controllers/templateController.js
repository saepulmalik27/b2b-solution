const templateHtml = require('../data/template.json')

const getTemplate = (req, res, next) => {
    try {
        res.json({data : templateHtml})
    } catch (error) {
        res.error(error)
    }
}

module.exports = {getTemplate}