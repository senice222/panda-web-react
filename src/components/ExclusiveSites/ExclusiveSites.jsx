import React from 'react';
import cosmonavt from "../../assets/cosmonavt.png";
import tuchka from "../../assets/bigger_tuchka.png";
import s from './ExclusiveSites.module.scss'
import success from '../../assets/success_mark.png'
import { motion } from 'framer-motion';

const ExclusiveSites = () => {
    return (
        <div className={s.secondBlock}>
            <figure className={s.imgDiv}>
                <img 
                    src={tuchka} 
                    alt="tuchka" 
                />
            </figure>
            <article className={s.textDiv}>
                <header>
                    <motion.h3
                        viewport={{ once: true }}
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -10, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                    >Эксклюзивные сайты любой сложности</motion.h3>
                </header>
                <section>
                    <motion.p 
                        className={s.descr}
                        viewport={{ once: true }}
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -10, opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Наши разработчики придерживаются клиентоориентированного подхода, и это означает, что мы предлагаем
                        индивидуальные решения для наших партнеров.
                    </motion.p>
                    <motion.div 
                        className={s.successMarkDiv}
                        viewport={{ once: true }}
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -10, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <img src={success} alt="success" />
                        <p>
                            Прежде чем приступить к работе над прототипом, наши специалисты тщательно изучат ваш кейс,
                            учитывая особенности вашего бизнеса, требования, последние тенденции в вашей сфере
                            деятельности.
                        </p>
                    </motion.div>
                    <motion.div 
                        className={s.successMarkDiv}
                        viewport={{ once: true }}
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -10, opacity: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <img src={success} alt="success" />
                        <p>PandaStudio создаст корпоративный веб-сайт с профессиональным адаптивным дизайном.</p>
                    </motion.div>
                </section>
            </article>
            <figure>
                <motion.img 
                    src={cosmonavt} 
                    alt="cosmonavt" 
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 10, opacity: 0 }}
                    transition={{ delay: 0.15 }}
                />
            </figure>
        </div>

    );
};

export default ExclusiveSites;
