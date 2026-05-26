import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI. Run with: node --env-file=.env.local scripts/seed-user.mjs');
  process.exit(1);
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'admin' },
    fullname: { type: String, required: true },
    profilepic: {
      type: String,
      default:
        'https://res.cloudinary.com/dmj3t5tyh/image/upload/v1763289617/933-9332131_profile-picture-default-png_1_wao5pl.jpg',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

const dummyUsers = [
  {
    email: 'admin@example.com',
    name: 'admin',
    fullname: 'Admin User',
    password: 'changeme123',
    role: 'admin',
  },
  {
    email: 'user@example.com',
    name: 'user',
    fullname: 'Regular User',
    password: 'changeme123',
    role: 'user',
  },
];

await mongoose.connect(MONGODB_URI);
console.log('connected to', mongoose.connection.name);

for (const u of dummyUsers) {
  const existing = await User.findOne({ email: u.email });
  if (existing) {
    console.log(`skip: ${u.email} already exists`);
    continue;
  }
  const created = await User.create(u);
  console.log(`created: ${created.email} (role=${created.role})`);
}

await mongoose.disconnect();
process.exit(0);
