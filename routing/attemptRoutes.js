



const express = require('express');
const attemptModel = require('../model/attemptModel');

const attemptRouting = express.Router();


// ✅ Create Attempt
attemptRouting.post('/attempt', async (req, res) => {
  try {
    const attemptData = new attemptModel(req.body);
    const result = await attemptData.save();

    if (result._id) {
      res.send('Attempt Created');
    } else {
      res.send('Unable to Create Attempt');
    }
  }
  catch (err) {
    res.send(err);
  }
});


// ✅ Terminate Attempt
attemptRouting.put('/attempt/:aid', async (req, res) => {
  try {
    const aid = req.params.aid;

    const result = await attemptModel.updateOne(
      { attemptId: aid },
      { $set: { status: 'TERMINATED', endedAt: new Date() } }
    );

    if (result.modifiedCount > 0) {
      res.send('Attempt Terminated');
    } else {
      res.send('Unable to Terminate Attempt');
    }
  }
  catch (err) {
    res.send(err);
  }
});


module.exports = attemptRouting;


