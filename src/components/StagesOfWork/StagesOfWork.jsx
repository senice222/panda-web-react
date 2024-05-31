import style from './StagesOfWork.module.scss'
import {arrayOfStages} from "../../utils/stages-data";

const StagesOfWork = () => {

    return (
        <div className={style.stagesWrapper}>
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
                            <div className={style.item}>
                                <div><img src={item.img} alt="/"/></div>
                                <h3>{item.title}</h3>
                                <p>{item.descr}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default StagesOfWork;
