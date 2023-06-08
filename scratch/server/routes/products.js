const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: 'Guitar', price: 10 },
    { id: 2, name: 'Piano', price: 20 },
    { id: 3, name: 'Drum', price: 30 },
];

//GET localhost:3000/products
router.get('/', (req, res)=>{
    res.json(products);
});

//GET localhost:3000/products/:id
 router.get('/:id', (req, res)=>{
    const productId = req.params.id;
    
    const product = products.find(prod => prod.id == productId);
    // res.json(products.find(product=>{return product.id == req.params.id}));
    res.json(product);
});

router.get('/search', (req, res)=>{
    const productName = req.query.name;

    const requestProduct = products.find(prod => products)

    if(requestProduct){

    }
});

//POST /products
router.post('/', (req, res) => {
    const newProduct = req.body;
    newProduct.price = parseInt(newProduct.price);
    newProduct.id = products.length + 1;
    products.push(newProduct);

    console.log(products);

    res.status(200).json({products});
});

router.put('/:id', (req, res) =>{

});



  module.exports = router;



