import React, { useState, useEffect } from 'react';
import Profile from './components/profile';
import Skills from './components/skills';
import Experiences from './components/experiences';
import dataMahasiswa from './dataMahasiswa.json';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data dari JSON
    setTimeout(() => {
      setData(dataMahasiswa);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, rgba(252, 33, 13, 0.05) 0%, rgba(247, 206, 56, 0.05) 100%)'
      }}>
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-8 rounded-full" style={{ borderColor: 'rgba(252, 33, 13, 0.2)' }}></div>
            <div className="absolute inset-0 border-8 rounded-full border-t-transparent animate-spin" style={{ borderColor: '#FC210D' }}></div>
          </div>
          <p className="text-xl font-semibold animate-pulse" style={{ color: '#FC210D' }}>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, rgba(252, 33, 13, 0.05) 0%, rgba(247, 206, 56, 0.05) 100%)'
      }}>
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <span className="text-6xl mb-4 block">😕</span>
          <p className="text-xl text-gray-700 font-semibold">Data tidak ditemukan</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4" style={{
      background: 'linear-gradient(135deg, rgba(252, 33, 13, 0.03) 0%, rgba(247, 206, 56, 0.03) 50%, rgba(252, 33, 13, 0.03) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <Profile data={data.profile} statistics={data.statistics} />
        <Skills skills={data.skills} />
        <Experiences experiences={data.experiences} />
        
        <footer className="text-center text-gray-600 mt-12 pb-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-lg font-semibold mb-2">
              Built with ⚛️ React & 🎨 Tailwind CSS
            </p>
            <p className="text-sm text-gray-500 mb-1">
              © {new Date().getFullYear()} {data.profile.full_name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-3 italic">
              Assignment: Single Page Application - Web Programming with Framework
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;