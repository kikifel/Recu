// ************ Require's ************/
const express = require("express");
const path = require('path');
const router = express.Router();
const ProductsController = require("../controllers/ProductsController");
const productValidator = require('../middlewares/productValidator');
const productCreateValidator = require('../middlewares/productCreateValidator');
const multipleUpload = require('../middlewares/multerProducts');
const adminMiddleware = require('../middlewares/adminMiddleware')


router.get('/*', ProductsController.category);

/*** SEARCH PRODUCT */ 
router.get('/search', ProductsController.search2);

/*** GET ONE CATEGORY */ 
router.get('/category/:id', ProductsController.category); 

/*** GET ONE PRODUCT */ 
router.get('/detail/:id', ProductsController.detail); 

/*** GET ALL PRODUCTS */ 
router.get('/', adminMiddleware, ProductsController.index); 

/*** ADMIN PANNEL */ 
router.get('/admin', adminMiddleware, ProductsController.admin); 

/*** CREATE ONE PRODUCT */ 
router.get('/admin/create', adminMiddleware, ProductsController.create); 
router.post('/admin/create', adminMiddleware, multipleUpload, productValidator, productCreateValidator, ProductsController.store); 

/*** EDIT ONE PRODUCT */ 
router.get('/admin/edit/:id', adminMiddleware, ProductsController.edit); 
router.put('/admin/edit/:id', adminMiddleware, multipleUpload, productValidator, ProductsController.update); 

/*** DELETE ONE PRODUCT */ 
router.delete('/admin/edit/:id', adminMiddleware, ProductsController.destroy); 


module.exports = router;