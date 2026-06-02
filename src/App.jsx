import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import AddJob from './pages/AddJob'
import Job from './components/Job'
import EditJob from './pages/EditJob'
import Footer from  './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import JobListings from './components/JobListings'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
