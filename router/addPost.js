const {Router} = require('express');
const router = Router();
const Post = require('../module/post');
const Category = require('../module/category');

router.get('/', async (req, res) => {
    const category = await Category.find();
    console.log(category);
    res.render('add', {
        category
    });
})


router.post('/', (req, res) => {
    const data = new Date();
    const daymonth = data.getDate() + '/' + data.getMonth();
    const time = data.getHours() + ':' + data.getMinutes();
    const post = new Post({
        title: req.body.title,
        messagePrev: req.body.messagePrev,
        messageFull: req.body.messageFull,
        category: req.body.select,
        daymonth,
        time
    })
    post.save();
    res.redirect('/');
})

module.exports = router;