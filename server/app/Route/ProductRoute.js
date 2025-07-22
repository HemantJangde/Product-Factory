const express = require('express');
const {
    findAll,
    findNotesById,
    create,
    deleteone,
    update
} = require('../controller/productController.js');

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findNotesById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteone);

module.exports = { router };
