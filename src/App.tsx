
import { Carousel1 } from './components/CarouselSingle'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GlobalStyle } from './GlobalStyle'
import { Home } from './pages/Home'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AllCampaigns from './pages/AllCampaigns'
import { useState } from 'react'
import { LoginModal } from './components/Modals/LoginModal'
import Modal from 'react-modal';
import { RegisterModal } from './components/Modals/RegisterModal'
import { AnjosDaLeste } from './pages/AnjosDaLeste'
import { AllInstitutions } from './components/AllInstitutions'

Modal.setAppElement('#root');


function App() {

  const [isNewLoginModalOpen, setIsNewLoginModalOpen] = useState(false);
  const [isNewRegisterModalOpen, setIsNewRegisterModalOpen] = useState(false);
    
  function handleOpenNewLoginModal(){
    setIsNewLoginModalOpen(true);
  }
  
  function handleCloseNewLoginModal(){
    setIsNewLoginModalOpen(false);
  }

  function handleOpenNewRegisterModal(){
    setIsNewRegisterModalOpen(true);
  }
  
  function handleCloseNewRegisterModal(){
    setIsNewRegisterModalOpen(false);
  }


  return (
    <Router>
      <GlobalStyle />
      <Header onOpenNewLoginModal={handleOpenNewLoginModal} onOpenNewRegisterModal={handleOpenNewRegisterModal}/>
      <LoginModal isOpen={isNewLoginModalOpen} onRequestClose={handleCloseNewLoginModal} />
      <RegisterModal isOpen={isNewRegisterModalOpen} onRequestClose={handleCloseNewRegisterModal} />
      <Carousel1 />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/campaigns" component={AllCampaigns}/>
        <Route exact path="/anjosdaleste" component={AnjosDaLeste}/>
        <Route exact path="/institutions" component={AllInstitutions}/>
      </Switch>
      <Footer />
      
    </Router>
  )
}

export default App
