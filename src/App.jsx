import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { PreguntasFrecuentes } from './pages/PreguntasFrecuentes.jsx';
import { QuienesSomos } from './pages/QuienesSomos.jsx';
import { Menu } from './components/Menu.jsx';
import { Header } from './components/Header.jsx';


function App() {


  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        </Routes>

      </main>
      <footer>
        <Menu />
      </footer>
    </>
  )
}

export default App;
