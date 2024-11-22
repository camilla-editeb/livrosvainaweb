import lupa from '../../assets/lupa.png'
import logo from '../../assets/logo.png'
import Inicio from '../../pages/inicio/Inicio'
import Doados from '../../pages/livrosDoados/Doados'
import Querodoar from '../../pages/Doador/Querodoar'
import s from './header.module.scss'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Header(){
    return(
        <BrowserRouter>
            <header className={s.header}>
                <section>
                    <img src={logo} alt="" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/livrosDoados'>Livros Doados</Link></li>
                    <li><Link to='/Doador'>Quero Doar</Link></li>
                </ul>
                </nav>
                <section>
                    <input type="search" name="" id="" placeholder="O que você quer?" />
                    <button><img src={lupa} alt="" /></button>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosDoados' element={<Doados/>}/>
                <Route path='/Doador' element={<Querodoar/>}/>
            </Routes>
       </BrowserRouter>
    )
}
