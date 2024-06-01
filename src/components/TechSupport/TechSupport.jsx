import s from './TechSupport.module.scss'
import tuchka from "../../assets/tuchka.png";
import heart from "../../assets/panda_love.png";
import success from "../../assets/success_mark.png";
import React from "react";
import { motion } from 'framer-motion'

const TechSupport = () => {
    return (
        <div className={s.secondBlock}>
            <figure className={s.imgDiv}>
                <img src={tuchka} alt="love" />
            </figure>
            <article className={s.textDiv}>
                <motion.header
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3>Техническое обслуживание и поддержка</h3>
                </motion.header>
                <motion.p 
                    className={s.descr}
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span>Panda Studio</span> всегда гарантирует высочайшее качество услуг. Именно поэтому большинство наших клиентов возвращаются к нам с новыми проектами и идеями.
                </motion.p>
                <motion.section 
                    className={s.successMarkDiv}
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <img src={success} alt="success" />
                    <p>Прежде чем приступить к работе над прототипом, наши специалисты тщательно изучат ваш кейс,
                        учитывая особенности вашего бизнеса, требования, последние тенденции в вашей сфере
                        деятельности.
                    </p>
                </motion.section>
                <motion.section 
                    className={s.successMarkDiv}
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <img src={success} alt="success" />
                    <p>PandaStudio создаст корпоративный веб-сайт с профессиональным адаптивным дизайном.</p>
                </motion.section>
                <motion.button
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.5 }}
                >Оставить заявку</motion.button>
            </article>
            <figure>
                <img src={heart} alt="love" />
            </figure>
        </div>

    );
};

export default TechSupport;
