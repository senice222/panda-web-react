import style from './LeadGeneration.module.scss';
import pinFileSrc from '../../assets/leads_pin.png';

const LeadGeneration = () => {
    return (
        <div className={style.leads}>
            <div className={style.content}>
                <div className={style.textDetails}>
                    <h1>Обсудим ваш проект?</h1>
                    <p>Оставьте свои контакты для связи! Сделайте первый шаг на пути развития Вашего бизнеса!</p>
                </div>
                <div className={style.Contacts}>
                    <input className={style.name_field} placeholder="Ваше имя" type="text" />
                    <input className={style.phone_field} placeholder="Телефон" type="tel" />
                    <input className={style.email_field} placeholder="E-mail" type="email" />    
                </div>
                <div className={style.ideaBlock}>
                    <input className={style.idea_field} placeholder="Идеи и комментарии" type="text" /> 
                </div>
                <div className={style.confirmLead}>
                    <div className={style.checkbox}>
  
                    </div>

                    <div className={style.pin}>
                        <img src={pinFileSrc} alt="Pin file icon" />
                        <h3>Прикрепить файл</h3>
                    </div>

                    <div className={style.submit}>
                        <button className={style.button} >Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LeadGeneration