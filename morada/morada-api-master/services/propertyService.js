const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const getPropertys = () => {
    return responseOk({data: []});
}
const getPropertyDetail = (id) => {
    return responseOk({data: {}});
}

const addProperty = (body) => {
    return responseOk({data: body});
}

const delProperty = (id) => {
    return responseOk({mensaje: "Se ha eliminado la propiedad"});
}

const putProperty = (id, body) => {
    return responseOk({mensaje: "Se ha actualizado la propiedad"});
}

const addComment = (id, body) => {
    return responseOk({mensaje: "Se ha agregado la notificacion de interes de manera correcta"});
}

module.exports = {
    getPropertys,
    getPropertyDetail,
    addProperty,
    delProperty,
    putProperty,
    addComment
}
