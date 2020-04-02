const User = require('../models/User');
const Refund = require('../models/Refund');

module.exports = {
  async index (req, res, next) {
    const userId = req.headers.authorization;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return next({ status: 404, message: 'User not found' });
      }

      const solicitations = await Refund.find({
        $and: [
          { solicitated_by: { $eq: user._id } }
        ], 
      });

      if (!solicitations || solicitations.length === 0) {
        return next({ status: 404, message: 'No solicitations found' });
      }

      console.log(`Nova solicitação feita por ${user._id}`);

      return res.status(200).json(solicitations);
    } catch (err) {
      next(err);
    }
  },

  async store (req, res, next) {
    const userId = req.headers.authorization;

    const data = {
      ...req.body,
      picture: req.file.filename,
      solicitated_by: userId
    }

    try {
      const solicitation = await Refund.create(data);

      return res.status(201).json(solicitation);
    } catch (err) {
      next(err);
    }
  },

  async show (req, res, next) {
    const refundId = req.params.id;
    const userId = req.headers.authorization;

    try {
      const user = await User.findById(userId);

      if (!user) {
        return next({ status: 404, message: 'User not found' });
      }

      const solicitation = await Refund.findOne({
        $and: [
          { _id: { $eq: refundId } },
          { solicitated_by: { $eq: user._id } }
        ]
      });

      if (!solicitation) {
        return next({ status: 404, message: 'Solicitation not found' });
      }

      return res.status(200).json(solicitation);
    } catch (err) {
      next(err);
    }
  }
}