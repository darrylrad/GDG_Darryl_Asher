import { useState, useEffect, useRef } from 'react'
import EnvelopeSVG from './EnvelopeSVG'
import './DraggableEnvelope.css'

export default function DraggableEnvelope({ initialX, initialY, rotation = 0, gossip, size = 130 }) {
  const [delta, setDelta] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const dragStartMouse = useRef({ x: 0, y: 0 })
  const dragStartDelta = useRef({ x: 0, y: 0 })
  const didDrag = useRef(false)

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    didDrag.current = false
    dragStartMouse.current = { x: e.clientX, y: e.clientY }
    dragStartDelta.current = { ...delta }
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return
      const dx = e.clientX - dragStartMouse.current.x
      const dy = e.clientY - dragStartMouse.current.y
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) didDrag.current = true
      setDelta({
        x: dragStartDelta.current.x + dx,
        y: dragStartDelta.current.y + dy,
      })
    }
    const handleMouseUp = () => setIsDragging(false)

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const handleClick = () => {
    if (!didDrag.current) setIsOpen(prev => !prev)
  }

  return (
    <div
      className={`draggable-env ${isDragging ? 'dragging' : ''}`}
      style={{
        left: initialX,
        top: initialY,
        transform: `translate(${delta.x}px, ${delta.y}px) rotate(${rotation}deg)`,
        zIndex: isDragging ? 200 : 5,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <EnvelopeSVG size={size} />
      {isOpen && (
        <div
          className="gossip-paper"
          onMouseDown={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
        >
          <p>{gossip}</p>
        </div>
      )}
    </div>
  )
}
