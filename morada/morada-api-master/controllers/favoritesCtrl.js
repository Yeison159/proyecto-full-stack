const {addFavorite, getFavorites, deleteFavorite} = require("../services/favoritesService");

const create = async (req, res) => {
    try {
        const property = req.body;
        const {statusHttp, response} = await addFavorite(property);
        return res.status(statusHttp).json(response);

    } catch (e) {
        res.status(500).send(e);
    }
}

const getFavoriteByUser = async (req, res) => {
    try {
        const user = req.params.id;

        const {statusHttp, response} = await getFavorites(user);
        return res.status(statusHttp).json(response);
    } catch (error) {
        res.status(500).send(error);
    }

}

const deleteone = async (req, res) => {
    try {
        const id = req.params.id;
        const {statusHttp, response} = await deleteFavorite(id);
        return res.status(statusHttp).json(response);
    } catch (e) {
        res.status(500).send(error);
    }
}

module.exports = {
    create,
    getFavoriteByUser,
    deleteone
};
