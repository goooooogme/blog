const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const index = require('./router/index');
const add = require('./router/addPost');
const addCategory = require('./router/addCategory')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/add', add);
app.use('/addcategory', addCategory);


async function start() {
    try {
        await mongoose.connect('mongodb+srv://nefedov:183264@cluster0-wcn4h.mongodb.net/blog', {useNewUrlParser: true});

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is run port ${PORT}`);
        });

    } catch(e) {
        console.log(e)
    }
}

start();






