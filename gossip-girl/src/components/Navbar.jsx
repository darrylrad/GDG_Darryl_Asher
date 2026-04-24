import './Navbar.css'

export default function Navbar({ onHome, onTea, onAbout }) {
  return (
    <nav className="navbar">
      <button className="nav-btn" onClick={onHome}>home</button>
      <button className="nav-btn" onClick={onTea}>tea</button>
      <button className="nav-btn" onClick={onAbout}>about</button>
    </nav>
  )
}
