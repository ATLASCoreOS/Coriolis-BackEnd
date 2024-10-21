// models/Incident.js

const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Incident', 'Accident', 'Near Miss'],  // Valid types of reports
    required: true,
  },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],  // Severity of the event
    required: true,
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the user who reported the event
    ref: 'User',
    required: true,
  },
  dateReported: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Incident', IncidentSchema);