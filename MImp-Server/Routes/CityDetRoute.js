const express = require('express');
const CityDetModel = require('../models/CityDetSchema');

const router = express.Router();


router.get('/all', async (req, res) => {
    try {
        const data = await CityDetModel.find();
        if (!data) {
            return res.status(500).json('No Cities Found');
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get('/get/:cityname', async(req, res) => {
    try {
        const t = await CityDetModel.findOne({cityname: req.params.cityname});
        if(!t){
            return res.status(400).json({message: 'City not found'});
        }
        return res.status(200).json(t);
    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error'});
    }
})

router.post('/add', async (req, res) => {
    try {
        const temp = await CityDetModel.findOne({ cityname: req.body.cityname });
        await CityDetModel.create(req.body);
        res.status(200).json({ message: 'City Added Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const temp = await CityDetModel.findOne({ _id: id });
    if (!temp) {
        res.status(400).json({ message: 'City not found' });
    }
    await CityDetModel.deleteOne({ _id: id });
    res.status(200).json({ message: 'City Deleted Successfully' });
});

module.exports = router;