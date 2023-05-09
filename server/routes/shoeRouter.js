const Router = require('express')
const router = new Router()
const shoeController = require('../controllers/shoeController')

router.post('/', shoeController.create)
router.get('/', shoeController.getAll)
router.get('/:id', shoeController.getOne)


module.exports = router