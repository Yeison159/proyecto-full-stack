const responseError = require("../utils/responseError");
const responseOk = require("../utils/responseOk");

const FavoriteModel = require("./../models/favoriteModel");


const addFavorite = async (favoriteData) => {
    try {
        const favorite = new FavoriteModel(favoriteData);
        await favorite.save();
        return responseOk({ favorite });
    } catch (error) {
        console.log(error)
        return responseError(500, "Server error");
    }
};


const getFavorites = async  (user) => {
    try {

        const favorites = await FavoriteModel.findOne({userId: user}).exec();

        if (favorites) {
            return responseOk({ favorites });
        }
        return responseError(404, "Favorite not found");
    } catch (error) {

        return responseError(500, "Server error");
    }
}

const deleteFavorite = async (id) => {
    try {

        const favorites = await FavoriteModel.deleteOne({_id: id});
         console.log(favorites)
        if (favorites) {
            return responseOk({ favorites });
        }
        return responseError(404, "Favorite not found");
    }catch (e) {
        return responseError(500, "Server error");
    }
}

module.exports = {
    addFavorite,
    getFavorites,
    deleteFavorite
}
