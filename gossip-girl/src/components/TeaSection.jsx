import { useState, useEffect, useRef } from 'react'
import GooglyEyes from './GooglyEyes'
import DraggableEnvelope from './DraggableEnvelope'
import './TeaSection.css'

const INITIAL_ENVELOPES = [
  {
    id: 1, x: '8%', y: 80, rotation: -18,
    gossip: "S was spotted sneaking out of B's building at midnight... and it wasn't for a study session."
  },
  {
    id: 2, x: '58%', y: 60, rotation: 12,
    gossip: "Chuck Bass has a secret fan club. Membership: more people than you'd think."
  },
  {
    id: 3, x: '6%', y: 360, rotation: -6,
    gossip: "Someone's daddy cut off their black card. Spotted: swiping declined at Barneys."
  },
  {
    id: 4, x: '38%', y: 420, rotation: 22,
    gossip: "Nate's new 'study partner' has never once been seen at the library. Curious."
  },
]

const SCROLL_ENVELOPES = [
  {
    id: 5, x: '62%', y: 500, rotation: -9,
    gossip: "A certain social climber has been photoshopping herself into charity event photos."
  },
  {
    id: 6, x: '18%', y: 680, rotation: 14,
    gossip: "The real queen of the Upper East Side? It was never who you thought. xoxo."
  },
]

export default function TeaSection() {
  const [showExtra, setShowExtra] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      if (-rect.top > 350) setShowExtra(true)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="tea-section" ref={sectionRef} id="tea">
      <div className="eyes-sticky">
        <GooglyEyes />
      </div>
      <div className="envelope-field">
        {INITIAL_ENVELOPES.map(env => (
          <DraggableEnvelope
            key={env.id}
            initialX={env.x}
            initialY={env.y}
            rotation={env.rotation}
            gossip={env.gossip}
          />
        ))}
        {showExtra && SCROLL_ENVELOPES.map(env => (
          <DraggableEnvelope
            key={env.id}
            initialX={env.x}
            initialY={env.y}
            rotation={env.rotation}
            gossip={env.gossip}
            size={125}
          />
        ))}
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="marquee-text">
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
          </span>
          <span className="marquee-text" aria-hidden="true">
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
            you know you love me, xoxo gossip girl &nbsp;&nbsp;·&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </section>
  )
}
