import style from './welcome.module.scss'
import { motion } from 'framer-motion'

export default () => {
    return (
        <motion.section
         className={style.welcomeSection}
         viewport={{ once: true }}
         whileInView={{
            y: 0, opacity: 1
         }}
         initial={{
            y: -20, opacity: 0
         }}
        >
            <div className={style.welcomeBlock}>
                <motion.p 
                    className={style.tag}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >#ваш успех - в наших лапках</motion.p>
                <motion.h1 
                    className={style.title}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >ДИЗАЙН</motion.h1>
                <motion.h1 
                    className={style.title}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                >РАЗРАБОТКА</motion.h1>

                <motion.button 
                    className={style.button} 
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: -10, opacity: 0 }}
                    transition={{ delay: 0.4 }}
                >ОСТАВИТЬ ЗАЯВКУ</motion.button>
            </div>
        </motion.section>   
    )
}