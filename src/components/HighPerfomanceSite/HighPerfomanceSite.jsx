import React from 'react';
import s from './HighPerfomanceSite.module.scss'
import hacker from "../../assets/hacker.png";
import tuchka from "../../assets/another_tuchka.png";
import success from "../../assets/success_mark.png";
import { motion } from 'framer-motion';

const HighPerfomanceSite = () => {
    return (
        <div className={s.secondBlock}>
            <figure>
                <motion.img 
                    src={hacker}
                    alt="hacker"
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className={s.hacker}
                />
            </figure>
            <div className={s.infoBlock}>
                <figure className={s.imgDiv}>
                    <img src={tuchka} alt="hacker" />
                </figure>
                <article className={s.textDiv}>
                    <header>
                        <motion.h3
                            viewport={{ once: true }}
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 10, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                        >Сайт с высокой производительностью</motion.h3>
                    </header>
                    <section>
                        <motion.p 
                            className={s.descr}
                            viewport={{ once: true }}
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 10, opacity: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Сайты, которые мы создаем, не только стильные и брендированные, но также
                            функциональные и удобные в использовании. Ваш сайт будет хорошо отображаться на всех типах
                            устройств.
                        </motion.p>
                        <motion.div 
                            className={s.successMarkDiv}
                            viewport={{ once: true }}
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 10, opacity: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src={success} alt="success" />
                            <p>
                                Мы разрабатываем систематизированные и оптимизированные в соответствии с методиками SEO,
                                корпоративные сайты под ключ с интуитивно понятным интерфейсом.
                            </p>
                        </motion.div>
                        <motion.div 
                            className={s.successMarkDiv}
                            viewport={{ once: true }}
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 10, opacity: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <img src={success} alt="success" />
                            <p>
                                Наши сайты характеризуются высокой скоростью загрузки. Ваш веб-сайт будет одинаково быстро
                                загружаться на всех устройствах, независимо от подключения к Интернету.
                            </p>
                        </motion.div>
                    </section>
                </article>
            </div>
        </div>

    );
};

export default HighPerfomanceSite;
