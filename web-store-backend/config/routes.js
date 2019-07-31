/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /login' : {
    action : 'usuario/login'
  },
  'POST /encenderLed' : {
    action : 'led/encenderLed'
  },
  'POST /apagarLed' : {
    action : 'led/apagarLed'
  },
  'GET /clientHandler' : {
    action : 'usuario/listAll'
  },
  'GET /allWarehouses' : {
    action : 'bodega/listAll'
  },
  'POST /picture' : {
    action : 'producto/upload'
  },
  'GET /picture' : {
    action : 'producto/getPic'
  },
  'GET /allOrders' : {
    action : 'pedido/listAll'
  },
  'GET /allSales' : {
    action : 'ventas/listAll'
  }



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
