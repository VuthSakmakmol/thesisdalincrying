const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const {
  createAdmin,
  createDelivery,
  getAdmins,
  getDeliveries,
  deleteUser
} = require('../controllers/userController');

// Superadmin only
router.post('/admins', protect, authorize('superadmin'), createAdmin);
router.get('/admins', protect, authorize('superadmin'), getAdmins);

// Superadmin or Admin
router.post('/deliveries', protect, authorize('superadmin', 'admin'), createDelivery);
router.get('/deliveries', protect, authorize('superadmin', 'admin'), getDeliveries);

// Delete any user
router.delete('/:id', protect, authorize('superadmin', 'admin'), deleteUser);

module.exports = router;
