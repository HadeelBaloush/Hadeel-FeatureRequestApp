let mongoose = require('mongoose');

let FeatureSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  client: {
    type: String,
    default: ''
  },
  client_priority: { 
    type : String,
    default: ''
  },
  target_date: {
    type: Date,
    default: Date.now
  },
  ticket_url: {
    type: String
  },
  product_area: {
    type: String
  },

});

module.exports = mongoose.model('features', FeatureSchema);