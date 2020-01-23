const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
  "price": {
    "value": {
      "type": "Number"
    },
    "currency": {
      "type": "String"
    },
    "campaign": {
      "type": "String"
    },
    "discount": {
      "type": "Number"
    }
  },
  "details": {
    "sizes": {
      "type": [
        "String"
      ]
    },
    "composition": {
      "type": [
        "String"
      ]
    },
    "type": {
      "type": [
        "String"
      ]
    },
    "size_type": {
      "type": "String"
    },
    "color": {
      "type": "String"
    },
    "style": {
      "type": "String"
    },
    "care_instructions": {
      "type": "String"
    }
  },
  "image": {
    "type": "String"
  },
  "title": {
    "type": "String"
  },
  "description": {
    "type": "String"
  },
  "gender": {
    "type": "String"
  },
  "age_group": {
    "type": "String"
  },
  "is_deleted": {
    "type": "Boolean"
  }
});


// Export the model
module.exports = mongoose.model('Items', ItemSchema);