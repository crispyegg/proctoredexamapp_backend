
const express = require('express');
const logModel = require('../model/logsModel');
const attemptModel = require('../model/attemptModel');

const logRouting = express.Router();


// ✅ Save Logs (Batch)
logRouting.post('/logs', async (req, res) => {
  try {
    const { attemptId, logs } = req.body;

    const attempt = await attemptModel.findOne({ attemptId: attemptId });

    if (!attempt) {
      res.send('Attempt Not Found');
    }
    else if (attempt.status !== 'IN_PROGRESS') {
      res.send('Attempt Closed. Logs Rejected');
    }
    else {
      const formattedLogs = logs.map(log => ({
        attemptId: attemptId,
        eventType: log.eventType,
        timestamp: new Date(log.timestamp),
        questionId: log.questionId,
        metadata: log.metadata
      }));

      const result = await logModel.insertMany(formattedLogs);

      if (result.length > 0) {
        res.send('Logs Saved Successfully');
      } else {
        res.send('Unable to Save Logs');
      }
    }

  }
  catch (err) {
    res.send(err);
  }
});

module.exports = logRouting;
