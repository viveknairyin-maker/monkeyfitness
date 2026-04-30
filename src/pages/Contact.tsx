import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Clock, Instagram, Youtube, Facebook, CheckCircle } from 'lucide-react'
import gsap from 'gsap'

/* ─── Contact Hero ─── */
function ContactHero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    const els = textRef.current.querySelectorAll('.contact-hero-line')
    gsap.fromTo(els,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center bg-monkey-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-gym-interior.jpg"
          alt="Gym interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-monkey-black via-monkey-black/60 to-monkey-black/30" />
      </div>
      <div ref={textRef} className="relative z-10 section-padding max-w-7xl mx-auto pt-24 pb-12">
        <h1 className="contact-hero-line heading-xl text-white mb-4">
          GET IN <span className="text-monkey-yellow">TOUCH</span>
        </h1>
        <p className="contact-hero-line text-monkey-muted text-xl font-body max-w-xl">
          We&apos;re here to help you start your fitness journey
        </p>
      </div>
    </section>
  )
}

/* ─── Contact Form ─── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'General',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="bg-monkey-charcoal border border-monkey-dark-gray p-10 text-center">
        <CheckCircle size={48} className="text-monkey-yellow mx-auto mb-4" />
        <h3 className="font-display text-2xl text-white mb-2 tracking-wider">THANK YOU!</h3>
        <p className="text-monkey-muted font-body">
          We&apos;ll get back to you soon. 💪
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-monkey-charcoal border border-monkey-dark-gray p-8 space-y-6">
      <div>
        <label className="block text-white text-sm font-body font-semibold uppercase tracking-wider mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-monkey-black border border-monkey-dark-gray text-white px-4 py-3 font-body focus:border-monkey-yellow focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-white text-sm font-body font-semibold uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-monkey-black border border-monkey-dark-gray text-white px-4 py-3 font-body focus:border-monkey-yellow focus:outline-none transition-colors"
            placeholder="+91 ..."
          />
        </div>
        <div>
          <label className="block text-white text-sm font-body font-semibold uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-monkey-black border border-monkey-dark-gray text-white px-4 py-3 font-body focus:border-monkey-yellow focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-white text-sm font-body font-semibold uppercase tracking-wider mb-2">
          Enquiry Type
        </label>
        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className="w-full bg-monkey-black border border-monkey-dark-gray text-white px-4 py-3 font-body focus:border-monkey-yellow focus:outline-none transition-colors"
        >
          <option>General</option>
          <option>Membership</option>
          <option>Personal Training</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-white text-sm font-body font-semibold uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-monkey-black border border-monkey-dark-gray text-white px-4 py-3 font-body focus:border-monkey-yellow focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your fitness goals..."
        />
      </div>

      <button type="submit" className="w-full btn-primary py-4">
        Send Message
      </button>
    </form>
  )
}

/* ─── Contact Content ─── */
function ContactContent() {
  return (
    <section className="bg-monkey-black py-20 md:py-28">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div>
            <h2 className="heading-lg text-white mb-8">
              VISIT <span className="text-monkey-yellow">US</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-monkey-charcoal border border-monkey-dark-gray flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-monkey-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-body font-semibold mb-1">Address</h4>
                  <p className="text-monkey-muted font-body text-sm leading-relaxed">
                    Plot 1712, 50 Feet Main Rd, above Health and Glow,<br />
                    Kumaraswamy Layout, Bengaluru – 560070
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-monkey-charcoal border border-monkey-dark-gray flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-monkey-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-body font-semibold mb-1">Phone</h4>
                  <p className="text-monkey-muted font-body text-sm">
                    080 4093 7393
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-monkey-charcoal border border-monkey-dark-gray flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-monkey-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-body font-semibold mb-1">Hours</h4>
                  <p className="text-monkey-muted font-body text-sm">
                    Opens 5:30 AM Daily (Monday – Sunday)
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-monkey-yellow font-body font-semibold mb-1">🌈 LGBTQ+ Friendly</p>
              <p className="text-monkey-yellow font-body font-semibold">👩 Women-Owned & Operated</p>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-white font-body font-semibold uppercase tracking-wider mb-4 text-sm">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-monkey-charcoal border border-monkey-dark-gray flex items-center justify-center text-monkey-muted hover:text-monkey-black hover:bg-monkey-yellow hover:border-monkey-yellow transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-monkey-charcoal border border-monkey-dark-gray flex items-center justify-center text-monkey-muted hover:text-monkey-black hover:bg-monkey-yellow hover:border-monkey-yellow transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-monkey-charcoal border border-monkey-dark-gray flex items-center justify-center text-monkey-muted hover:text-monkey-black hover:bg-monkey-yellow hover:border-monkey-yellow transition-all"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <h2 className="heading-lg text-white mb-8">
              SEND A <span className="text-monkey-yellow">MESSAGE</span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Map Section ─── */
function MapSection() {
  return (
    <section className="bg-monkey-charcoal py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <h2 className="heading-md text-white mb-8 text-center">
          FIND US ON THE <span className="text-monkey-yellow">MAP</span>
        </h2>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Monkey+Fitness+Kumaraswamy+Layout+Bengaluru&output=embed"
            width="100%"
            height="400"
            style={{
              border: 0,
              borderRadius: '10px',
              filter: 'grayscale(80%) invert(1) brightness(0.8)',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Monkey Fitness Location"
          />
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Page ─── */
export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactContent />
      <MapSection />
    </main>
  )
}
