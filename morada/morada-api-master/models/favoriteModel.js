const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavoriteSchema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'properties',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, {
    timestamps: true
});

const Favorite = mongoose.model('favorites', FavoriteSchema);
module.exports = Favorite;
