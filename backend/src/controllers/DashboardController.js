const User = require('../models/User');
const Refund = require('../models/Refund');

module.exports = {
  async index (req, res, next) {
    const adminId = req.headers.authorization;

    try {
      const admin = await User.findById(adminId);

      if (!admin) {
        return next({ status: 404, message: 'Administrator not found' });
      }

      if (admin.type !== 'admin') {
        return next({ status: 401, message: 'User is not an administrator' });
      }

      const solicitations = await Refund.find({
        $and: [
          { accepted: null }
        ]
      }).populate('solicitated_by');

      return res.status(200).json(solicitations);
    } catch (err) {
      next(err);
    }
  },

  async show (req, res, next) {
    const solicitationId = req.params.id;
    const adminId = req.headers.authorization;

    try {
      const admin = await User.findById(adminId);

      if (!admin) {
        return next({ status: 404, message: 'Administrator not found' });
      }

      if (admin.type !== 'admin') {
        return next({ status: 401, message: 'User is not an administrator' });
      }

      const solicitation = await Refund.findById(solicitationId);

      return res.status(200).json(solicitation);
    } catch (err) {
      next(err);
    }
  }
}