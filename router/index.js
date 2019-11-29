const {Router} = require('express');
const router = Router();
const Post = require('../module/post');
const Category = require('../module/category');

router.get('/', async (req, res) => {
    const post = await Post.find();
    const category = await Category.find();
    res.render('index', {
        post,
        category
    });
});

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post
    })
})


module.exports = router;