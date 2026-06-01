import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import JobsPage from './pages/JobsPage'
import StoryPage from './pages/StoryPage'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
