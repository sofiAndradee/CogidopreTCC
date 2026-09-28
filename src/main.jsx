import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home  from './pages/Home/Home'
import Local  from './pages/Local/Local'
import Noticia  from './pages/Noticia/Noticia'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import "./style.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Local' element={<Local/>}/>
        <Route path='/Noticia' element={<Noticia/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>,
)


