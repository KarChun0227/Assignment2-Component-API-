    module.exports = function(app) {
      app.use('/api/customers', require('./api/customers/index'));
      app.use('/api/products', require('./api/products/index'));
      app.use('/api/students', require('./api/students/index'));
    };