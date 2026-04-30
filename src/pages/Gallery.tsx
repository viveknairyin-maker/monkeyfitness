import { useState, useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Category = 'All' | 'Equipment' | 'Training'

interface GalleryImage {
  src: string
  alt: string
  category: Category
}

const galleryImages: GalleryImage[] = [
  { src: '/images/gym-equipment-1.jpg', alt: 'Dumbbell rack', category: 'Equipment' },
  { src: '/images/muscular-gym-training.jpg', alt: 'Heavy deadlift training', category: 'Training' },
  { src: '/images/gallery-workout-1.jpg', alt: 'Battle ropes workout', category: 'Training' },
  { src: '/images/gym-equipment-2.jpg', alt: 'Cable machine station', category: 'Equipment' },
  { src: '/images/heavy-lifting.jpg', alt: 'Barbell lifting', category: 'Training' },
  { src: '/images/about-gym-interior.jpg', alt: 'Gym interior', category: 'Equipment' },
  { src: '/images/gallery-workout-2.jpg', alt: 'Squat training', category: 'Training' },
  { src: '/images/gym-equipment-1.jpg', alt: 'Weight plates', category: 'Equipment' },
  { src: '/images/muscular-gym-training.jpg', alt: 'Power training', category: 'Training' },
  { src: '/images/gym-equipment-2.jpg', alt: 'Functional training area', category: 'Equipment' },
  { src: '/images/gallery-workout-1.jpg', alt: 'High intensity training', category: 'Training' },
]

const tabs: Category[] = ['All', 'Equipment', 'Training']

/* ─── Gallery Hero ─── */
function GalleryHero() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return
    const els = textRef.current.querySelectorAll('.gallery-hero-line')
    gsap.fromTo(els,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center bg-monkey-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gym-equipment-1.jpg"
          alt="Gym equipment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-monkey-black via-monkey-black/60 to-monkey-black/30" />
      </div>
      <div ref={textRef} className="relative z-10 section-padding max-w-7xl mx-auto pt-24 pb-12">
        <h1 className="gallery-hero-line heading-xl text-white mb-4">
          GYM <span className="text-monkey-yellow">GALLERY</span>
        </h1>
        <p className="gallery-hero-line text-monkey-muted text-xl font-body max-w-xl">
          A look inside Monkey Fitness
        </p>
      </div>
    </section>
  )
}

/* ─── Lightbox ─── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (currentIndex < 0 || currentIndex >= images.length) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button
        className="absolute top-4 right-4 text-white hover:text-monkey-yellow transition-colors z-10 p-2"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-monkey-yellow transition-colors z-10 p-4 text-3xl"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-monkey-yellow transition-colors z-10 p-4 text-3xl"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
      >
        ›
      </button>

      <div
        className="max-w-[90vw] max-h-[85vh] border-4 border-monkey-yellow"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[85vh] object-contain block"
        />
      </div>
    </div>
  )
}

/* ─── Gallery Grid ─── */
function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<Category>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)
  const galleryRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const filteredImages = activeTab === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeTab)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1)
  }, [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))
  }, [filteredImages.length])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))
  }, [filteredImages.length])

  // CylinderCast scroll effect
  useEffect(() => {
    if (!galleryRef.current) return

    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]
    if (items.length === 0) return

    const quickSetters = items.map((item) => ({
      rotateY: gsap.quickTo(item, 'rotateY', { duration: 0.6, ease: 'power2.out' }),
      rotateX: gsap.quickTo(item, 'rotateX', { duration: 0.6, ease: 'power2.out' }),
      scale: gsap.quickTo(item, 'scale', { duration: 0.6, ease: 'power2.out' }),
      opacity: gsap.quickTo(item, 'opacity', { duration: 0.6, ease: 'power2.out' }),
    }))

    const trigger = ScrollTrigger.create({
      trigger: galleryRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: () => {
        const viewportCenterY = window.innerHeight / 2
        const viewportCenterX = window.innerWidth / 2

        items.forEach((item, i) => {
          const rect = item.getBoundingClientRect()
          const itemCenterX = rect.left + rect.width / 2
          const itemCenterY = rect.top + rect.height / 2

          const distX = (itemCenterX - viewportCenterX) / viewportCenterX
          const distY = (itemCenterY - viewportCenterY) / (window.innerHeight / 2)

          const rotateY = distX * 15
          const rotateX = -distY * 5
          const scale = 1 - Math.abs(distY) * 0.1
          const opacity = 0.5 + (1 - Math.abs(distY)) * 0.5

          quickSetters[i].rotateY(rotateY)
          quickSetters[i].rotateX(rotateX)
          quickSetters[i].scale(scale)
          quickSetters[i].opacity(opacity)
        })
      },
    })

    return () => trigger.kill()
  }, [filteredImages])

  // Reset refs when filter changes
  useEffect(() => {
    itemRefs.current = []
  }, [activeTab])

  return (
    <section className="bg-monkey-black py-16 md:py-20">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? 'bg-monkey-yellow text-monkey-black'
                  : 'bg-monkey-charcoal text-white hover:bg-monkey-dark-gray'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div
          ref={galleryRef}
          className="gallery-masonry"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {filteredImages.map((img, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              ref={(el) => { itemRefs.current[idx] = el }}
              className="gallery-item cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}

/* ─── Gallery Page ─── */
export default function Gallery() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
    </main>
  )
}
