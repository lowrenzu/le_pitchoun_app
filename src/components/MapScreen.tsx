import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { findNearbySpots } from '../services/gemini';

export default function MapScreen() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // AI Spots State
  const [showSpots, setShowSpots] = useState(false);
  const [isLoadingSpots, setIsLoadingSpots] = useState(false);
  const [spotsResponse, setSpotsResponse] = useState<{text: string, chunks: any[]} | null>(null);

  const handleFindSpots = async () => {
    if (!location) return;
    setShowSpots(true);
    setIsLoadingSpots(true);
    const response = await findNearbySpots(location.lat, location.lng);
    setSpotsResponse(response);
    setIsLoadingSpots(false);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Géolocalisation non supportée');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError('Impossible de récupérer votre position');
        console.error(err);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="relative h-[100dvh] w-full flex flex-col overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        {location ? (
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
          ></iframe>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDASlhtm3692LwV5WLsxbUtffDwEIdS3mHcwzaauqueSmUS9-bNvEAy8_PtRHQp_OTKcwSiagyla9o9OGGWFG6OPxX67I__haXPHZ_b-FpP2dphmlaXXZsNXSO7DqE-rkYAVF4XzWjLThHOYa7aiiOSZoaRy4IKTTZWSC6dhx3fN4j7R4eMJechwX0rb3Q7-lanK4YHOddC83ssvbAz3HhzYjCpDRk4vRChsTUPuj_8EJ_bP3Fn_HPqLeLqW_S6exxoiK0tAwu4MR_2')",
              filter: "opacity(0.6) grayscale(0.2) sepia(0.1) hue-rotate(80deg)"
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
              <p className="text-slate-800 font-bold bg-white px-4 py-2 rounded-full shadow-md">
                {error ? error : 'Recherche de votre position...'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 premium-header px-6 pt-8 pb-4 flex items-center justify-between">
        <Link to="/home" className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined text-[#1e3a8a]">arrow_back</span>
        </Link>
        <h2 className="text-xl font-serif font-bold tracking-tight flex-1 text-center text-[#1e3a8a]">Où est le triporteur ?</h2>
        <button className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors relative">
          <span className="material-symbols-outlined text-[#1e3a8a]">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#1e3a8a] rounded-full border border-white/20"></span>
        </button>
      </header>

      {/* Map Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10 pointer-events-none">
        <button 
          className="w-14 h-14 premium-card rounded-2xl shadow-xl flex items-center justify-center text-[#1e3a8a] pointer-events-auto hover:bg-white/40 transition-colors"
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  });
                }
              );
            }
          }}
        >
          <span className="material-symbols-outlined text-2xl">my_location</span>
        </button>
        <button 
          className="w-14 h-14 bg-[#1e3a8a] rounded-2xl shadow-xl flex items-center justify-center text-white pointer-events-auto hover:bg-[#1e3a8a]/90 transition-colors"
          onClick={handleFindSpots}
        >
          <span className="material-symbols-outlined text-2xl">park</span>
        </button>
      </div>

      {/* Floating Action Card */}
      <div className="absolute bottom-28 left-6 right-6 z-30 flex gap-3 pointer-events-none">
        <div className="flex-1 premium-card rounded-3xl shadow-2xl p-6 pointer-events-auto flex items-center justify-between border border-black/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>icecream</span>
            </div>
            <div className="space-y-0.5">
              <h2 className="text-base font-serif font-bold text-[#1e3a8a]">Le Pitchoun</h2>
              <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/50 font-bold">Piste cyclable Nord</p>
            </div>
          </div>
          <button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold h-12 px-6 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg">
            <span className="material-symbols-outlined text-lg">directions_bike</span>
            <span className="text-xs uppercase tracking-widest">Y aller</span>
          </button>
        </div>
      </div>

      {/* AI Spots Modal */}
      {showSpots && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="premium-card w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative animate-in slide-in-from-bottom-10 fade-in duration-300 max-h-[80vh] overflow-y-auto border border-black/5">
            <button 
              onClick={() => setShowSpots(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#1e3a8a]/5 text-[#1e3a8a] hover:bg-[#1e3a8a]/10 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a]/5 flex items-center justify-center text-[#1e3a8a]">
                <span className="material-symbols-outlined text-3xl">park</span>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#1e3a8a]">Où déguster ?</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/40 font-bold">Coins sympas à proximité</p>
              </div>
            </div>

            {isLoadingSpots ? (
              <div className="flex flex-col items-center justify-center py-12 gap-6">
                <span className="material-symbols-outlined animate-spin text-[#1e3a8a] text-5xl">refresh</span>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/40 font-bold">Recherche des meilleurs endroits...</p>
              </div>
            ) : spotsResponse ? (
              <div className="space-y-6">
                <div className="text-sm text-[#1e3a8a] leading-relaxed whitespace-pre-wrap bg-[#1e3a8a]/5 p-6 rounded-2xl italic font-medium">
                  "{spotsResponse.text}"
                </div>
                
                {spotsResponse.chunks && spotsResponse.chunks.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-[#1e3a8a]/10">
                    <h3 className="text-[10px] font-bold text-[#1e3a8a]/30 uppercase tracking-[0.2em] mb-4 px-2">Lieux recommandés</h3>
                    <div className="space-y-3">
                      {spotsResponse.chunks.map((chunk: any, index: number) => {
                        if (chunk.web?.uri) {
                          return (
                            <a key={index} href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#1e3a8a]/10 transition-colors text-sm text-[#1e3a8a] bg-[#1e3a8a]/5 group">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#1e3a8a]/40">link</span>
                                <span className="font-bold truncate max-w-[200px]">{chunk.web.title || chunk.web.uri}</span>
                              </div>
                              <span className="material-symbols-outlined text-[#1e3a8a]/20 group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </a>
                          );
                        } else if (chunk.maps?.uri) {
                          return (
                            <a key={index} href={chunk.maps.uri} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#1e3a8a]/10 transition-colors text-sm text-[#1e3a8a] bg-[#1e3a8a]/5 group">
                              <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#1e3a8a]/40">map</span>
                                <span className="font-bold truncate max-w-[200px]">{chunk.maps.title || 'Voir sur Google Maps'}</span>
                              </div>
                              <span className="material-symbols-outlined text-[#1e3a8a]/20 group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </a>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
