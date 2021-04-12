const express = require('express')
const AppRoutes = require('./routes/routes')
const path = require('path')
const app = express();
const port = 3000
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));


app.listen(port, (err) => {
    if(err) {
        console.error(err, 'Unable to listen on server')
    }
    else {
        console.log(`Server is listening at ${port} 🚀`)
    }

})

app.use(AppRoutes)
