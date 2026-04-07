import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-extrabold tracking-tighter text-primary">
                MHATRE BROTHERS
              </span>
              <span className="text-xs font-medium tracking-[0.2em] text-secondary">
                म्हात्रे ब्रदर्स क्रीडा
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Your ultimate destination for premium sports gear in Naigaon. We provide top-quality equipment, custom jerseys, and trophies for champions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-primary hover:text-background">
                <Facebook size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-primary hover:text-background">
                <Instagram size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/5 p-2 text-white transition-colors hover:bg-primary hover:text-background">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About Us</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-primary">Products</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">Services</Link></li>
              <li><Link to="/gallery" className="transition-colors hover:text-primary">Gallery</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Categories</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/products" className="transition-colors hover:text-primary">Cricket Gear</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-primary">Football Kits</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-primary">Gym Accessories</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-primary">Custom Jerseys</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-primary">Trophies & Medals</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary" />
                <span>Chandrapada Road, Opp. Arihant Jewellers, Naigaon East, Vasai-Virar, Maharashtra</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <span>+91 8976278477</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <span>info@mhatresports.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Mhatre Brothers Sports. All rights reserved. Designed for Champions.</p>
        </div>
      </div>
    </footer>
  );
}
