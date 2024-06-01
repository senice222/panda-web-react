import style from './StagesOfWork.module.scss'
import {arrayOfStages} from "../../utils/stages-data";
import { motion } from 'framer-motion'

const StagesOfWork = () => {

    return (
        <motion.div 
            className={style.stagesWrapper}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.1 }}
        >
            <div className={style.info}>
                <div className={style.toCenter}>
                    <div className={style.titlesDiv}>
                        <h2>Этапы нашей работы над проектом</h2>
                        <p>Мы следуем хорошо продуманной стратегии и последовательному набору действий, которые помогают
                            нам</p>
                    </div>
                </div>
                <div className={style.listStages}>
                    {
                        arrayOfStages.map((item, i) => (
                            <motion.div 
                                className={style.item}
                                viewport={{ once: true }}
                                whileInView={{ y: 0, opacity: 1 }}
                                initial={{ y: 10, opacity: 0 }}
                                transition={{ delay: i * 0.3 }}
                            >
                                <div><img src={item.img} alt="/"/></div>
                                <h3>{item.title}</h3>
                                <p>{item.descr}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default StagesOfWork;
