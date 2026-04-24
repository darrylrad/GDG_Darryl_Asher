import Navbar from './Navbar'
import EnvelopeSVG from './EnvelopeSVG'
import './LandingSection.css'

export default function LandingSection({ onHome, onTea, onAbout }) {
  return (
    <section className="landing-section" id="home">
      <Navbar onHome={onHome} onTea={onTea} onAbout={onAbout} />
      <div className="landing-body">
        <h1 className="xoxo-text">XOXO</h1>
        <button
          className="landing-envelope-btn"
          onClick={onTea}
          aria-label="Go to tea section"
        >
          <EnvelopeSVG size={190} className="landing-envelope" />
        </button>
        <span className="gossip-girl-watermark">gossip<br />girl</span>
      </div>
    </section>
  )
}
