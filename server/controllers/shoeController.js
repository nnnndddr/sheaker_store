const uuid = require('uuid')
const path = require('path')
const {Shoe} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShoeController {
    async create(req, res, next) {
        try{
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const shoe = await Shoe.create({name, price, brandId, typeId, img: filename})

            return res.json(shoe)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }

}

module.exports = new ShoeController()