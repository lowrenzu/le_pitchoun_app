import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-8 pb-32">
      <header className="sticky top-0 z-40 premium-header px-6 pt-8 pb-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-serif font-bold leading-none tracking-tight text-[#1e3a8a]">Le Pitchoun</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1e3a8a]/50 font-bold mt-1.5">Artisan Glacier • Sanguinet</p>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center premium-card text-[#1e3a8a] hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <div className="px-6">
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDASlhtm3692LwV5WLsxbUtffDwEIdS3mHcwzaauqueSmUS9-bNvEAy8_PtRHQp_OTKcwSiagyla9o9OGGWFG6OPxX67I__haXPHZ_b-FpP2dphmlaXXZsNXSO7DqE-rkYAVF4XzWjLThHOYa7aiiOSZoaRy4IKTTZWSC6dhx3fN4j7R4eMJechwX0rb3Q7-lanK4YHOddC83ssvbAz3HhzYjCpDRk4vRChsTUPuj_8EJ_bP3Fn_HPqLeLqW_S6exxoiK0tAwu4MR_2')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 via-transparent to-transparent"></div>
          
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
            <div className="px-4 py-2 bg-white/90 text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg backdrop-blur-md border border-white/20">
              Ouvert au bord du lac
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-serif font-bold text-white leading-[1.1]">L'Artisanat au bord de l'eau</h2>
              <p className="text-white/70 text-sm font-light leading-relaxed">Retrouvez notre triporteur iconique sur les rives du lac de Sanguinet.</p>
            </div>
            <Link to="/map" className="w-full h-14 bg-white text-[#1e3a8a] font-bold text-sm uppercase tracking-widest rounded-full flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              <span className="material-symbols-outlined text-xl">location_on</span>
              Suivre le triporteur
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between px-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-[#1e3a8a]">Les Incontournables</h2>
            <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/40 font-bold">Sélection artisanale du jour</p>
          </div>
          <Link to="/menu" className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a]/60 hover:text-[#1e3a8a] border-b border-[#1e3a8a]/20 pb-1">Voir la carte</Link>
        </div>
        
        <div className="flex overflow-x-auto gap-6 px-8 pb-6 snap-x hide-scrollbar">
          {isLoading ? (
            <>
              {[1, 2].map((i) => (
                <div key={i} className="snap-center shrink-0 w-72 h-96 bg-white/50 rounded-3xl animate-pulse"></div>
              ))}
            </>
          ) : (
            <>
              <Link to="/flavor/vanille" className="snap-center shrink-0 w-72 h-[420px] premium-card rounded-[2rem] flex flex-col overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                <div className="h-64 w-full overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNZnj7d3AbBkaFbSybsAZB6ANUuuK08zoN2IG8mcI84goeCqN00nhg6fvN0-rI59Y61w5Y1OmTrMZYIGC3_NaLh44YFEvGvrEGfeeTQRUcWflvr2i2Rl4E7CYSEQy2yTz5j_XBcnk1gUIdPmzHr3YPNeR4ChOkcHN213ntY4_-91lvfRshsPq_Jv6VomkmAjppNrLzU1A-nTThol6HuHyKdRmXdHmyEJJJBcYu2mNxggXLi_K1gerVzbE8xYkuq2-4PvLlVbxFgY8z')" }}
                  ></div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#1e3a8a]/40 font-bold">Crème Glacée</p>
                    <h3 className="font-serif font-bold text-xl text-[#1e3a8a]">Vanille de Madagascar</h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-[#1e3a8a]/5 text-[#1e3a8a] rounded-full">Signature</span>
                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/flavor/fraise" className="snap-center shrink-0 w-72 h-[420px] premium-card rounded-[2rem] flex flex-col overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                <div className="h-64 w-full overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdiSBdjSosuLyIhTuU3_UNUMcuL80QGYEHG7tldX8wW2as_RrAySkP2ENaZGnZLUYOk4Mik_4QxHX2kaYIzDDLUx-AzK9pIKJC_-Mfo7OtuEYOXET261VhApyW_BXoKVT9BDoC3AUx3K_stUOICiybevLXysz3QwA-jl8GVr9Hx8A32ak3mZydDMaeCicAGlr492DKOdrXrtxSn-fy9gz6H_GbuuJLUWgZN93EQP5-70YD7ul7_x9ppKwYcH9-VDRXTV2QehnVwPgz')" }}
                  ></div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#1e3a8a]/40 font-bold">Sorbet Plein Fruit</p>
                    <h3 className="font-serif font-bold text-xl text-[#1e3a8a]">Fraise Gariguette</h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-[#1e3a8a]/5 text-[#1e3a8a] rounded-full">Local</span>
                    <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
