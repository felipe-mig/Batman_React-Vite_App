import { useState } from 'react'
import './App.css'
import Head from './components/HtmlHead'
import Nav from './components/Nav'
import Footer from './components/Footer'
import BatmanWatermark from './components/BatmanWatermark'
import CharactersContent from './pages/characters'
import HomeContent from './pages/home'
import GadgetsAndTechContent from './pages/gadgetsAndTech'
import VillainsAndAlliesContent from './pages/VillainsAndAllies'
import VideosAndMediaContent from './pages/videosAndMedia'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showGadgetsAndTech, setShowGadgetsAndTech] = useState(false);
  const [showVillainsAndAllies, setShowVillainsAndAllies] = useState(false);
  const [showVideosAndMedia, setShowVideosAndMedia] = useState(false);


  return (
    <> {/* start return App()*/}

      <Head/>

      <div className='wrapper'>

         <header>
          <Nav
            showHome={()=>{
              setShowHome(true);
              setShowCharacters(false);
              setShowGadgetsAndTech(false);
              setShowVillainsAndAllies(false);
              setShowVideosAndMedia(false);
            }}
            showCharacters={()=>{
              setShowCharacters(true);
              setShowHome(false);
              setShowGadgetsAndTech(false);
              setShowVillainsAndAllies(false);
              setShowVideosAndMedia(false);
            }}
            showGadgetsAndTech={()=>{
              setShowGadgetsAndTech(true);
              setShowHome(false);
              setShowCharacters(false);
              setShowVillainsAndAllies(false);
              setShowVideosAndMedia(false);
            }}
            showVillainsAndAllies={()=>{
              setShowVillainsAndAllies(true);
              setShowHome(false);
              setShowCharacters(false);
              setShowGadgetsAndTech(false);
              setShowVideosAndMedia(false);
            }}
            showVideosAndMedia={()=>{
              setShowVideosAndMedia(true);
              setShowHome(false);
              setShowCharacters(false);
              setShowGadgetsAndTech(false);
              setShowVillainsAndAllies(false);
            }}
        
          /> {/* eo Nav */}
        </header>

        {showCharacters && <CharactersContent/>}
        {showHome && <HomeContent/>}
        {showGadgetsAndTech && <GadgetsAndTechContent/>}
        {showVillainsAndAllies && <VillainsAndAlliesContent/>}
        {showVideosAndMedia && <VideosAndMediaContent/>}
        
      
      <BatmanWatermark/>
      <Footer/>

      </div> {/* eo wrapper*/}

    </> /* eo return App()*/
  )
}

export default App
