import React from 'react';

// Helper function untuk format tanggal
const formatDate = (dateString) => {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

// Helper function untuk experience type
const getExperienceTypeConfig = (type) => {
  const configs = {
    'internship': { label: 'Internship', color: 'bg-blue-100 text-blue-700', icon: '🎓' },
    'organization': { label: 'Organization', color: 'bg-purple-100 text-purple-700', icon: '🏛️' },
    'project': { label: 'Project', color: 'bg-green-100 text-green-700', icon: '💼' }
  };
  return configs[type] || configs['project'];
};