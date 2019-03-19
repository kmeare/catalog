/**
 * Promo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name:{
      type:'string'
    },
    image:{
      type: 'string'
    },
    descripton:{
      type:'text'
    },
    image:{
     type:'text'
    },
    valid:{
      type:'string'
    },
    date:{
      type:'date'
    },
    places:{
      model:'place'
    }
  }
};

