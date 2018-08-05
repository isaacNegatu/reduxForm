let router = require('express').Router();
let pool = require('../modules/pool');

router.get('/', (req, res)=> {
    console.log('got to get');
    res.sendStatus(201);
})

router.post('/', (req, res)=> {
    console.log(req.body);
    res.sendStatus(201);
})

router.put('/', (req, res)=> {
    console.log('got to put');
    res.sendStatus(201);
})

router.delete('/', (req, res)=> {
    console.log('got to delete');
    res.sendStatus(201);
})



module.exports = router;



