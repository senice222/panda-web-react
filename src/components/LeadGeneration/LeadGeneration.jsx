import style from './LeadGeneration.module.scss';
import pinFileSrc from '../../assets/leads_pin.png';
import {SVG_MAIL, SVG_PANDA_FACE, SVG_PHONE, SVG_TICK} from "../Results/Svgs";
import {useForm} from "react-hook-form";

const LeadGeneration = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const name = watch('name', '');
    const phone = watch('phone', '');
    const email = watch('email', '');

    return (
        <div className={style.leads}>
            <form className={style.content} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.textDetails}>
                    <h1>Обсудим ваш проект?</h1>
                    <p>Оставьте свои контакты для связи! Сделайте первый шаг на пути развития Вашего бизнеса!</p>
                </div>
                <div className={style.Contacts}>
                    <div className={style.inputDiv}>
                        <div className={style.pandaDiv}>
                            <SVG_PANDA_FACE className={style.pandaFace} />
                        </div>
                        <input
                            className={style.name_field}
                            placeholder="Ваше имя"
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                        />
                        <div className={name !== '' ? style.activeTick : style.svgTickDiv}>
                            <SVG_TICK />
                        </div>
                    </div>
                    <div className={style.inputDiv}>
                        <div className={style.pandaDiv}>
                            <SVG_PHONE className={style.phone} />
                        </div>
                        <input
                            className={style.phone_field}
                            placeholder="Телефон"
                            {...register('phone', {
                                required: 'Телефон обязателен',
                                pattern: {
                                    value: /^\+?[0-9\s-]+$/,
                                    message: 'Некорректный формат телефона'
                                }
                            })}
                            type="tel"
                            pattern={/^\+?[0-9\s-]+$/}
                        />
                        <div className={phone !== '' ? style.activeTick : style.svgTickDiv}>
                            <SVG_TICK />
                        </div>
                    </div>
                    <div className={style.inputDiv}>
                        <div className={style.pandaDiv}>
                            <SVG_MAIL />
                        </div>
                        <input
                            className={style.email_field}
                            placeholder="E-mail"
                            type="email"
                            {...register('email', {
                                required: 'E-mail обязателен',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Некорректный формат e-mail'
                                }
                            })}
                            type="email"
                            pattern={/\S+@\S+\.\S+/}
                        />
                        <div className={email !== '' ? style.activeTick : style.svgTickDiv}>
                            <SVG_TICK />
                        </div>
                    </div>
                </div>
                <div className={style.ideaBlock}>
                    <input
                        className={style.idea_field}
                        placeholder="Идеи и комментарии"
                        type="text"
                    />
                </div>
                <div className={style.confirmLead}>
                    <div className={style.checkbox}>
                        {/* Add checkbox here if needed */}
                    </div>
                    <div className={style.fileInputContainer}>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: 'none' }}
                            {...register('file')}
                        />
                        <label htmlFor="fileInput" className={style.pin}>
                            <img src={pinFileSrc} alt="Pin file icon" />
                            <h3>Прикрепить файл</h3>
                        </label>
                    </div>
                    {(errors.phone || errors.name || errors.email) && <p className={style.error}>Заполните все поля</p>}
                    <div className={style.submit}>
                        <button className={style.button} type="submit">Оставить заявку</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default LeadGeneration