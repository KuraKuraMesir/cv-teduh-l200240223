import React from 'react';

const Profile = ({ data, statistics }) => {
  return (
    <div className="relative rounded-3xl p-8 md:p-10 shadow-2xl text-white mb-8 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #FC210D 0%, #F7CE38 100%)'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-32 translate-y-32"></div>
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-40 w-4 h-4 bg-white rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <img 
              src={data.photo_url} 
              alt={data.full_name}
              className="w-40 h-40 rounded-full border-4 border-white shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg" style={{
              background: 'linear-gradient(135deg, #F7CE38 0%, #FC210D 100%)'
            }}>
              {statistics.profile_complete_percent}% ✨
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">{data.full_name}</h1>
            <p className="text-2xl mb-4 drop-shadow" style={{ color: '#FFF9E6' }}>{data.headline}</p>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              <span className="bg-yellow bg-opacity-25 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white border-opacity-30 hover:bg-opacity-35 transition-all">
                📚 {data.nim}
              </span>
              <span className="bg-yellow bg-opacity-25 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white border-opacity-30 hover:bg-opacity-35 transition-all">
                💻 {data.prodi}
              </span>
              <span className="bg-yellow bg-opacity-25 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white border-opacity-30 hover:bg-opacity-35 transition-all">
                🎓 Angkatan {data.angkatan}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm mb-6">
              <div className="flex items-center gap-2 bg-yellow bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all">
                <span className="text-lg">📍</span>
                <span className="font-medium">{data.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all">
                <span className="text-lg">👁️</span>
                <span className="font-medium">{statistics.views_count} views</span>
              </div>
            </div>
            
            <p className="text-lg mb-6 drop-shadow" style={{ color: '#FFF9E6' }}>{data.short_bio}</p>
            
            <a 
              href={data.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ color: '#FC210D' }}
            >
              <span>🔗</span>
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;