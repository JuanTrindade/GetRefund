const User = require('../models/User');

module.exports = {
  async store (req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email })
        .select('+password');

      if (!user) {
        return next({ status: 404, message: 'User not found' });
      }

      if (password !== user.password) {
        return next({ status: 401, message: 'Invalid credentials' });
      }

      return res.status(200).json(user)
    } catch (err) {
      next(err);
    }
  }
}