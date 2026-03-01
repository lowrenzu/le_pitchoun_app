import { Link } from 'react-router-dom';

export default function InfoScreen() {
  return (
    <div className="flex-1 overflow-y-auto pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 premium-header px-6 pt-8 pb-4 flex items-center justify-between">
        <Link to="/home" className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined text-[#1e3a8a]">arrow_back</span>
        </Link>
        <h1 className="text-xl font-serif font-bold tracking-tight flex-1 text-center text-[#1e3a8a]">Notre Maison</h1>
        <div className="w-10"></div>
      </header>

      {/* Hero Section */}
      <div className="px-6 pt-6 pb-4">
        <div 
          className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-[2.5rem] shadow-2xl overflow-hidden relative premium-card p-1"
        >
          <div className="absolute inset-1 rounded-[2.2rem] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXG_mMJ1dkpoGh7LKjAvKx0hnrfVdCSCZtm81Jn3C3KF6tnsX2TueqbwuZSj5fwdk8C-k2MRfvA_R-RViLemqnnSYCLw3MEDCXtJqoq0yatLuRIoApPoultUjwdMddN5WgBs9lDjjOf_tJkSHz4bVWMMZb_axKpggDJWoaGHCK1wDUDHk_b6IRATj8MfMuizv86-mF-KNfMi6YxIQhax7N7C9hk8tHSlspBiDJUjbDsmOfIVuDNghykuCnsmDeHNl8Wc4kgg_Sfu8x')" }}></div>
          <div className="absolute inset-1 rounded-[2.2rem] bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full mb-2 border border-white/20 uppercase tracking-widest">Depuis 2015</span>
            <h2 className="text-2xl font-serif font-bold drop-shadow-md">L'Artisanat au bord du lac</h2>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="px-10 py-10 premium-card mx-6 rounded-[2.5rem] mt-6 border border-black/5 shadow-xl">
        <h2 className="text-3xl font-serif font-bold text-[#1e3a8a] mb-6">Notre Histoire</h2>
        <div className="space-y-4">
          <p className="text-[#1e3a8a]/70 text-base leading-relaxed italic">
            "Découvrez la passion de notre chef glacier pour les saveurs authentiques. Tous nos parfums sont élaborés artisanalement avec des ingrédients 100% locaux, directement au bord du lac de Sanguinet."
          </p>
          <p className="text-[#1e3a8a]/70 text-base leading-relaxed">
            Chaque matin, nous sélectionnons les fruits les plus frais pour vous offrir une expérience gustative inoubliable, respectueuse de la nature et de nos traditions landaises.
          </p>
        </div>
      </section>

      {/* Quick Actions / Follow Link */}
      <div className="px-6 py-6 mt-4">
        <Link to="/map" className="flex items-center justify-between p-6 premium-card rounded-3xl hover:shadow-xl transition-all group border border-black/5">
          <div className="flex items-center gap-5">
            <div className="bg-[#1e3a8a] text-white size-12 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[24px]">location_searching</span>
            </div>
            <div className="space-y-0.5">
              <p className="font-serif font-bold text-[#1e3a8a] text-lg">Suivre le triporteur</p>
              <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/40 font-bold">Localisation en temps réel</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#1e3a8a]/30 text-[24px] group-hover:translate-x-1 transition-transform">chevron_right</span>
        </Link>
      </div>

      {/* Contact & Socials */}
      <section className="px-6 py-8">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e3a8a]/30 mb-6 px-4">Contactez-nous</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-8 premium-card border border-black/5 rounded-[2rem] hover:shadow-xl transition-all group">
            <span className="material-symbols-outlined text-[#25D366] mb-4 text-[40px] group-hover:scale-110 transition-transform">chat</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a]">WhatsApp</span>
          </button>
          <button className="flex flex-col items-center justify-center p-8 premium-card border border-black/5 rounded-[2rem] hover:shadow-xl transition-all group">
            <span className="material-symbols-outlined text-[#E1306C] mb-4 text-[40px] group-hover:scale-110 transition-transform">photo_camera</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a]">Instagram</span>
          </button>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="px-6 pb-12">
        <div className="premium-card rounded-[2.5rem] p-8 border border-black/5 shadow-xl">
          <div className="flex items-center gap-4 mb-8 text-[#1e3a8a]">
            <span className="material-symbols-outlined text-2xl">schedule</span>
            <h3 className="font-serif font-bold text-xl">Horaires d'ouverture</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#1e3a8a]/40 font-bold uppercase tracking-widest text-[10px]">Lun - Ven</span>
              <span className="font-bold text-[#1e3a8a]">13:00 - 19:00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#1e3a8a]/40 font-bold uppercase tracking-widest text-[10px]">Samedi</span>
              <span className="font-bold text-[#1e3a8a]">11:00 - 20:00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#1e3a8a]/40 font-bold uppercase tracking-widest text-[10px]">Dimanche</span>
              <span className="font-bold text-[#1e3a8a]">11:00 - 18:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Logo */}
      <div className="flex justify-center pb-8 opacity-20">
        <span className="material-symbols-outlined text-4xl text-[#1e3a8a]">icecream</span>
      </div>
    </div>
  );
}
