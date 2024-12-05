import livroprotagonista from '../../assets/livroprotagonista.png'
import s from './doados.module.scss'

export default function Doados(){
    return(
       <section className={s.doadosection}>
        <h2>Livros Doados</h2>
        <section className={s.cardsdoados}>
            <section>
                <img src={livroprotagonista} alt="Imagem do livro da autora Suzanne Andrade, que tem como tema principal a liderança e os principais paso para conquistara transfomaão pessoal e digital nas carreiras. " />
                <h3>O protagonista</h3>
                <p>Suzanne Andrade</p>
                <p>Ficção</p>
            </section>
        </section>
       </section>
    )
}