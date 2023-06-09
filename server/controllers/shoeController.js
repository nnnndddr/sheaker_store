const uuid = require('uuid')
const path = require('path')
const {Shoe, ShoeInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ShoeController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, size, info, desc} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const shoe = await Shoe.create({name, price, brandId, size, desc, typeId, img: filename})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ShoeInfo.create({
                        title: i.title,
                        description: i.description,
                        ShoeId: shoe.id
                    })
                )
            }


            return res.json(shoe)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let shoes
        if (!brandId && !typeId) {
            shoes = await Shoe.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            shoes = await Shoe.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            shoes = await Shoe.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            shoes = await Shoe.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(shoes)


    }

    async getOne(req, res) {
        const {id} = req.params
        const shoe = await Shoe.findOne(
            {
                where: {id},
                include: [{model: ShoeInfo, as: 'info'}]
            },
        )
        return res.json(shoe)
    }
    async getOneName(req, res) {
        const {name} = req.params
        const shoe = await Shoe.findAndCountAll(
            {
                where: {name},
                include: [{model: ShoeInfo, as: 'info'}]
            },
        )
        return res.json(shoe)
    }

    async deleteById(req, res) {
        const {id} = req.params
        const item = await Shoe.findOne(
            {
                where: {id},
                include: [{model: ShoeInfo, as: 'info'}]
            })
        await item.destroy()


        return res.json(item)
    }

}

module.exports = new ShoeController()