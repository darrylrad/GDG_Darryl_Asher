import { useState } from 'react'
import EnvelopeSVG from './EnvelopeSVG'
import './Page1.css'

export default function Page1({ onEnter }) {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  return (
    <div
      className="page1"
      onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="page1-content">
        <div className="page1-text-block">
          <h1 className="p1-headline">hey upper east siders...</h1>
          <div className="p1-middle-row">
            <span className="p1-cursive">gossip girl here</span>
            <span className="p1-regular">&nbsp;– and i have</span>
          </div>
          <h2 className="p1-sub">the biggest news ever</h2>
        </div>
        <button className="p1-envelope" onClick={onEnter} aria-label="Enter site">
          <EnvelopeSVG size={170} />
        </button>
      </div>
      <div
        className="page1-overlay"
        style={{
          background: `radial-gradient(circle 230px at ${pos.x}px ${pos.y}px, transparent 0%, #000751 68%)`,
        }}
      />
    </div>
  )
}
