const Router = require('express')
const router = new Router()
const shoeController = require('../controllers/shoeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), shoeController.create)
router.get('/', shoeController.getAll)
router.get('/:id', shoeController.getOne)


module.exports = router