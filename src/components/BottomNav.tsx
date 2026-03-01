import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  // Hide bottom nav on splash screen
  if (path === '/') return null;

  const navItems = [
    { id: 'home', label: 'Accueil', icon: 'home', path: '/home' },
    { id: 'map', label: 'Carte', icon: 'map', path: '/map' },
    { id: 'menu', label: 'Menu', icon: 'restaurant_menu', path: '/menu' },
    { id: 'info', label: 'Infos', icon: 'info', path: '/info' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto premium-header px-6 pb-safe pt-3 z-50">
      <div className="flex justify-between items-center pb-4">
        {navItems.map((item) => {
          const isActive = path === item.path || (path.startsWith('/flavor') && item.id === 'menu');
          return (
            <Link
              key={item.id}
              to={item.path}
              className={clsx(
                "flex flex-1 flex-col items-center justify-center gap-1.5 group transition-all",
                isActive ? "text-[#1e3a8a]" : "text-[#1e3a8a]/30 hover:text-[#1e3a8a]/60"
              )}
            >
              <div className={clsx(
                "flex size-10 items-center justify-center rounded-2xl transition-all",
                isActive ? "bg-[#1e3a8a]/5 shadow-inner" : "bg-transparent"
              )}>
                <span 
                  className={clsx("material-symbols-outlined text-[22px] transition-all", isActive && "fill")}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
              </div>
              <p className={clsx(
                "text-[9px] uppercase tracking-[0.15em]",
                isActive ? "font-bold" : "font-medium"
              )}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
