
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'  
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <ErrorBoundary>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      </ErrorBoundary>
    </>

  )
}

export default App
