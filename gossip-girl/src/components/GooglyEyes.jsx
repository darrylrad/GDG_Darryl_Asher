import { useEffect, useRef } from 'react'
import './GooglyEyes.css'

function Eye() {
  const eyeRef = useRef(null)
  const pupilRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (!eyeRef.current || !pupilRef.current) return
      const rect = eyeRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx)
      const maxOffset = 10
      const x = Math.cos(angle) * maxOffset
      const y = Math.sin(angle) * maxOffset
      pupilRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="eye" ref={eyeRef}>
      <div className="pupil" ref={pupilRef} />
    </div>
  )
}

export default function GooglyEyes() {
  return (
    <div className="googly-eyes">
      <Eye />
      <Eye />
    </div>
  )
}
