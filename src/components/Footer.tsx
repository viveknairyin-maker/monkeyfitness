import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Instagram, Youtube, Facebook } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-monkey-charcoal border-t border-monkey-dark-gray">
      <div className="section-padding py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="Monkey Fitness logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-monkey-muted text-sm font-body">
              Train Hard. Live Strong.
            </p>
            <p className="text-monkey-muted text-sm font-body mt-2">
              Bengaluru&apos;s premier fitness destination since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-6 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-monkey-muted hover:text-monkey-yellow transition-colors text-sm font-body uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-lg text-white mb-6 tracking-wider">FIND US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-monkey-yellow mt-0.5 flex-shrink-0" />
                <span className="text-monkey-muted text-sm font-body">
                  Plot 1712, 50 Feet Main Rd, above Health and Glow, Kumaraswamy Layout, Bengaluru – 560070
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-monkey-yellow flex-shrink-0" />
                <span className="text-monkey-muted text-sm font-body">
                  080 4093 7393
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-monkey-yellow flex-shrink-0" />
                <span className="text-monkey-muted text-sm font-body">
                  Opens 5:30 AM Daily
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-display text-lg text-white mb-6 tracking-wider">FOLLOW US</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-monkey-dark-gray flex items-center justify-center text-monkey-muted hover:text-monkey-black hover:bg-monkey-yellow transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-monkey-dark-gray flex items-center justify-center text-monkey-muted hover:text-monkey-black hover:bg-monkey-yellow transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-monkey-dark-gray flex items-center justify-center text-monkey-muted hover:text-monkey-black hover:bg-monkey-yellow transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            <p className="text-monkey-muted text-sm font-body">
              <span className="text-white font-semibold">LGBTQ+ Friendly</span>
              <br />
              <span className="text-white font-semibold">Women-Owned & Operated</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-monkey-dark-gray">
        <div className="section-padding py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-monkey-muted text-xs font-body">
            © 2025 Monkey Fitness | Bengaluru
          </p>
          <p className="text-monkey-muted text-xs font-body">
            All rights reserved. Built with 💪 in Kumaraswamy Layout.
          </p>
        </div>
      </div>
    </footer>
  )
}
