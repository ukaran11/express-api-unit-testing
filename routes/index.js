const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById);
router.post('/users/:id', controllers.updateUser);
router.post('/users/:id', controllers.deleteUser);

module.exports = router;