import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="navbar navbar-expand-lg fixed-bottom  navbar-dark bg-primary p-3 ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/"><img src="market-place-svgrepo-com.svg" alt="Inicio - Supermercado" /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quienes-somos">Quienes Somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Nuestras Tiendas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Contactanos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Como comprar</Link>
                        </li>
                    </ul></div>
            </div>
        </nav>

    )
}