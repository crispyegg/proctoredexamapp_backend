const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  attemptId: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  questionId: {
    type: String
  },
  metadata: {
    type: Object
  }
});

module.exports = mongoose.model('log', logSchema);
