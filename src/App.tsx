/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import MapScreen from './components/MapScreen';
import MenuScreen from './components/MenuScreen';
import FlavorDetailScreen from './components/FlavorDetailScreen';
import InfoScreen from './components/InfoScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <Router>
      <div className="relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-[#fdf5e6] text-[#1e3a8a]">
        {/* Global Premium Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden max-w-md mx-auto bg-[#fdf5e6]">
          {/* Subtle Lake Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe]/40 via-[#fdf5e6] to-[#fdf5e6]"></div>
          
          {/* Artistic Wave Shapes */}
          <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[120%] bg-gradient-to-br from-white/60 to-transparent rounded-[100%] blur-3xl transform -rotate-12"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[60%] bg-[#0077b6]/5 rounded-[100%] blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/map" element={<MapScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/flavor/:id" element={<FlavorDetailScreen />} />
            <Route path="/info" element={<InfoScreen />} />
          </Routes>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
}
