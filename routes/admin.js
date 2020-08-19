const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
console.log('are you even an adminController', adminController, 'with other functions', adminController.getAddProduct);

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
