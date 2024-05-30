import s from './CorporateSite.module.scss'
import panda2 from '../../assets/panda_money.png'

export const CorporateSite = () => {
    return (
        <div className={s.secondBlock}>
            <article className={s.textDiv}>
                <header>
                    <h2>Корпоративный сайт</h2>
                    <h3>Что это такое?</h3>
                </header>
                <section>
                    <p>
                        Корпоративный сайт компании - это официальное отражение её деятельности в онлайне. Это своеобразный визитная карточка бизнеса в сети.
                    </p>
                    <p>
                        Создайте правильный имидж, и вас заметят, ваш бренд станет популярным. Вложите в развитие вашего бизнеса!
                    </p>
                </section>
                <button type="button">Оставить заявку</button>
            </article>
            <figure className={s.imgDiv}>
                <img src={panda2} alt="panda2" />
            </figure>
        </div>
    )
}