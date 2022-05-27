const express = require('express');
const {saveProperty} = require("../controllers/propertyCtrl");
const {getProperty, getPropertyById, deleteProperty, updateProperty, saveComment} = require("../controllers/propertyCtrl");
const router = express.Router();

router.get('/', getProperty);
router.get('/:id', getPropertyById);
router.post('/', saveProperty);
router.post('/:id', saveComment);
router.delete('/:id', deleteProperty);
router.put('/:id', updateProperty);



module.exports = router;
