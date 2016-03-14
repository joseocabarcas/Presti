/**
* Prestamos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  tableName: 'prestamos',
  schema: true,
  attributes: {
  	valor_prestado: {
    	type: 'float'
    },
    valor_deuda: {
    	type: 'float'
    },
    tipo_pago: {
    	type: 'integer'
    },
    valor_cuota: {
    	type: 'float'
    },
    cuotas: {
    	type: 'integer'
    },

    owner: {
    	model: 'usuarios'
    },

    pagos: {
    	collection: 'pagos',
    	via: 'owner'
    }
  }
};

