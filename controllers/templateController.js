const templateHtml = require('../data/template.json')

const getTemplate = (req, res, next) => {
    try {
        const responseData = (res, obj) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.json(obj);
        };
        responseData(res, templateHtml)
    } catch (error) {
        res.error(error)
    }
}

module.exports = {getTemplate}