import React from 'react';

// Helper function untuk mendapatkan level label
const getLevelLabel = (level) => {
  const labels = {
    'advanced': 'Advanced',
    'intermediate': 'Intermediate',
    'beginner': 'Beginner'
  };
  return labels[level] || level;
};

// Helper function untuk mendapatkan level percentage
const getLevelPercentage = (level) => {
  const percentages = {
    'advanced': 90,
    'intermediate': 70,
    'beginner': 40
  };
  return percentages[level] || 50;
};