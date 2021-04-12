const Router = require('express')

const AppRoutes = Router();


AppRoutes.get('/', (request, response) => {
    response.render('../views/index')
})





module.exports = AppRoutes;