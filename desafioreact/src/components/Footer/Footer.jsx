import s from './footer.module.scss'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'

export default function Footer(){
   return(
     <footer>
        <section className={s.contato}>
            <p>4002-8922</p>
            <nav>
                 <a href=""><img src={facebook} alt="Icone da rede social do facebook com um link de direcionamento para o perfil do Vai na web" /></a>
                 <a href=""><img src={twitter} alt="Icone da rede social do twitter com um link de direcionamento para o perfil do Vai na web" /></a>
                 <a href=""><img src={youtube} alt="Icone da rede social do youtube com um link de direcionamento para o perfil do Vai na web" /></a>
                 <a href=""><img src={linkedin} alt="Icone da rede social do linkedin com um link de direcionamento para o perfil do Vai na web" /></a>
                 <a href=""><img src={instagram} alt="Icone da rede social do instagram com um link de direcionamento para o perfil do Vai na web" /></a>
            </nav>
        </section>
        <section className={s.layout}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024.</p>
        </section>
     </footer>
   )
}

