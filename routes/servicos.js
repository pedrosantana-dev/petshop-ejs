const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    let servicosStr = fs.readFileSync('servicos.json', { encoding: 'utf-8' });    
    let servicosList = [JSON.parse(servicosStr)];
    console.log(servicosList);
    res.render('servicos', { 'servicosList': servicosList });
});



module.exports = router;