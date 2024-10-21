// controllers/IncAccNrMissController.js
const IncAccNrMiss = require('../models/IncAccNrMiss');

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const report = new IncAccNrMiss(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await IncAccNrMiss.find();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific report by ID
exports.getReportById = async (req, res) => {
  try {
    const report = await IncAccNrMiss.findById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a report
exports.updateReport = async (req, res) => {
  try {
    const report = await IncAccNrMiss.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a report
exports.deleteReport = async (req, res) => {
  try {
    const report = await IncAccNrMiss.findByIdAndDelete(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json({ message: 'Report deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};