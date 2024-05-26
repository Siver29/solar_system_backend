const express=require('express');
const {getAll,addProduct,getByCompany}=require('../controllers/productsController');
const router=express.Router()

router.get('/api/allProducts',getAll);
router.get('/api/getBy/:productCompanyName',getByCompany);
router.post('/api/addProduct',addProduct);
// router.delete('/api/delete/:code',Delete);
// router.get('/api/all',getUsers)
module.exports = router