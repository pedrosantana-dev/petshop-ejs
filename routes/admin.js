const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const path = require('path');
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.join(__dirname,'../public/uploads'));
    },
    filename: (req, file, callback) =>{
        const name = `${file.name}-${new Date().getTime()}-${file.originalname}`;
        callback(null, name);
    }
});
const upload = multer({storage});

router.get('/', adminController.painel);
router.get('/servicos', adminController.index);
router.post('/servicos/novo',
    upload.single('foto-do-servico'), adminController.create);


module.exports = router;