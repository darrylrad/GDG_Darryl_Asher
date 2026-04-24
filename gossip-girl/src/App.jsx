import { useState, useRef } from 'react'
import Page1 from './components/Page1'
import MainSite from './components/MainSite'
import AboutPage from './components/AboutPage'

export default function App() {
  const [view, setView] = useState('intro')
  const teaRef = useRef(null)

  const goToMain = () => {
    setView('main')
    window.scrollTo(0, 0)
  }

  const goToAbout = () => {
    setView('about')
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    if (view !== 'main') {
      setView('main')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToTea = () => {
    if (view !== 'main') {
      setView('main')
      setTimeout(() => {
        teaRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      teaRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      {view === 'intro' && <Page1 onEnter={goToMain} />}
      {view === 'main' && (
        <MainSite
          teaRef={teaRef}
          onHome={goHome}
          onTea={goToTea}
          onAbout={goToAbout}
        />
      )}
      {view === 'about' && (
        <AboutPage onHome={goHome} onTea={goToTea} onAbout={goToAbout} />
      )}
    </div>
  )
}
