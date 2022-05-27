const {getPropertys, getPropertyDetail, addProperty, delProperty, putProperty, addComment} = require("../services/propertyService");
const getProperty = (req, res) => {
    try {
        const {type, businessType} = req.query;
        const {statusHttp, response} = getPropertys()
        res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
}


const getPropertyById = (req, res) => {
    try {
        const id = req.params.id;
        const {statusHttp, response} = getPropertyDetail(id)

        res.status(statusHttp).json(response);
    } catch (e) {
        res.status(500).send(e);
    }
}


const saveProperty = (req, res) => {
    try {

        const {statusHttp, response} = addProperty({...req.body})

        res.status(statusHttp).json(response);
    } catch (e) {
        res.status(500).send(e);
    }
}

const deleteProperty = (req, res) => {
    try {
        const id = req.params.id;
        const {statusHttp, response} = delProperty(id)

        res.status(statusHttp).json(response);
    } catch (e) {
        res.status(500).send(e);
    }
}
const updateProperty = (req, res) => {
    try {
        const id = req.params.id;
        const {statusHttp, response} = putProperty(id, {...req.body})

        res.status(statusHttp).json(response);
    } catch (e) {
        res.status(500).send(e);
    }
}

const saveComment = (req, res) => {
    try {
        const id = req.params.id;
        const {statusHttp, response} = addComment(id, {...req.body})

        res.status(statusHttp).json(response);
    } catch (e) {
        res.status(500).send(e);
    }
}


module.exports = {
    getProperty,
    getPropertyById,
    saveProperty,
    deleteProperty,
    updateProperty,
    saveComment
}
