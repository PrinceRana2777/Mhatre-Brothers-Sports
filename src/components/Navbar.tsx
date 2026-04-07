import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/90 py-3 backdrop-blur-md shadow-lg shadow-primary/5' : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start">
            <span className="text-xl font-extrabold tracking-tighter text-primary sm:text-2xl">
              MHATRE BROTHERS
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-secondary sm:text-xs">
              म्हात्रे ब्रदर्स क्रीडा
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-semibold transition-colors hover:text-primary',
                    location.pathname === link.path ? 'text-primary' : 'text-white/80'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/products"
                className="flex items-center space-x-2 rounded-full bg-primary px-6 py-2 text-sm font-bold text-background transition-transform hover:scale-105 active:scale-95"
              >
                <ShoppingBag size={18} />
                <span>SHOP NOW</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-surface md:hidden"
          >
            <div className="space-y-1 px-4 pt-2 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'block rounded-md px-3 py-4 text-base font-bold transition-colors',
                    location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-white hover:bg-white/5'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/products"
                className="mt-4 block w-full rounded-md bg-primary py-4 text-center text-base font-bold text-background"
              >
                SHOP NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
