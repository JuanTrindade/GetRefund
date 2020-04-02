const User = require('../models/User');
const Refund = require('../models/Refund');

module.exports = {
  async store (req, res, next) {
    const refundId = req.params.id;
    const adminId = req.headers.authorization;

    try {
      const admin = await User.findById(adminId);

      if (!admin) {
        return next({ status: 404, message: 'Administrator not found' });
      }

      if (admin.type !== 'admin') {
        return next({ status: 401, message: 'User is not an administrator' });
      }

      const refund = await Refund.findById(refundId)
        .populate('owner');

      if (!refund) {
        return next({ status: 404, message: 'Solicitation not found' });
      }

      refund.accepted = true;
      refund.accepted_by = admin._id;
      await refund.save();

      console.log(`Solicitação ${refundId} aceita por ${adminId}`);
      
      return res.status(200).json(refund);
    } catch (err) {
      next(err);
    }
  }
}