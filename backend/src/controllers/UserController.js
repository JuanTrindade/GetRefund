const User = require('../models/User');

module.exports = {
  async store (req, res, next) {
    try {
      const userExists = await User.findOne({ email: req.body.email });

      if (userExists) {
        return next({ status: 400, message: 'User already exists' });
      }

      const user = await User.create(req.body);

      return res.status(201).json(user)
    } catch (err) {
      next(err);
    }
  }
}