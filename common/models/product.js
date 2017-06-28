// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Product) {
  
  Product.afterRemote('create', function(context, product, next) {
      context.res.redirect('/myproduct');
    });
};