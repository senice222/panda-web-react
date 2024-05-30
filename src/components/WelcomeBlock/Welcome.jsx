import style from './welcome.module.scss'

export default () => {
    return (
        <section className={style.welcomeSection}>
            <div className={style.welcomeBlock}>
                <p className={style.tag}>#ваш успех - в наших лапках</p>
                <h1 className={style.title}>ДИЗАЙН</h1>
                <h1 className={style.title}>РАЗРАБОТКА</h1>

                <button className={style.button} >ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
        </section>   
    )
}