import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'


import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App