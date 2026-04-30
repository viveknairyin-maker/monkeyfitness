import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-monkey-black/95 backdrop-blur-xl border-b border-monkey-dark-gray'
            : 'bg-transparent'
        }`}
        style={{ height: isScrolled ? 64 : 80 }}
      >
        <div className="h-full section-padding flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="Monkey Fitness logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-monkey-muted hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:08040937393"
            className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6 animate-pulse-glow"
          >
            Call Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          isMobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-monkey-charcoal border-l border-monkey-dark-gray transform transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-12">
              <span className="font-display text-lg text-monkey-yellow">MENU</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-display text-2xl uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? 'text-monkey-yellow'
                      : 'text-white hover:text-monkey-yellow'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:08040937393"
                className="btn-primary mt-6 text-center"
                onClick={() => setIsMobileOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
