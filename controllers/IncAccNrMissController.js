// controllers/IncAccNrMissController.js

const Incident = require('../models/Incident');

// Report an incident, accident, or near miss
exports.reportIncident = async (req, res) => {
  const { description, type, severity } = req.body;

  try {
    const newIncident = new Incident({
      description,
      type,  // 'Incident', 'Accident', 'Near Miss'
      severity,
      reportedBy: req.user.id  // User ID from JWT (provided by auth middleware)
    });

    const incident = await newIncident.save();
    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all incidents/accidents/near misses
exports.getAllReports = async (req, res) => {
  try {
    const incidents = await Incident.find().populate('reportedBy', ['name', 'email']);  // Populate 'reportedBy' field with user details
    res.json(incidents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};