const responseError = require("../utils/responseError");
const responseOk = require("../utils/responseOk");

const FavoriteModel = require("./../models/favoriteModel");
const UserModel = require("../models/userModel");


const addFavorite = async (favoriteData) => {
    try {

        if (await validateFavorite(favoriteData.propertyId, favoriteData.userId )) {
            return responseError(400, 'Property is alredy add');
        }

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

        const favorites = await FavoriteModel.find({userId: user}).populate("propertyId")
            .exec();

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
        if (favorites) {
            return responseOk({ favorites });
        }
        return responseError(404, "Favorite not found");
    }catch (e) {
        return responseError(500, "Server error");
    }
}

const validateFavorite = async (property, user) => {
    try {
        const checkFavorite = await FavoriteModel.findOne({ propertyId: property, userId:  user});
        return checkFavorite ? true : false;
    } catch (error) {
        return responseError(500, 'Server error');
    }
}

module.exports = {
    addFavorite,
    getFavorites,
    deleteFavorite
}
