import { Link } from 'react-router-dom';

export default function SplashScreen() {
  return (
    <div className="relative h-[100dvh] w-full flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0099ff] overflow-hidden">
        {/* Main gradient base matching the provided image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff] via-[#3a7bd5] to-[#00d2ff]"></div>
        
        {/* Wave layers mimicking the image's specific curves */}
        <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[120%] bg-gradient-to-br from-white/30 to-transparent rounded-[100%] blur-3xl transform -rotate-12"></div>
        <div className="absolute top-[5%] left-[-15%] w-[120%] h-[100%] bg-gradient-to-br from-white/20 to-transparent rounded-[100%] blur-2xl transform -rotate-6"></div>
        <div className="absolute top-[20%] left-[-10%] w-[100%] h-[80%] bg-gradient-to-br from-white/15 to-transparent rounded-[100%] blur-xl transform -rotate-3"></div>
        
        {/* Bottom glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[60%] bg-[#00d2ff]/40 rounded-[100%] blur-3xl"></div>
        
        {/* Overlay to make text pop */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 w-full h-full px-10 py-20 flex flex-col justify-between items-center text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="premium-card p-10 rounded-[3rem] shadow-2xl">
            <h1 className="text-[#1e3a8a] font-serif text-6xl font-bold mb-2">Le Pitchoun</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1e3a8a]/50 font-bold">Artisan Glacier • Sanguinet</p>
          </div>
        </div>
        
        <div className="w-full max-w-xs space-y-10">
          <div className="space-y-3">
            <p className="text-[#1e3a8a] text-2xl font-serif italic leading-tight">
              L'artisanat glacé au bord du lac
            </p>
            <div className="h-0.5 w-12 bg-[#1e3a8a]/20 mx-auto rounded-full"></div>
          </div>
          
          <Link 
            to="/home"
            className="w-full group relative flex items-center justify-center overflow-hidden rounded-full bg-[#1e3a8a] h-16 px-10 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl"
          >
            <span className="relative text-white text-xs font-bold uppercase tracking-[0.2em]">Découvrir</span>
            <span className="material-symbols-outlined relative ml-3 text-white transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
