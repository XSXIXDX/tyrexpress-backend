const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
  try {
    const categoryList = await Category.find();

    if (!categoryList || categoryList.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No categories found'
      });
    }
    res.status(200).send(categoryList);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ... rest of your category routes remain the same