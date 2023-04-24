const { Router } = require('express');
const { crearUsuario ,loginUsuario, revalidarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();


//Crear un nuevo usuario
router.post('/new', [
    check('name', 'Nombre no puede ser vacío').not().isEmpty(),
    check('email', 'Email no puede ser vacío').not().isEmpty(),
    check('password', 'La contraseña no puede ser vacía').not().isEmpty(),
    check('password', 'La contraseña minima de 6').isLength( {min : 6} ),
    validarCampos
], crearUsuario);
//nombre : .not().isEmpty()
//password 6 min



//Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength( {min : 6} ),
    validarCampos
], loginUsuario);


//Validar y revalida token
router.get('/renew', validarJWT, revalidarToken);

















module.exports = router;