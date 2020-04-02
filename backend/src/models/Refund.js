const { Schema, model } = require('mongoose')

require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ?
    '.env' :
    `.env.${process.env.NODE_ENV}`
});

const RefundSchema = new Schema({
  picture: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  solicitated_by: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  approved_by: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  accepted: Boolean
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

RefundSchema.virtual('picture_url').get(function () {
  return `${process.env.APP_URL}/files/${this.picture}`;
});

RefundSchema.virtual('brl_value').get(function () {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(this.value);
});

module.exports = model('refund', RefundSchema);