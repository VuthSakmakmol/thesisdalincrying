const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const exists = await User.findOne({ role: 'superadmin' });
    if (exists) {
      console.log('⚠️ Superadmin already exists');
      process.exit();
    }

    const superadmin = await User.create({
      name: 'Super Admin',
      email: 's@.com',
      phone: '123456',
      password: '123456',
      role: 'superadmin'
    });

    console.log('✅ Superadmin created:', superadmin.email);
    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed superadmin:', err.message);
    process.exit(1);
  }
};

seedSuperAdmin();
