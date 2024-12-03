import livroprotagonista from '../../assets/livroprotagonista.png'
import s from './doados.module.scss'

export default function Doados(){
    return(
       <section className={s.doadosection}>
        <h2>Livros Doados</h2>
        <section className={s.cardsdoados}>
            <section>
                <img src={livroprotagonista} alt="" />
                <h3>O protagonista</h3>
                <p>Suzanne Andrade</p>
                <p>Ficção</p>
            </section>
        </section>
       </section>
    )
}