import lupa from '../../assets/lupaimg.png'
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
                    <img className={s.logoHeader} src={logo} alt="Logo de um livro aberto com cores azul, branco e preto" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to='/'>Inicio</Link></li>
                    <li><Link className={s.link} to='/livrosDoados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/Doador'>Quero Doar</Link></li>
                </ul>
                </nav>
                <section className={s.barradeBusca}>
                    <input type="search" name="" id="" placeholder="O que você quer?" />
                    <button><img src={lupa} alt="icone de lupa para pesquisa na cor branco" /></button>
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
