const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    himg: {
        type: String,
        required: true
    },
    hname: {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    }
});

const placeSchema = mongoose.Schema({
    pimg: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    }
});


const cityDetSchema = mongoose.Schema({
    cityname: {
        type: String,
        requirde: true
    },
    cityimage: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    hotels: {
        type: [hotelSchema],
        required: true
    },
    places: {
        type: [placeSchema],
        required: true
    }

})

const CityDetModel = mongoose.model('CityDetails', cityDetSchema);
module.exports = CityDetModel;