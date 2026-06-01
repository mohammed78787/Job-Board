import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
import NotFound from './components/NotFound'
import AddJob from './pages/AddJob'
import Job from './components/Job'
import EditJob from './pages/EditJob'
import Footer from  './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import HowItWorks from './components/HowItWorks'
import StatsBar from './components/StatsBar'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <StatsBar/>
            <HowItWorks/>
            <HomeCards />
            <JobListings isHome={true} />
            <Testimonials/>
            <ViewAllJobs />
          </>
        } />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
