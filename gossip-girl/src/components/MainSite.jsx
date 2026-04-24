import LandingSection from './LandingSection'
import TeaSection from './TeaSection'

export default function MainSite({ teaRef, onHome, onTea, onAbout }) {
  return (
    <div style={{ background: '#FFFCF6' }}>
      <LandingSection onHome={onHome} onTea={onTea} onAbout={onAbout} />
      <div ref={teaRef}>
        <TeaSection />
      </div>
    </div>
  )
}
