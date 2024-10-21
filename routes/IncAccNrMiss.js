// routes/IncAccNrMiss.js

const express = require('express');
const router = express.Router();
const { reportIncident, getAllReports } = require('../controllers/IncAccNrMissController');
const auth = require('../middleware/auth');

// Route to report a new incident/accident/near miss (protected)
// POST /api/reports
router.post('/report', auth, reportIncident);

// Route to get all reports (protected, admin only)
// GET /api/reports
router.get('/', auth, getAllReports);

module.exports = router;