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
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/split" element={<SplitPage />} />
        <Route path="/center" element={<CenteredHeroPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App