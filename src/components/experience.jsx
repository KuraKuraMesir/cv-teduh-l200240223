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

const Experiences = ({ experiences }) => {
  // Urutkan berdasarkan is_current dan start_date
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.is_current && !b.is_current) return -1;
    if (!a.is_current && b.is_current) return 1;
    return new Date(b.start_date) - new Date(a.start_date);
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">💼</span>
        <h2 className="text-4xl font-bold" style={{ color: '#FC210D' }}>Experience</h2>
      </div>
      
      <div className="space-y-6">
        {sortedExperiences.map((exp, index) => {
          const typeConfig = getExperienceTypeConfig(exp.experience_type);
          
          return (
            <div key={exp.id} className="relative pl-10 pb-8 last:pb-0" style={{
              borderLeft: '4px solid rgba(252, 33, 13, 0.3)'
            }}>
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm" style={{
                background: 'linear-gradient(135deg, #FC210D 0%, #F7CE38 100%)'
              }}>
                {sortedExperiences.length - index}
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border-2 hover:shadow-xl transition-all" style={{
                borderColor: 'rgba(252, 33, 13, 0.1)'
              }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-xl text-3xl" style={{
                      background: 'linear-gradient(135deg, rgba(252, 33, 13, 0.1) 0%, rgba(247, 206, 56, 0.1) 100%)'
                    }}>
                      {typeConfig.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-lg text-gray-600 flex items-center gap-2">
                        <span>🏢</span>
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                  
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${typeConfig.color}`}>
                    {typeConfig.label}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 bg-gray-100 px-4 py-2 rounded-lg inline-flex">
                  <span>📅</span>
                  <span className="font-medium">
                    {formatDate(exp.start_date)} - {exp.is_current ? (
                      <span className="font-bold" style={{ color: '#FC210D' }}>Present (Current)</span>
                    ) : formatDate(exp.end_date)}
                  </span>
                </div>
                
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">{exp.description}</p>
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-shadow"
                          style={{
                            background: 'linear-gradient(90deg, #FC210D 0%, #F7CE38 100%)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;