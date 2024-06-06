import graph from '../../assets/image 1.png'
import rocket from '../../assets/rocket.png'
import human from '../../assets/human.png'
import panda from '../../assets/panda_lapto.png'
import s from "./ShockedNumbers.module.scss";
import {motion} from "framer-motion";
import tuchka from "../../assets/t.png";
import success from "../../assets/success_mark.png";

const ShockedNumbers = () => {

    return (
        <div className={s.secondBlock}>
            <figure>
                <motion.img
                    src={panda}
                    alt="hacker"
                    className={s.panda}
                    viewport={{ once: true }}
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -10, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                />
            </figure>
            <figure className={s.imgDiv}>
                <img src={tuchka} alt={'/'} />
            </figure>
            <div className={s.infoBlock}>
                {/*<figure className={s.imgDiv}>*/}
                {/*    <img src={tuchka} alt={'/'} />*/}
                {/*</figure>*/}
                <article className={s.textDiv}>
                    <header>
                        <motion.h3
                            viewport={{ once: true }}
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 10, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                        >Шокирующие цифры при работе с нами!</motion.h3>
                    </header>
                    <section className={s.content}>
                        {/*<figure className={s.imgDiv}>*/}
                        {/*    <img src={tuchka} alt={'/'} />*/}
                        {/*</figure>*/}
                        <div className={s.item}>
                            <img src={graph} alt="/"/>
                            <div>
                                <p className={s.grow}><span>+107%</span> Рост конверсии</p>
                                <p className={s.descr}>Через 2 месяца после запуска корпоративного сайта</p>
                            </div>
                        </div>
                        <div className={s.item} style={{marginLeft: "10px"}}>
                            <img src={rocket} alt="/"/>
                            <div>
                                <p className={s.grow}><span>+153%</span> Доход клиентов</p>
                                <p className={s.descr}>Возрос по сравнению с 5 месяцами до запуска сайта</p>
                            </div>
                        </div>
                        <div className={s.item}>
                            <img src={human} alt="/"/>
                            <div>
                                <p className={s.grow}><span>+73%</span> Клиентская база</p>
                                <p className={s.descr}>У клиентов увеличена через 3 месяца после запуска сайта</p>
                            </div>
                        </div>
                        <div className={s.item} style={{marginLeft: "10px"}}>
                            <img src={rocket} alt="/"/>
                            <div>
                                <p className={s.grow}><span>98%</span> Клиентов</p>
                                <p className={s.descr}>Рекомендуют нас и возвращаются с новыми идеями и проектами</p>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    )
}

export default ShockedNumbers