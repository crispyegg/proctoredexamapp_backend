const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  attemptId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: 'IN_PROGRESS'
  },
  startedAt: {
    type: Date,
    default: Date.now
  },
  endedAt: {
    type: Date
  }
});

module.exports = mongoose.model('attempt', attemptSchema);
