import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from './components/heropage'
import About from './components/About'
import FeaturesPage from './components/FeaturesPage'
import CenteredHeroPage from './components/Center'
import SplitPage from './components/ImageCardWrapper'
import SectorsPage from './components/SectorsPage'
import IndustriesPage from "./pages/IndustriesPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
    <Navbar
      <Routes>
        <Route path="/" element={
          
          <>
         
      
      <HeroPage/>
    <About/>
    <FeaturesPage/>
    <SectorsPage/>
    <SplitPage/>
    <CenteredHeroPage/>
    </>
      } />

      <Route path="/services" element={<IndustriesPage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App