import s from './footer.module.scss'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import linkedlin from '../../assets/linkedlin.png'

export default function Footer(){
   return(
     <footer>
        <section className={s.contato}>
            <p>4002-8922</p>
            <nav>
                 <a href=""><img src={facebook} alt="" /></a>
                 <a href=""><img src={twitter} alt="" /></a>
                 <a href=""><img src={youtube} alt="" /></a>
                 <a href=""><img src={linkedlin} alt="" /></a>
                 <a href=""><img src={instagram} alt="" /></a>
            </nav>
        </section>
        <section className={s.layout}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024.</p>
        </section>
     </footer>
   )
}

