import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import JobsPage from './pages/JobsPage'
import StoryPage from './pages/StoryPage'
import RedbookPage from './pages/RedbookPage'
import CasesPage from './pages/CasesPage'
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
        <Route path="/lab" element={<JobsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/toolbox" element={<RedbookPage />} />
        <Route path="/about" element={<StoryPage />} />
        <Route path="/jobs" element={<Navigate to="/lab" replace />} />
        <Route path="/story" element={<Navigate to="/about" replace />} />
        <Route path="/redbook" element={<Navigate to="/toolbox" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
