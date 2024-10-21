// models/IncAccNrMiss.js
const mongoose = require('mongoose');

const IncAccNrMissSchema = new mongoose.Schema({
  reportType: {
    type: String,
    enum: ['Incident', 'Accident', 'Near Miss'],
    required: true,
  },
  vesselName: {
    type: String,
    required: true,
  },
  vesselMaster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vesselCrew: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  reportedBy: {
    type: String,
    required: true,
  },
  correctiveAction: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Open', 'Closed'],
    default: 'Open',
  },
  // New fields for investigation
  investigationReport: {
    type: String,
  },
  investigatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  investigationDate: {
    type: Date,
    required: false,
  },
  // Additional fields like witnesses, equipment involved, etc.
});

module.exports = mongoose.model('IncAccNrMiss', IncAccNrMissSchema);