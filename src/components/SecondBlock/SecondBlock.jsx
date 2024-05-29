import s from './SecondBlock.module.scss'
import panda2 from '../../assets/panda_money.png'

export const SecondBlock = () => {
    return (
        <div className={s.secondBlock}>
            <div className={s.textDiv}>
                <h2>Корпоративный сайт</h2>
                <h3>Что это такое?</h3>
                <p>
                    Корпоративный сайт компании - это официальное отражение её деятельности в онлайне. Это своеобразный визитная карточка бизнеса в сети.
                </p>
                <p>
                    Создайте правильный имидж, и вас заметят, ваш бренд станет популярным. Вложите в развитие вашего бизнеса!
                </p>
                <button>Оставить заявку</button>
            </div>
            <div className={s.imgDiv}><img src={panda2} alt={"panda2"}/></div>
        </div>
    )
}