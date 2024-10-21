// routes/IncAccNrMiss.js

const express = require('express');
const router = express.Router();
const { createReport, getAllReports, getReportById, updateReport, deleteReport } = require('../controllers/IncAccNrMissController');

// POST: Create a new incident/accident/near miss report
router.post('/', createReport);

// GET: Retrieve all reports
router.get('/', getAllReports);

// GET: Retrieve a specific report by ID
router.get('/:id', getReportById);

// PUT: Update a report by ID
router.put('/:id', updateReport);

// DELETE: Delete a report by ID
router.delete('/:id', deleteReport);

module.exports = router;