const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mohamedabdelkader:Mohamed@414494@cluster0.9xnrx4b.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");
    console.log('MongoDB connected');
  } catch (err) {
    console.error('DB Error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;