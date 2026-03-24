import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from './components/heropage'
import About from './components/About'
import FeaturesPage from './components/FeaturesPage'
import CenteredHeroPage from './components/Center'
import SplitPage from './components/ImageCardWrapper'
import SectorsPage from './components/SectorsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          
          <>
          <HeroPage />
      
      <HeroPage/>
    <About/>
    <FeaturesPage/>
    <SectorsPage/>
    <SplitPage/>
    <CenteredHeroPage/>
      } />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App