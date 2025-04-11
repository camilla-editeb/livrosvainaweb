import livro from '../../assets/iconlivro.png'
import s from './querodoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.terget.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImg = (e) =>{
        setImage_url(e.target.value)
    }


    const envioDados = async() =>{
        
        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://desafio-apy-0bul.onrender.com/doar",dadosParaEnviar)
    }

    return(
        <section className={s.sectiondoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img className={s.imgdoar}  src={livro} alt="icone de um livro azul vazado" />
                    <h2>Informações Do Livro</h2>
                </div>
                <input type="text" name="" id="" placeholder='Título' onChange={capturaTitulo} required />
                <input type="text" name="" id="" placeholder='Categoria' onChange={capturaCategoria} required/>
                <input type="text" name="" id="" placeholder='Autor' onChange={capturaAutor} required />
                <input type="url" name="" id="" placeholder='Link Da Imagem' onChange={capturaImg} required />
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    )
}