import style from './header.module.scss'

import BurgerSvg from './icons/media/burger'

export default () => {
    return (
        <header>
            <div className={style.burger}>
                <BurgerSvg fill_color={"red"} />
            </div>
        </header>
    )
}