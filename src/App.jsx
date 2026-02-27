
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'  
import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services'


function App() {

  return (
    <>
      <ErrorBoundary>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      </ErrorBoundary>
    </>

  )
}

export default App
