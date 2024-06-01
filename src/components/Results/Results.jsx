import s from './Results.module.scss'
import {SVG_Certificate, SVG_Notebook, SVG_PC, SVG_Support, SVG_Window} from "./Svgs";
import { motion } from 'framer-motion';

export const Results = () => {
    return (
        <div className={s.results}>
            <section className={s.content}>
                <motion.header
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1>Результаты нашего сотрудничества</h1>
                    <p>
                        Эксперты <span>Panda Studio</span> предоставят индивидуальные решения для вашей компании,
                        основанные на глубоких маркетинговых исследованиях
                    </p>
                </motion.header>
                <div className={s.items}>
                    <motion.article 
                        className={s.item}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={s.icon}>
                            <SVG_PC />
                        </div>
                        <h2>Адаптивный веб-дизайн</h2>
                    </motion.article>
                    <motion.article 
                        className={s.item}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={s.icon}>
                            <SVG_Notebook />
                        </div>
                        <h2>Уникальный контент</h2>
                    </motion.article>
                    <motion.article 
                        className={s.item}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className={s.icon}>
                            <SVG_Certificate />
                        </div>
                        <h2>Контроль качества</h2>
                    </motion.article>
                    <motion.article 
                        className={s.item}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className={s.icon}>
                            <SVG_Certificate />
                        </div>
                        <h2>Кастомные решения</h2>
                    </motion.article>
                    <motion.article 
                        className={s.item}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <div className={s.icon}>
                            <div style={{ marginRight: '3px' }}>
                                <SVG_Window />
                            </div>
                        </div>
                        <h2>Дополнительные блоки на сайте</h2>
                    </motion.article>
                    <motion.article 
                        className={s.item}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className={s.icon}>
                            <SVG_Support />
                        </div>
                        <h2>Всесторонняя поддержка</h2>
                    </motion.article>
                </div>
            </section>
        </div>
    )
}