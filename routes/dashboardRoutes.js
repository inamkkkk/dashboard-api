const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/user-statistics', authenticate, dashboardController.getUserStatistics);
router.get('/performance-metrics', authenticate, dashboardController.getPerformanceMetrics);

module.exports = router;