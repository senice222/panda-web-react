import s from './BurgerMenu.module.scss'
import React, {useEffect} from "react";
import logo from '../../assets/pandaLogo.png'
import tg from '../../assets/tg.png'
import inst from '../../assets/inst.png'
import {animateScroll as scroll, scroller} from 'react-scroll'


export const BurgerMenu = ({isOpened, setOpened}) => {
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isOpened]);
    const scrollAndClose = (to) => {
        setOpened()
        scroller.scrollTo(to, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 20, // Scrolls to element + 50 pixels down the page
            // ... other options
        });
    }
    return (
        <div className={`${s.BurgerMenu} ${isOpened ? s.active : ""}`}>
            <div className={s.burgerTop}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={s.links}>
                <div onClick={() => scrollAndClose('home')} className={s.razrabi}>
                    <h1>Главная</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 29 31" fill="none">
                        <path d="M26.2209 11.6392C29.3153 13.322 29.3153 17.678 26.2209 19.3608L7.53672 29.5211C4.52924 31.1567 0.833313 29.0279 0.833313 25.6603V5.33963C0.833313 1.97202 4.52924 -0.156648 7.5367 1.47881L26.2209 11.6392Z" fill="#1C274C"/>
                    </svg>
                </div>
                <div onClick={() => scrollAndClose('corpo')} className={s.razrabi}>
                    <h1>Разработка </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 29 31" fill="none">
                        <path d="M26.2209 11.6392C29.3153 13.322 29.3153 17.678 26.2209 19.3608L7.53672 29.5211C4.52924 31.1567 0.833313 29.0279 0.833313 25.6603V5.33963C0.833313 1.97202 4.52924 -0.156648 7.5367 1.47881L26.2209 11.6392Z" fill="#1C274C"/>
                    </svg>
                </div>
                <div onClick={() => scrollAndClose('reviews')} className={s.razrabi}>
                    <h1>Отзывы </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 29 31" fill="none">
                        <path d="M26.2209 11.6392C29.3153 13.322 29.3153 17.678 26.2209 19.3608L7.53672 29.5211C4.52924 31.1567 0.833313 29.0279 0.833313 25.6603V5.33963C0.833313 1.97202 4.52924 -0.156648 7.5367 1.47881L26.2209 11.6392Z" fill="#1C274C"/>
                    </svg>
                </div>
                <div onClick={() => scrollAndClose('contact')} className={s.razrabi}>
                <h1>Контакты </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 29 31" fill="none">
                    <path d="M26.2209 11.6392C29.3153 13.322 29.3153 17.678 26.2209 19.3608L7.53672 29.5211C4.52924 31.1567 0.833313 29.0279 0.833313 25.6603V5.33963C0.833313 1.97202 4.52924 -0.156648 7.5367 1.47881L26.2209 11.6392Z" fill="#1C274C"/>
                </svg>
            </div>
                <div onClick={() => scrollAndClose('blog')} className={s.razrabi}>
                <h1>Блог </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 29 31" fill="none">
                    <path d="M26.2209 11.6392C29.3153 13.322 29.3153 17.678 26.2209 19.3608L7.53672 29.5211C4.52924 31.1567 0.833313 29.0279 0.833313 25.6603V5.33963C0.833313 1.97202 4.52924 -0.156648 7.5367 1.47881L26.2209 11.6392Z" fill="#1C274C"/>
                </svg>
            </div>

            </div>
            <div className={s.socials}>
                <p>Мы в соц сетях</p>
                <div className={s.logos}>
                    <img src={tg} style={{marginRight: "20px"}} alt="/"/>
                    <img src={inst} alt="/"/>
                </div>
            </div>
        </div>
    )
}