const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  type: {
    type: String,
    enum: ['common', 'admin'],
    default: 'common',
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('user', UserSchema);
