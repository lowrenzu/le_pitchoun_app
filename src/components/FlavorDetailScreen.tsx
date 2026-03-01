import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FLAVOR_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAsxOSVUPxRoZeylwN2yIxIvyDcHYwODY2FIbvShEtzABecvD1PjeheHCZz_IxvRmmqZ20xkhLm3WrSFY7cSt0LNFHP-J5D7nvfBtj4oGaN4iWampYBxRAmgaGd5esXv9-QOcs-ta2RG10D7bzvC1wsYQrPtCUDcB29fXslb7i1viUSfAxtvl5GshXyhGKy1jn3FW5KlMpcG0L-X4VlRlU6DkwSI0jgUJfY05Dy3j4SQmW3HzHcbq3nx_cVOPBDReezmlpuwMfr2g68',
  'https://images.unsplash.com/photo-1576506296288-55bb4703f26f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505394033323-424eab93fde3?auto=format&fit=crop&q=80&w=800'
];

export default function FlavorDetailScreen() {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % FLAVOR_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + FLAVOR_IMAGES.length) % FLAVOR_IMAGES.length);
  };

  return (
    <div className="flex-1 w-full max-w-md mx-auto pb-24">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 premium-header px-6 pt-8 pb-4 flex items-center justify-between">
        <Link to="/home" className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined text-[#1e3a8a]">arrow_back</span>
        </Link>
        <h2 className="text-xl font-serif font-bold tracking-tight flex-1 text-center text-[#1e3a8a]">Basilic Frais</h2>
        <button className="flex size-10 items-center justify-center rounded-full premium-card hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined text-[#1e3a8a]">bookmark_border</span>
        </button>
      </header>

      {/* Hero Image Carousel */}
      <div className="mb-10">
        <div className="px-6">
          <div 
            className="w-full flex flex-col justify-end overflow-hidden rounded-[2.5rem] min-h-[420px] relative shadow-2xl premium-card p-1"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-1 rounded-xl bg-center bg-no-repeat bg-cover"
                style={{ 
                  backgroundImage: `url('${FLAVOR_IMAGES[currentImageIndex]}')`,
                  transform: `translateY(${scrollY * 0.1}px)`,
                  height: '110%',
                  top: '-5%',
                  willChange: 'transform'
                }}
              />
            </AnimatePresence>
            
            <div className="absolute inset-1 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>
            
            {/* Carousel Controls */}
            <div className="absolute inset-x-4 bottom-8 flex items-center justify-between z-20">
              <button 
                onClick={prevImage}
                className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {FLAVOR_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextImage}
                className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="px-8 relative -mt-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-[#1e3a8a] font-bold text-[10px] uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg">
            <span className="material-symbols-outlined text-base">verified</span>
            Signature
          </div>
          <h1 className="text-[#1e3a8a] text-4xl font-serif font-bold leading-tight tracking-tight mb-6">
            Le Basilic Frais du Jardin
          </h1>
          <p className="text-[#1e3a8a]/70 text-base font-medium leading-relaxed mb-10 italic">
            "Une saveur audacieuse et rafraîchissante, réalisée avec du basilic fraîchement cueilli dans notre jardin à Sanguinet. Parfait pour accompagner une salade de fruits ou en sorbet digestif après un bon repas."
          </p>
        </motion.div>

        {/* Origin & Quality Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 mb-12"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-[#1e3a8a] text-xl font-serif font-bold">Savoir-faire Artisanal</h3>
            <div className="h-px flex-1 bg-[#1e3a8a]/10 ml-6"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Local Card */}
            <div className="flex flex-col gap-4 rounded-3xl premium-card p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="size-12 rounded-2xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="space-y-1">
                <h2 className="text-[#1e3a8a] text-base font-bold leading-tight">Local</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/50 font-bold">Sanguinet</p>
              </div>
            </div>

            {/* Artisanal Card */}
            <div className="flex flex-col gap-4 rounded-3xl premium-card p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="size-12 rounded-2xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined">icecream</span>
              </div>
              <div className="space-y-1">
                <h2 className="text-[#1e3a8a] text-base font-bold leading-tight">Artisanal</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/50 font-bold">Fait main</p>
              </div>
            </div>

            {/* Natural Card */}
            <div className="flex flex-col gap-4 rounded-3xl premium-card p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="size-12 rounded-2xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div className="space-y-1">
                <h2 className="text-[#1e3a8a] text-base font-bold leading-tight">Naturel</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/50 font-bold">Sans additifs</p>
              </div>
            </div>

            {/* Vegan Card */}
            <div className="flex flex-col gap-4 rounded-3xl premium-card p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="size-12 rounded-2xl bg-[#1e3a8a] flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <div className="space-y-1">
                <h2 className="text-[#1e3a8a] text-base font-bold leading-tight">Sorbet</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#1e3a8a]/50 font-bold">100% Vegan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nutritional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="rounded-[2rem] premium-card overflow-hidden mb-12 shadow-lg"
        >
          <div className="p-6 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#1e3a8a]">nutrition</span>
              <span className="font-bold text-[#1e3a8a] text-sm uppercase tracking-widest">Valeurs Nutritionnelles</span>
            </div>
            <span className="material-symbols-outlined text-[#1e3a8a]/30">expand_more</span>
          </div>
          <div className="px-6 pb-6 pt-0 border-t border-[#1e3a8a]/5">
            <div className="flex justify-between py-4 border-b border-[#1e3a8a]/5 text-sm">
              <span className="text-[#1e3a8a]/60 font-medium">Calories (100g)</span>
              <span className="font-bold text-[#1e3a8a]">120 kcal</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#1e3a8a]/5 text-sm">
              <span className="text-[#1e3a8a]/60 font-medium">Glucides</span>
              <span className="font-bold text-[#1e3a8a]">28g</span>
            </div>
            <div className="flex justify-between py-4 text-sm">
              <span className="text-[#1e3a8a]/60 font-medium">Allergènes</span>
              <span className="font-bold text-[#1e3a8a]">Aucun</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-6 z-40 pointer-events-none">
        <button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold text-[10px] uppercase tracking-[0.2em] h-16 rounded-full shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all pointer-events-auto">
          <span className="material-symbols-outlined text-lg">share</span>
          Partager cette saveur
        </button>
      </div>
    </div>
  );
}
