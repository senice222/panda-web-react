import React from 'react';
import s from './HighPerfomanceSite.module.scss'
import hacker from "../../assets/hacker.png";
import tuchka from "../../assets/another_tuchka.png";
import success from "../../assets/success_mark.png";

const HighPerfomanceSite = () => {
    return (
        <div className={s.secondBlock}>
            <figure>
                <img src={hacker} alt="hacker" />
            </figure>
            <div className={s.infoBlock}>
                <figure className={s.imgDiv}>
                    <img src={tuchka} alt="hacker" />
                </figure>
                <article className={s.textDiv}>
                    <header>
                        <h3>Сайт с высокой производительностью</h3>
                    </header>
                    <section>
                        <p className={s.descr}>
                            Сайты, которые мы создаем, не только стильные и брендированные, но также
                            функциональные и удобные в использовании. Ваш сайт будет хорошо отображаться на всех типах
                            устройств.
                        </p>
                        <div className={s.successMarkDiv}>
                            <img src={success} alt="success" />
                            <p>
                                Мы разрабатываем систематизированные и оптимизированные в соответствии с методиками SEO,
                                корпоративные сайты под ключ с интуитивно понятным интерфейсом.
                            </p>
                        </div>
                        <div className={s.successMarkDiv}>
                            <img src={success} alt="success" />
                            <p>
                                Наши сайты характеризуются высокой скоростью загрузки. Ваш веб-сайт будет одинаково быстро
                                загружаться на всех устройствах, независимо от подключения к Интернету.
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>

    );
};

export default HighPerfomanceSite;
