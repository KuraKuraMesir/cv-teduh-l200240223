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

// Skill Card Component
const SkillCard = ({ skill }) => {
  const percentage = getLevelPercentage(skill.level);
  
  return (
    <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 hover:border-opacity-50" style={{
      borderColor: 'rgba(252, 33, 13, 0.2)'
    }}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{skill.icon_url}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
            <p className="text-sm text-gray-600">
              {skill.years_of_experience} {skill.years_of_experience > 1 ? 'years' : 'year'} experience
            </p>
          </div>
        </div>
        {skill.is_main && (
          <span className="text-white px-3 py-1 rounded-full text-xs font-bold shadow-md" style={{
            background: 'linear-gradient(135deg, #FC210D 0%, #F7CE38 100%)'
          }}>
            Main
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 font-medium">{getLevelLabel(skill.level)}</span>
          <span className="font-bold" style={{ color: '#FC210D' }}>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out shadow-inner"
            style={{ 
              width: `${percentage}%`,
              background: 'linear-gradient(90deg, #FC210D 0%, #F7CE38 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Main Skills Component
const Skills = ({ skills }) => {
  const mainSkills = skills.filter(skill => skill.is_main);
  const otherSkills = skills.filter(skill => !skill.is_main);

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl mb-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">⚡</span>
        <h2 className="text-4xl font-bold" style={{ color: '#FC210D' }}>Skills & Expertise</h2>
      </div>
      
      {mainSkills.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span>🌟</span> Main Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      )}
      
      {otherSkills.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span>🔧</span> Other Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;