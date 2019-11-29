const {Router} = require('express');
const router = Router();
const Category = require('../module/category')

router.get('/', (req, res) => {
    res.render('addcategory');
})

router.post('/', (req, res) => {
    const category = new Category({
        title: req.body.category
    });

    category.save();
    res.redirect('/');
})

module.exports = router;