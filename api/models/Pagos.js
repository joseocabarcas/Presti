/**
* Pagos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'pagos',
  schema: true,
  attributes: {
  	fecha_pago: {
  		type: 'date'
  	},
  	valor_pagado: {
  		type:'float'
  	},

  	owner: {
    	model: 'prestamos'
    }
  }
};

