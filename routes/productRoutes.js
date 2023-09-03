import express from 'express';
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"
import { braintreePaymentController, 
         braintreeTokenController, 
         createProductController, 
         deleteProductController, 
         getProductController, 
         getSingleProductController, 
         productCategoryController, 
         productCountController, 
         productListController, 
         productPhotoController, 
         productfiltersController, 
         realatedProductController, 
         searchProuctController, 
         updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

//routes
router.post('/create-product',requireSignIn, isAdmin,formidable(), createProductController)

//get products
router.get('/get-product', getProductController)

//single product
router.get('/get-product/:slug', getSingleProductController)

router.get('/product-photo/:pid', productPhotoController)

//delete product
router.delete('/delete-product/:pid', deleteProductController)

//update products
router.put('/update-product/:pid',requireSignIn, isAdmin,formidable(), updateProductController)

//filter product
router.post('/product-filters',productfiltersController)

//product count 
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//search product router 
router.get('/search/:keyword', searchProuctController)

//similar product
router.get('/related-product/:pid/:cid', realatedProductController)

//categories wise product
router.get('/product-category/:slug', productCategoryController)

//PAYMENTs route
//token
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn, braintreePaymentController)

export default router