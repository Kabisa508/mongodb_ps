const express = require('express');
const router = express.Router();

const control = require('../controller/controller');
const middle = require('../middleware/middleware');

router.get('/', middle.logger, control.getStudent);
router.post('/add', middle.logger, control.addStudent);
//router.put('/update/:id', middle.logger, control.updateStudent);
//router.delete('/delete/:id', middle.logger, control.deleteStudent);

module.exports = router;