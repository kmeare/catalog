/**
 * Place.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:'string'
    },
    description:{
      type:'string'
    },
    image:{
      type: 'string'
    },
    stars:{
      type: 'string'
    },
    lat:{
      type: 'string'
    },
    lon:{
      type: 'string'
    },
    address:{
      type: 'string'
    },
    phone:{
      type: 'string'
    },
    type:{
      type: 'string'
    },
    delivery:{
      type: 'string'
    },
    zone:{
      type: 'string'
    },
    //has many promos
    promos:{
      collection: 'promo',
      via: 'places'
    },
    categories:{
      model: 'category'
    }
  }
};

