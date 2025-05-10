const User = require('../models/User');

// 🛠 Superadmin creates Admin
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already exists' });

    const user = await User.create({
      name,
      email,
      phone,
      password,
      role: 'admin'
    });

    global._io?.emit('adminCreated', {
      message: `✅ Admin ${user.name} was created by ${req.user.name}`
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Admin creation failed', error: err.message });
  }
};

// 🛠 Admin/Superadmin creates Delivery
exports.createDelivery = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already exists' });

    const user = await User.create({
      name,
      email,
      phone,
      password,
      role: 'delivery'
    });

    global._io?.emit('deliveryCreated', {
      message: `🚚 Delivery user ${user.name} was created by ${req.user.name}`
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Delivery creation failed', error: err.message });
  }
};

// 📋 List all Admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' }).select('-password');
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch admins' });
  }
};

// 📋 List all Deliveries
exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await User.find({ role: 'delivery' }).select('-password');
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch deliveries' });
  }
};

// ❌ Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
