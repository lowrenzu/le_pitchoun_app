import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recommendFlavor } from '../services/gemini';

export default function MenuScreen() {
  const [showAssistant, setShowAssistant] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAssistant = async () => {
    if (!userQuery.trim()) return;
    setIsLoading(true);
    const response = await recommendFlavor(userQuery);
    setAiResponse(response);
    setIsLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col min-h-[100dvh] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 premium-header px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors">
            <span className="material-symbols-outlined text-[#1e3a8a]">arrow_back</span>
          </Link>
          <h2 className="text-xl font-serif font-bold leading-tight tracking-tight flex-1 text-center text-[#1e3a8a]">La Carte</h2>
          <button className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors">
            <span className="material-symbols-outlined text-[#1e3a8a]">search</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mt-6 overflow-x-auto hide-scrollbar pb-2">
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-[#1e3a8a] text-white font-bold text-[10px] uppercase tracking-widest shadow-lg">
            Tous
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full premium-card text-[#1e3a8a] font-bold text-[10px] uppercase tracking-widest hover:bg-white/40 transition-colors">
            Crèmes Glacées
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full premium-card text-[#1e3a8a] font-bold text-[10px] uppercase tracking-widest hover:bg-white/40 transition-colors">
            Sorbets
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8 space-y-10">
        {/* AI Assistant Banner */}
        <div className="premium-card rounded-3xl p-6 flex items-center justify-between cursor-pointer hover:shadow-xl transition-all" onClick={() => setShowAssistant(true)}>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-[#1e3a8a] text-lg">Assistant Gourmand</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/50 font-bold">Trouvez votre parfum idéal</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#1e3a8a]/30">chevron_right</span>
        </div>

        {/* Card 1: Vanille */}
        <div className="group relative flex flex-col premium-card rounded-[2.5rem] shadow-xl overflow-hidden transition-all hover:shadow-2xl">
          <div className="relative h-72 w-full overflow-hidden">
            <img 
              alt="Scoop of vanilla ice cream in a bowl" 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNZnj7d3AbBkaFbSybsAZB6ANUuuK08zoN2IG8mcI84goeCqN00nhg6fvN0-rI59Y61w5Y1OmTrMZYIGC3_NaLh44YFEvGvrEGfeeTQRUcWflvr2i2Rl4E7CYSEQy2yTz5j_XBcnk1gUIdPmzHr3YPNeR4ChOkcHN213ntY4_-91lvfRshsPq_Jv6VomkmAjppNrLzU1A-nTThol6HuHyKdRmXdHmyEJJJBcYu2mNxggXLi_K1gerVzbE8xYkuq2-4PvLlVbxFgY8z"
            />
            <button className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md shadow-lg transition-transform active:scale-95 hover:bg-white/60">
              <span className="material-symbols-outlined text-[#1e3a8a]">favorite</span>
            </button>
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white/90 text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
              Signature
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#1e3a8a]">Vanille de Madagascar</h3>
                <p className="text-xs text-[#1e3a8a]/60 font-medium">L'essence même de l'artisanat</p>
              </div>
              <span className="text-xl font-serif font-bold text-[#1e3a8a]">4,50€</span>
            </div>
            <div className="mt-6 pt-6 border-t border-[#1e3a8a]/5">
              <details className="group/details">
                <summary className="flex cursor-pointer items-center justify-between list-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#1e3a8a] text-lg">local_florist</span>
                    Savoir-faire & Origine
                  </span>
                  <span className="material-symbols-outlined text-[#1e3a8a]/30 transition-transform group-open/details:rotate-180">expand_more</span>
                </summary>
                <div className="mt-4 text-xs text-[#1e3a8a]/70 leading-relaxed space-y-2">
                  <p>Élaborée avec le lait frais de la Ferme des Pins à Sanguinet, notre vanille est infusée pendant 24h pour une onctuosité incomparable.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 2: Fraise */}
        <div className="group relative flex flex-col premium-card rounded-[2.5rem] shadow-xl overflow-hidden transition-all hover:shadow-2xl">
          <div className="relative h-72 w-full overflow-hidden">
            <img 
              alt="Bright pink strawberry ice cream scoop" 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdiSBdjSosuLyIhTuU3_UNUMcuL80QGYEHG7tldX8wW2as_RrAySkP2ENaZGnZLUYOk4Mik_4QxHX2kaYIzDDLUx-AzK9pIKJC_-Mfo7OtuEYOXET261VhApyW_BXoKVT9BDoC3AUx3K_stUOICiybevLXysz3QwA-jl8GVr9Hx8A32ak3mZydDMaeCicAGlr492DKOdrXrtxSn-fy9gz6H_GbuuJLUWgZN93EQP5-70YD7ul7_x9ppKwYcH9-VDRXTV2QehnVwPgz"
            />
            <button className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md shadow-lg transition-transform active:scale-95 hover:bg-white/60">
              <span className="material-symbols-outlined text-[#1e3a8a]">favorite</span>
            </button>
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white/90 text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
              Local
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#1e3a8a]">Fraise Gariguette</h3>
                <p className="text-xs text-[#1e3a8a]/60 font-medium">Sorbet plein fruit rafraîchissant</p>
              </div>
              <span className="text-xl font-serif font-bold text-[#1e3a8a]">4,50€</span>
            </div>
            <div className="mt-6 pt-6 border-t border-[#1e3a8a]/5">
              <details className="group/details">
                <summary className="flex cursor-pointer items-center justify-between list-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#1e3a8a] text-lg">local_florist</span>
                    Ingrédients & Provenance
                  </span>
                  <span className="material-symbols-outlined text-[#1e3a8a]/30 transition-transform group-open/details:rotate-180">expand_more</span>
                </summary>
                <div className="mt-4 text-xs text-[#1e3a8a]/70 leading-relaxed space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-1.5 shrink-0"></span>
                      <span>Fraises Gariguette du Lot-et-Garonne</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-1.5 shrink-0"></span>
                      <span>Sucre de canne bio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-1.5 shrink-0"></span>
                      <span>Eau de source des Landes</span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Card 3: Caramel */}
        <div className="group relative flex flex-col premium-card rounded-[2.5rem] shadow-xl overflow-hidden transition-all hover:shadow-2xl">
          <div className="relative h-72 w-full overflow-hidden">
            <img 
              alt="Rich salted caramel ice cream close up" 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Z6rMT-jctux861UxQiVePKf3Tr_BK9sTfaWv8xCIsPZSB1JD8ehS68A8YYP4EFf00tawXBMEzqDfD9WdjSEYlzr6hUO_lNkDk_tcIYwwpxC5GVVHg7c-zcjrsWtRl7JmB4TCghExnP3CtUWD1OjIVhenufgjGvL6JWXw5SazYhBhTfo0ogSC0-oKKr1Vx-lUXFuwrDUjkpTVftpqiUbSNIedyD8rt2i7ob3msWosm8xmNjLrhl9TUgpT0FST0qZE39fiGaAoUu9_"
            />
            <button className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md shadow-lg transition-transform active:scale-95 hover:bg-white/60">
              <span className="material-symbols-outlined text-[#1e3a8a]">favorite</span>
            </button>
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white/90 text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
              Gourmand
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#1e3a8a]">Caramel Beurre Salé</h3>
                <p className="text-xs text-[#1e3a8a]/60 font-medium">Gourmandise au sel de Guérande</p>
              </div>
              <span className="text-xl font-serif font-bold text-[#1e3a8a]">4,50€</span>
            </div>
            <div className="mt-6 pt-6 border-t border-[#1e3a8a]/5">
              <details className="group/details">
                <summary className="flex cursor-pointer items-center justify-between list-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#1e3a8a] text-lg">local_florist</span>
                    Ingrédients & Provenance
                  </span>
                  <span className="material-symbols-outlined text-[#1e3a8a]/30 transition-transform group-open/details:rotate-180">expand_more</span>
                </summary>
                <div className="mt-4 text-xs text-[#1e3a8a]/70 leading-relaxed space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-1.5 shrink-0"></span>
                      <span>Caramel maison cuit au chaudron</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-1.5 shrink-0"></span>
                      <span>Fleur de sel de Guérande</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-1.5 shrink-0"></span>
                      <span>Beurre AOP Charentes-Poitou</span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Modal */}
      {showAssistant && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="premium-card w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl relative animate-in slide-in-from-bottom-10 fade-in duration-300 border border-black/5">
            <button 
              onClick={() => setShowAssistant(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#1e3a8a]/5 text-[#1e3a8a] hover:bg-[#1e3a8a]/10 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a]/5 flex items-center justify-center text-[#1e3a8a]">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#1e3a8a]">Assistant IA</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/40 font-bold">Dites-moi ce dont vous avez envie !</p>
              </div>
            </div>

            <div className="mb-6">
              <textarea
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ex: J'ai envie de quelque chose de fruité et léger..."
                className="w-full bg-white/50 border border-[#1e3a8a]/10 rounded-2xl p-6 text-sm text-[#1e3a8a] placeholder:text-[#1e3a8a]/40 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 resize-none h-32 backdrop-blur-sm font-medium"
              />
            </div>

            <button 
              onClick={handleAskAssistant}
              disabled={isLoading || !userQuery.trim()}
              className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold h-14 rounded-full flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-8 shadow-xl active:scale-95"
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin">refresh</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span className="text-[10px] uppercase tracking-widest">Recommander un parfum</span>
                </>
              )}
            </button>

            {aiResponse && (
              <div className="bg-[#1e3a8a]/5 border border-[#1e3a8a]/10 rounded-2xl p-6 text-sm text-[#1e3a8a] leading-relaxed italic font-medium">
                "{aiResponse}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
