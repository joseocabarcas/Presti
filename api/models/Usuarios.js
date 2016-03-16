/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/



// We don't want to store password with out encryption
var bcrypt = require('bcrypt');

module.exports = {

  tableName: 'usuarios',
  schema: true,

  attributes: {

    nombres: {
    	type: 'string',
    	size: 60
    },

    apellidos:{
    	type: 'string',
    	size: 100
    },

    cedula:{
    	type: 'string',
    	size: 20,
    	required: true
    },

    telefono:{
    	type: 'string',
    	size: 20
    },

    direccion: {
    	type: 'string',
    	size: 100
    },

    sexo: {
    	type: 'boolean'
    },
    
    tipo: {
    	type: 'boolean'
    },

    username:{
    	type: 'string',
    	size: 50,
    	required: true
    },

    password: {
      type: 'string'
    },


    prestamos: {
    	collection: 'prestamos',
    	via: 'owner'
    },

    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },//fn attributes


   // Here we encrypt password before creating a User
	  beforeCreate : function (values, next) {
	    bcrypt.genSalt(10, function (err, salt) {
	      if(err) return next(err);
	      bcrypt.hash(values.password, salt, function (err, hash) {
	        if(err) return next(err);
	        values.password = hash;
	        next();
	      })
	    })
	  },

	  comparePassword : function (password, user, cb) {
	    bcrypt.compare(password, user.password, function (err, match) {

	      if(err) cb(err);
	      if(match) {
	        cb(null, true);
	      } else {
	        cb(err);
	      }
	    })
	  }

};

