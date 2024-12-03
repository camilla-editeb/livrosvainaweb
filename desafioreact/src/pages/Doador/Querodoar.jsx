import livro from '../../assets/iconlivro.png'
import s from './querodoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.sectiondoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img className={s.imgdoar}  src={livro} alt="" />
                    <h2>Informações Do Livro</h2>
                </div>
                <input type="text" name="" id="" placeholder='Título' />
                <input type="text" name="" id="" placeholder='Categoria'/>
                <input type="text" name="" id="" placeholder='Autor' />
                <input type="text" name="" id="" placeholder='Link Da Imagem' />

            </form>
        </section>
    )
}