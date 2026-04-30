import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Dumbbell, Trophy, Zap, Star, Quote } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import gsap from 'gsap'

/* ─── Stats Counter Component ─── */
function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-monkey-yellow mb-2">
        {count}{suffix}
      </div>
      <div className="text-monkey-muted text-sm font-body uppercase tracking-wider">{label}</div>
    </div>
  )
}

/* ─── Hero Section ─── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    const chars = textRef.current.querySelectorAll('.hero-char')
    gsap.fromTo(
      chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.3,
      }
    )
  }, [])

  const heroLines = ['TRAIN', 'HARD.', 'PUSH', 'LIMITS.', 'BE', 'UNSTOPPABLE.']

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-monkey-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/muscular-gym-training.jpg"
          alt="Gym training"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-monkey-black via-monkey-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full section-padding max-w-7xl mx-auto pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div ref={textRef}>
            <div className="overflow-hidden mb-2">
              <span className="hero-char inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight">
                {heroLines[0]}
              </span>
            </div>
            <div className="overflow-hidden mb-2">
              <span className="hero-char inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-monkey-yellow tracking-tight">
                {heroLines[1]}
              </span>
            </div>
            <div className="overflow-hidden mb-2">
              <span className="hero-char inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight">
                {heroLines[2]}
              </span>
            </div>
            <div className="overflow-hidden mb-2">
              <span className="hero-char inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-monkey-yellow tracking-tight">
                {heroLines[3]}
              </span>
            </div>
            <div className="overflow-hidden mb-2">
              <span className="hero-char inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight">
                {heroLines[4]}
              </span>
            </div>
            <div className="overflow-hidden mb-6">
              <span className="hero-char inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-monkey-yellow tracking-tight">
                {heroLines[5]}
              </span>
            </div>

            <p className="text-monkey-muted text-lg font-body mb-8 max-w-md">
              Bengaluru&apos;s Premier Fitness Destination — Kumaraswamy Layout
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Start Training
              </Link>
              <Link to="/gallery" className="btn-outline">
                Explore Gym
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <img
                src="/images/muscular-gym-training.jpg"
                alt="Muscular man training"
                className="w-full h-[75vh] object-cover rounded-none"
              />
              {/* Yellow slash divider */}
              <div
                className="absolute left-0 top-0 bottom-0 w-2 bg-monkey-yellow"
                style={{ boxShadow: '0 0 20px rgba(253, 225, 0, 0.5)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats Strip ─── */
function StatsStrip() {
  return (
    <section className="bg-monkey-charcoal py-12 border-y border-monkey-dark-gray">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={414} suffix="+" label="Happy Members" />
          <StatCounter end={46} suffix="" label="Google Rating" />
          <StatCounter end={10} suffix="+" label="Expert Trainers" />
          <StatCounter end={7} suffix="" label="Years of Excellence" />
        </div>
      </div>
    </section>
  )
}

/* ─── Take A Step Section ─── */
function TakeAStepSection() {
  useScrollReveal()

  return (
    <section className="bg-monkey-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left Image */}
          <div className="reveal relative h-[400px] lg:h-[600px]">
            <img
              src="/images/heavy-lifting.jpg"
              alt="Heavy lifting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-monkey-black/30 lg:hidden" />
          </div>

          {/* Right Text */}
          <div className="reveal section-padding py-12 lg:py-0 lg:pl-16">
            <div className="border-2 border-dashed border-monkey-yellow/40 p-8 lg:p-12">
              <h2 className="heading-lg text-white mb-4">
                FORGE YOUR<br />
                <span className="text-monkey-yellow">BEST SELF</span>
              </h2>
              <div className="w-24 h-1 bg-monkey-yellow mb-6" />
              <p className="text-monkey-muted font-body leading-relaxed mb-6">
                Getting fit doesn&apos;t have to be complicated. At Monkey Fitness, our certified trainers
                build personalized programs around your goals — whether it&apos;s muscle gain, fat loss,
                or pure strength. Start your transformation today.
              </p>
              <p className="text-monkey-muted font-body leading-relaxed mb-8">
                With over 7 years of excellence and 414+ transformed lives, we&apos;re not just a gym —
                we&apos;re your partners in building the strongest version of yourself.
              </p>
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Goals Section ─── */
function GoalsSection() {
  useScrollReveal()

  const goals = [
    { icon: Flame, title: 'Weight Loss', desc: 'Burn fat and sculpt your physique with targeted cardio and HIIT programs.' },
    { icon: Dumbbell, title: 'Muscle Gain', desc: 'Build lean muscle mass with progressive overload and hypertrophy training.' },
    { icon: Trophy, title: 'Strength Building', desc: 'Develop raw power with compound lifts and periodized strength programs.' },
    { icon: Zap, title: 'Body Toning', desc: 'Define and shape your body with a mix of resistance and functional training.' },
  ]

  return (
    <section className="bg-monkey-charcoal py-20 md:py-28">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-lg text-white">
            TRAIN FOR YOUR <span className="text-monkey-yellow">GOAL</span>
          </h2>
          <div className="w-24 h-1 bg-monkey-yellow mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, idx) => (
            <div
              key={goal.title}
              className="reveal card-dark p-8 group cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <goal.icon
                size={40}
                className="text-monkey-yellow mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-display text-xl text-white mb-3 tracking-wider">
                {goal.title}
              </h3>
              <p className="text-monkey-muted text-sm font-body leading-relaxed">
                {goal.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  useScrollReveal()

  const testimonials = [
    {
      text: "Training with Shakthi Sir has been one of the best decisions for my fitness journey. His workout plans are well-structured, and his diet guidance is practical and effective.",
      name: 'Shruti Kamule',
      stars: 5,
    },
    {
      text: "The atmosphere is always motivating and workouts are well-structured. A big shoutout to trainer Shakti — incredibly knowledgeable and pushes you to be your best.",
      name: 'Sarthak Vikram',
      stars: 5,
    },
    {
      text: "I've been training here for a few months now. The facility is well-maintained with a great atmosphere and expert guidance.",
      name: 'Silveri Gnaneshwar',
      stars: 5,
    },
  ]

  return (
    <section className="bg-monkey-charcoal py-20 md:py-28">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="heading-lg text-white">
            WHAT OUR <span className="text-monkey-yellow">MEMBERS</span> SAY
          </h2>
          <div className="w-24 h-1 bg-monkey-yellow mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="reveal bg-monkey-black p-8 relative"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Quote size={32} className="text-monkey-yellow mb-4 opacity-60" />
              <p className="text-monkey-muted font-body leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-monkey-yellow fill-monkey-yellow" />
                ))}
              </div>
              <p className="text-white font-body font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Banner ─── */
function CTABanner() {
  useScrollReveal()

  return (
    <section className="bg-monkey-yellow py-20 md:py-28">
      <div className="section-padding max-w-4xl mx-auto text-center reveal">
        <h2 className="font-display text-4xl md:text-6xl text-monkey-black mb-4 tracking-wider">
          READY TO TRANSFORM?
        </h2>
        <p className="text-monkey-black/80 font-body text-lg mb-8 max-w-2xl mx-auto">
          Join Monkey Fitness today and start your journey toward the strongest version of yourself.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-4 font-display text-lg uppercase tracking-wider bg-monkey-black text-white rounded-full hover:bg-monkey-charcoal transition-colors"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  useScrollReveal()

  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <TakeAStepSection />
      <GoalsSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  )
}
