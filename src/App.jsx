import Home from './pages/Home'
import MarinaCruise from './pages/MarinaCruise'
import CreekCruise from './pages/CreekCruise'
import CanalCruise from './pages/CanalCruise'

import Blogs from './pages/Blogs'
import About from './pages/Booking'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

const App = () => {
  return (
<>

          <BrowserRouter>
          <Outlet  />{<Navbar/>}
          <Routes>
          
              <Route path="/" element={ <Home /> }/>
              <Route path="/MarinaCruise" element={ <MarinaCruise /> }/>
              <Route path="/CreekCruise" element={ <CreekCruise /> }/>
              <Route path="/CanalCruise" element={ <CanalCruise /> }/>
     
              <Route path="/Blogs" element={ <Blogs /> }/>
              <Route path="/Booking" element={ <About /> }/>
              <Route path="/Contact" element={ <Contact /> }/>
          </Routes>
          <Outlet  />{<Footer/>}
          </BrowserRouter>

  </>
  )    
}

export default App;