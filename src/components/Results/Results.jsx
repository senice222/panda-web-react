import s from './Results.module.scss'
import {SVG_Certificate, SVG_Notebook, SVG_PC, SVG_Support, SVG_Window} from "./Svgs";

export const Results = () => {
    return (
        <div className={s.results}>
            <section className={s.content}>
                <header>
                    <h1>Результаты нашего сотрудничества</h1>
                    <p>
                        Эксперты <span>Panda Studio</span> предоставят индивидуальные решения для вашей компании,
                        основанные на глубоких маркетинговых исследованиях
                    </p>
                </header>
                <div className={s.items}>
                    <article className={s.item}>
                        <div className={s.icon}>
                            <SVG_PC />
                        </div>
                        <h2>Адаптивный веб-дизайн</h2>
                    </article>
                    <article className={s.item}>
                        <div className={s.icon}>
                            <SVG_Notebook />
                        </div>
                        <h2>Уникальный контент</h2>
                    </article>
                    <article className={s.item}>
                        <div className={s.icon}>
                            <SVG_Certificate />
                        </div>
                        <h2>Контроль качества</h2>
                    </article>
                    <article className={s.item}>
                        <div className={s.icon}>
                            <SVG_Certificate />
                        </div>
                        <h2>Кастомные решения</h2>
                    </article>
                    <article className={s.item}>
                        <div className={s.icon}>
                            <div style={{ marginRight: '3px' }}>
                                <SVG_Window />
                            </div>
                        </div>
                        <h2>Дополнительные блоки на сайте</h2>
                    </article>
                    <article className={s.item}>
                        <div className={s.icon}>
                            <SVG_Support />
                        </div>
                        <h2>Всесторонняя поддержка</h2>
                    </article>
                </div>
            </section>
        </div>
    )
}