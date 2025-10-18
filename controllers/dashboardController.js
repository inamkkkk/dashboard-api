const User = require('../models/User');

exports.getUserStatistics = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    // Add more statistics as needed
    res.json({
      totalUsers,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPerformanceMetrics = async (req, res, next) => {
  try {
    // Simulate performance metrics data
    const performanceMetrics = {
      responseTime: '200ms',
      cpuUsage: '5%',
      memoryUsage: '100MB',
    };
    res.json(performanceMetrics);
  } catch (error) {
    next(error);
  }
};