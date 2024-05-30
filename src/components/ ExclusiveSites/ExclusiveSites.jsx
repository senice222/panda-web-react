import React from 'react';
import cosmonavt from "../../assets/cosmonavt.png";
import tuchka from "../../assets/bigger_tuchka.png";
import s from './ExclusiveSites.module.scss'
import success from '../../assets/success_mark.png'

const ExclusiveSites = () => {
    return (
        <div className={s.secondBlock}>
            <figure className={s.imgDiv}>
                <img src={tuchka} alt="cosmonavt" />
            </figure>
            <article className={s.textDiv}>
                <header>
                    <h3>Эксклюзивные сайты любой сложности</h3>
                </header>
                <section>
                    <p className={s.descr}>
                        Наши разработчики придерживаются клиентоориентированного подхода, и это означает, что мы предлагаем
                        индивидуальные решения для наших партнеров.
                    </p>
                    <div className={s.successMarkDiv}>
                        <img src={success} alt="success" />
                        <p>
                            Прежде чем приступить к работе над прототипом, наши специалисты тщательно изучат ваш кейс,
                            учитывая особенности вашего бизнеса, требования, последние тенденции в вашей сфере
                            деятельности.
                        </p>
                    </div>
                    <div className={s.successMarkDiv}>
                        <img src={success} alt="success" />
                        <p>PandaStudio создаст корпоративный веб-сайт с профессиональным адаптивным дизайном.</p>
                    </div>
                </section>
            </article>
            <figure>
                <img src={cosmonavt} alt="cosmonavt" />
            </figure>
        </div>

    );
};

export default ExclusiveSites;
