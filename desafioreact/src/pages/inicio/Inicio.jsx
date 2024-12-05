import s from './inicio.module.scss'
import social from '../../assets/social.png'
import leitura from '../../assets/leitura.png'
import oportunidade from '../../assets/oportunidade.png'
import vidas from '../../assets/vidas.png'
export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
                <img src='' alt="" />
            </section>

            <section className={s.porqueDoar}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                    <section>
                        <img className={s.imginicio} src={social} alt="icone representado por quatro pessoas em um circulo. Passando uma ideia de sociedade unida em prol de uma causa." />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img className={s.imginicio} src={leitura} alt="Icone de um perfil segurando um livro, representando a ideia de uma pessoa que gosta de ler." />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img className={s.imginicio} src={vidas} alt="Icone de varias pessoas unidas representando a ideia de individuos juntos em uma só causa." />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img className={s.imginicio} src={oportunidade} alt="Icone de justiça. Representando a ideia de que todos merecem e devem ter as mesmas oportunidades." />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}
