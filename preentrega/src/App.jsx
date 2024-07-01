import './index.css'

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Promociones from './components/Promociones'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <>
      <Promociones/>
      <NavBar/>
      <Banner/> 
      <ItemListContainer texto={"¿Te gustaría darte un gusto?"}/>
      <Banner2/>
      <Footer/>
    </>
  )
}

export default App
