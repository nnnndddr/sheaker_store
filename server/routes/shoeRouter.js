const Router = require('express')
const router = new Router()
const shoeController = require('../controllers/shoeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), shoeController.create)
router.get('/', shoeController.getAll)
router.get('/:id', shoeController.getOne)
router.get('/delete/:id', shoeController.deleteById)
router.get('/find/:name', shoeController.getOneName)



module.exports = router