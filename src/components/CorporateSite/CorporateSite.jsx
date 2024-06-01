import s from './CorporateSite.module.scss'
import panda2 from '../../assets/panda_money.png'
import { motion } from 'framer-motion'
export const CorporateSite = () => {
    return (
        <div className={s.secondBlock}>
            <article className={s.textDiv}>
                <header>
                    <motion.h2
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                    >Корпоративный сайт</motion.h2>
                    <motion.h3
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >Что это такое?</motion.h3>
                </header>
                <motion.section
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p>
                        Корпоративный сайт компании - это официальное отражение её деятельности в онлайне. Это своеобразный визитная карточка бизнеса в сети.
                    </p>
                    <p>
                        Создайте правильный имидж, и вас заметят, ваш бренд станет популярным. Вложите в развитие вашего бизнеса!
                    </p>
                </motion.section>
                <motion.button 
                    type="button"
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.4 }}
                >Оставить заявку</motion.button>
            </article>
            <figure className={s.imgDiv}>
                <motion.img 
                    src={panda2} 
                    alt="panda2" 
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 10, opacity: 0 }}
                    transition={{ delay: 0.2,duration: 0.5 }}
                />
            </figure>
        </div>
    )
}