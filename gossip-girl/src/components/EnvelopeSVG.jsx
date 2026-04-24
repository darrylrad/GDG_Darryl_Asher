import envelopeImg from '../assets/ -3S.png'

export default function EnvelopeSVG({ size = 150, className = '' }) {
  return (
    <img
      src={envelopeImg}
      width={size}
      className={className}
      alt="envelope"
      draggable={false}
      style={{ display: 'block' }}
    />
  )
}
