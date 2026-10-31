import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { PreguntasFrecuentes } from './pages/PreguntasFrecuentes.jsx';
import { QuienesSomos } from './pages/QuienesSomos.jsx';
import { Menu } from './components/Menu.jsx';
import { Header } from './components/Header.jsx';
import { InventarioProvider } from './context/InventarioContext.jsx';
import { NuevoArticulo } from './pages/NuevoArticulo.jsx';
import { TablaInventario } from './pages/TablaInventario.jsx';
import { NotFound } from './pages/NotFound.jsx';


function App() {


  return (
    <>
      <InventarioProvider>
        <Header />
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/nuevo-articulo" element={<NuevoArticulo />} />
            <Route path="/inventario" element={<TablaInventario />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </main>
        <footer>
          <Menu />
        </footer>
      </InventarioProvider>
    </>
  )
}

export default App;
