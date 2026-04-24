import { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import phoneImg from '../assets/ -5.jpg'
import './AboutPage.css'

const TYPING_TEXT = "and who am i?\nthat's one\nsecret i'll\nnever tell"

const CHAR_TO_KEY = {
  a:'2',b:'2',c:'2',d:'3',e:'3',f:'3',g:'4',h:'4',i:'4',
  j:'5',k:'5',l:'5',m:'6',n:'6',o:'6',p:'7',q:'7',r:'7',s:'7',
  t:'8',u:'8',v:'8',w:'9',x:'9',y:'9',z:'9',' ':'0',"'":'*',
}

export default function AboutPage({ onHome, onTea, onAbout }) {
  const [displayed, setDisplayed] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [activeKey, setActiveKey] = useState(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const timeRef = useRef(null)

  useEffect(() => {
    if (charIndex >= TYPING_TEXT.length) return
    timeRef.current = setTimeout(() => {
      const ch = TYPING_TEXT[charIndex]
      setDisplayed(prev => prev + ch)
      setCharIndex(prev => prev + 1)
      const key = CHAR_TO_KEY[ch.toLowerCase()]
      if (key) {
        setActiveKey(key)
        setTimeout(() => setActiveKey(null), 130)
      }
    }, 110)
    return () => clearTimeout(timeRef.current)
  }, [charIndex])

  const handleSend = () => {
    if (sending || sent) return
    setSending(true)
    setTimeout(() => { setSent(true); setSending(false) }, 800)
    setTimeout(() => setSent(false), 3200)
  }

  const isDone = charIndex >= TYPING_TEXT.length
  const lines = displayed.split('\n')

  return (
    <div className="about-page">
      <Navbar onHome={onHome} onTea={onTea} onAbout={onAbout} />
      <div className="about-content">
        <div className="nokia-wrapper">
          <img src={phoneImg} className="nokia-img" alt="Nokia phone" draggable={false} />

          {/* Screen overlay — positioned over the phone's screen area */}
          <div className={`screen-overlay ${sending ? 'screen-flash' : ''}`}>
            <div className="screen-status">
              <span className="screen-signal">▐▌▌▌</span>
              <span className="screen-time">7:04</span>
            </div>

            {sent ? (
              <div className="screen-sent-msg">Message sent ✓</div>
            ) : (
              <div className="screen-body">
                {lines.map((line, i) => (
                  <div key={i} className="screen-line">{line}</div>
                ))}
                {!isDone && <span className="typing-cursor">_</span>}
              </div>
            )}

            {/* Active key indicator shown in bottom-right of screen */}
            {activeKey && (
              <div className="key-indicator">{activeKey}</div>
            )}

            <div className="screen-bottom-bar">
              <span>options</span>
              <button className="screen-send-btn" onClick={handleSend}>send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
