import s from './TechSupport.module.scss'
import tuchka from "../../assets/tuchka.png";
import heart from "../../assets/panda_love.png";
import success from "../../assets/success_mark.png";
import React from "react";

const TechSupport = () => {
    return (
        <div className={s.secondBlock}>
            <figure className={s.imgDiv}>
                <img src={tuchka} alt="love" />
            </figure>
            <article className={s.textDiv}>
                <header>
                    <h3>Техническое обслуживание и поддержка</h3>
                </header>
                <p className={s.descr}>
                    <span>Panda Studio</span> всегда гарантирует высочайшее качество услуг. Именно поэтому большинство наших клиентов возвращаются к нам с новыми проектами и идеями.
                </p>
                <section className={s.successMarkDiv}>
                    <img src={success} alt="success" />
                    <p>Прежде чем приступить к работе над прототипом, наши специалисты тщательно изучат ваш кейс,
                        учитывая особенности вашего бизнеса, требования, последние тенденции в вашей сфере
                        деятельности.
                    </p>
                </section>
                <section className={s.successMarkDiv}>
                    <img src={success} alt="success" />
                    <p>PandaStudio создаст корпоративный веб-сайт с профессиональным адаптивным дизайном.</p>
                </section>
                <button>Оставить заявку</button>
            </article>
            <figure>
                <img src={heart} alt="love" />
            </figure>
        </div>

    );
};

export default TechSupport;
