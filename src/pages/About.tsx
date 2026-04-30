import { useEffect, useRef } from 'react'
import { Dumbbell, Award, Sparkles, Users, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import gsap from 'gsap'

/* ─── Hero Banner ─── */
function AboutHero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    const els = textRef.current.querySelectorAll('.about-hero-line')
    gsap.fromTo(els,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center bg-monkey-black overflow-hidden">
      {/* Diagonal yellow slash */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3 bg-monkey-yellow z-10"
        style={{ boxShadow: '0 0 30px rgba(253, 225, 0, 0.4)' }}
      />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-gym-interior.jpg"
          alt="Gym interior"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-monkey-black via-monkey-black/70 to-monkey-black/40" />
      </div>

      <div ref={textRef} className="relative z-10 section-padding max-w-7xl mx-auto pt-24 pb-16">
        <h1 className="about-hero-line heading-xl text-white mb-4">
          ABOUT <span className="text-monkey-yellow">MONKEY</span> FITNESS
        </h1>
        <p className="about-hero-line text-monkey-muted text-xl font-body max-w-xl">
          More than a gym. A community.
        </p>
      </div>
    </section>
  )
}

/* ─── Our Story ─── */
function OurStory() {
  useScrollReveal()

  return (
    <section className="bg-monkey-black py-20 md:py-28">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="reveal">
            <img
              src="/images/gallery-workout-2.jpg"
              alt="Intense gym workout"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="reveal">
            <h2 className="heading-lg text-white mb-4">
              WHERE STRENGTH<br />
              <span className="text-monkey-yellow">IS BORN</span>
            </h2>
            <div className="w-24 h-1 bg-monkey-yellow mb-8" />
            <p className="text-monkey-muted font-body leading-relaxed mb-6">
              Monkey Fitness is Bengaluru&apos;s go-to gym for serious fitness enthusiasts and beginners
              alike. Located in the heart of Kumaraswamy Layout, our facility offers top-of-the-line
              equipment, certified expert trainers, and an electrifying atmosphere that keeps you coming back.
              We are proud to be an inclusive, LGBTQ+ friendly, and women-welcoming space.
            </p>
            <p className="text-monkey-muted font-body leading-relaxed mb-6">
              Founded with one mission — to make world-class fitness accessible to everyone — Monkey Fitness
              has grown into a community of 400+ dedicated members who push limits daily. Our trainers bring
              decades of combined experience in personal training, strength conditioning, and athletic performance.
            </p>
            <p className="text-monkey-muted font-body leading-relaxed">
              Whether you&apos;re stepping into a gym for the first time or you&apos;re a seasoned athlete,
              Monkey Fitness has everything you need to reach your goals. From free weights and machines to
              functional training zones and dedicated cardio areas, every square foot is designed for results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Choose Us ─── */
function WhyChooseUs() {
  useScrollReveal()

  const features = [
    { icon: Dumbbell, title: 'Advanced Equipment', desc: 'State-of-the-art machines, free weights, and functional training gear.' },
    { icon: Award, title: 'Certified Trainers', desc: 'Expert coaches with nationally recognized certifications.' },
    { icon: Sparkles, title: 'Clean & Hygienic', desc: 'Rigorous cleaning protocols and well-maintained facilities.' },
    { icon: Users, title: 'Inclusive Community', desc: 'A welcoming space for everyone, regardless of fitness level.' },
  ]

  return (
    <section className="bg-monkey-charcoal py-20 md:py-28">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-lg text-white">
            WHY <span className="text-monkey-yellow">CHOOSE</span> US
          </h2>
          <div className="w-24 h-1 bg-monkey-yellow mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="reveal bg-monkey-black p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-monkey-dark-gray rounded-full flex items-center justify-center group-hover:bg-monkey-yellow transition-colors duration-300">
                <f.icon size={28} className="text-monkey-yellow group-hover:text-monkey-black transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-white mb-3 tracking-wider">{f.title}</h3>
              <p className="text-monkey-muted text-sm font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Google Rating Strip ─── */
function RatingStrip() {
  return (
    <section className="bg-monkey-charcoal py-12 border-y border-monkey-dark-gray">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <div className="flex items-center gap-2">
            <Star size={28} className="text-monkey-yellow fill-monkey-yellow" />
            <Star size={28} className="text-monkey-yellow fill-monkey-yellow" />
            <Star size={28} className="text-monkey-yellow fill-monkey-yellow" />
            <Star size={28} className="text-monkey-yellow fill-monkey-yellow" />
            <Star size={28} className="text-monkey-yellow fill-monkey-yellow opacity-50" />
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-display text-3xl text-white">4.6</span>
            <span className="text-monkey-muted font-body">on Google</span>
          </div>
          <div className="w-px h-8 bg-monkey-dark-gray hidden md:block" />
          <span className="font-display text-2xl text-monkey-yellow">414+ Reviews</span>
          <div className="w-px h-8 bg-monkey-dark-gray hidden md:block" />
          <span className="font-display text-xl text-white uppercase tracking-wider">
            Bengaluru&apos;s Favourite Gym
          </span>
        </div>
      </div>
    </section>
  )
}

/* ─── About Page ─── */
export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <RatingStrip />
    </main>
  )
}
