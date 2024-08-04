import './App.css'
import HomeCard from './component/HomeCard/HomeCard'
import Navbar from './component/Navbar/Navbar'
import ProfessionalCard from './component/ProfessionalCard/ProfessionalCard'
import ServiceCard from './component/ServiceCard/ServiceCard'
import Home from './views/Home/Home'
import Professionals from './views/Professionals/Professionals'
import Services from './views/Services/Services'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Professionals/>
    </>
  )
}

export default App
