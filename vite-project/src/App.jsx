import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

// Bus Hire Pages
import AgraTajMahalTour from './pages/bus-hire/AgraTajMahalTour'
import ChaloAyodhya from './pages/bus-hire/ChaloAyodhya'
import DelhiTour from './pages/bus-hire/DelhiTour'
import BusHireOutstation from './pages/bus-hire/BusHireOutstation'
import HaridwarRishikeshTour from './pages/bus-hire/HaridwarRishikeshTour'
import JaipurTour from './pages/bus-hire/JaipurTour'
import JhajjarPratapgarhTrip from './pages/bus-hire/JhajjarPratapgarhTrip'
import JimCorbettTour from './pages/bus-hire/JimCorbettTour'
import RishikeshRaftingTrip from './pages/bus-hire/RishikeshRaftingTrip'
import SonipatChokhiDhaniTrip from './pages/bus-hire/SonipatChokhiDhaniTrip'

// Car Hire Pages
import CarHireLocal from './pages/car-hire/CarHireLocal'
import CarHireOutstation from './pages/car-hire/CarHireOutstation'
import CarAgraTajMahalTour from './pages/car-hire/CarAgraTajMahalTour'
import CarDelhiTour from './pages/car-hire/CarDelhiTour'
import CarHaridwarRishikeshTour from './pages/car-hire/CarHaridwarRishikeshTour'
import CarJaipurTour from './pages/car-hire/CarJaipurTour'
import CarJimCorbettTour from './pages/car-hire/CarJimCorbettTour'

// Traveller Hire Pages
import TravellerHireLocal from './pages/traveller-hire/TravellerHireLocal'
import TravellerHireOutstation from './pages/traveller-hire/TravellerHireOutstation'
import TravellerAgraTajMahalTour from './pages/traveller-hire/TravellerAgraTajMahalTour'
import TravellerDelhiTour from './pages/traveller-hire/TravellerDelhiTour'
import TravellerHaridwarRishikeshTour from './pages/traveller-hire/TravellerHaridwarRishikeshTour'
import TravellerJaipurTour from './pages/traveller-hire/TravellerJaipurTour'
import TravellerJhajjarPratapgarhTour from './pages/traveller-hire/TravellerJhajjarPratapgarhTour'
import TravellerJimCorbettTour from './pages/traveller-hire/TravellerJimCorbettTour'
import TravellerSonipatChokhiDhaniTour from './pages/traveller-hire/TravellerSonipatChokhiDhaniTour'

import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Bus Hire Routes */}
            <Route path="/bus-hire/agra-taj-mahal" element={<AgraTajMahalTour />} />
            <Route path="/bus-hire/chalo-ayodhya" element={<ChaloAyodhya />} />
            <Route path="/bus-hire/delhi-tour" element={<DelhiTour />} />
            <Route path="/bus-hire/outstation" element={<BusHireOutstation />} />
            <Route path="/bus-hire/haridwar-rishikesh" element={<HaridwarRishikeshTour />} />
            <Route path="/bus-hire/jaipur-tour" element={<JaipurTour />} />
            <Route path="/bus-hire/jhajjar-pratapgarh" element={<JhajjarPratapgarhTrip />} />
            <Route path="/bus-hire/jim-corbett" element={<JimCorbettTour />} />
            <Route path="/bus-hire/rishikesh-rafting" element={<RishikeshRaftingTrip />} />
            <Route path="/bus-hire/sonipat-chokhi-dhani" element={<SonipatChokhiDhaniTrip />} />
            
            {/* Car Hire Routes */}
            <Route path="/car-hire/local" element={<CarHireLocal />} />
            <Route path="/car-hire/outstation" element={<CarHireOutstation />} />
            <Route path="/car-hire/agra-taj-mahal" element={<CarAgraTajMahalTour />} />
            <Route path="/car-hire/delhi-tour" element={<CarDelhiTour />} />
            <Route path="/car-hire/haridwar-rishikesh" element={<CarHaridwarRishikeshTour />} />
            <Route path="/car-hire/jaipur-tour" element={<CarJaipurTour />} />
            <Route path="/car-hire/jim-corbett" element={<CarJimCorbettTour />} />
            
            {/* Traveller Hire Routes */}
            <Route path="/traveller-hire/local" element={<TravellerHireLocal />} />
            <Route path="/traveller-hire/outstation" element={<TravellerHireOutstation />} />
            <Route path="/traveller-hire/agra-taj-mahal" element={<TravellerAgraTajMahalTour />} />
            <Route path="/traveller-hire/delhi-tour" element={<TravellerDelhiTour />} />
            <Route path="/traveller-hire/haridwar-rishikesh" element={<TravellerHaridwarRishikeshTour />} />
            <Route path="/traveller-hire/jaipur-tour" element={<TravellerJaipurTour />} />
            <Route path="/traveller-hire/jhajjar-pratapgarh" element={<TravellerJhajjarPratapgarhTour />} />
            <Route path="/traveller-hire/jim-corbett" element={<TravellerJimCorbettTour />} />
            <Route path="/traveller-hire/sonipat-chokhi-dhani" element={<TravellerSonipatChokhiDhaniTour />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
