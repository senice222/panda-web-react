import React, { useState } from 'react';
import style from './Header.module.scss'
import logo from '../../assets/footer_logo.png'
import tg from '../../assets/tg.png'
import inst from '../../assets/inst.png'
import burger from '../../assets/burger.png'
import { AnimatePresence, motion } from 'framer-motion'
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { animateScroll as scroll } from 'react-scroll'

const Header = () => {
    const [switchMenu, setSwitchMenu] = useState(false)
    const [isHoveredLogo, setLogoHover] = useState(false)
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        scroll.scrollToTop()
    };
    return (
        <>
            <BurgerMenu isOpened={isActive} setOpened={() => setIsActive((acitve) => !acitve)} />
            <header className={`${style.headerContainer} ${switchMenu ? style.active_header : ''}`}>
                <div className={style.leftBlock}>
                    <div className={style.burgerButton} onClick={handleClick}>
                        <div className={`${style.line} ${style.line1} ${isActive ? style.line1Active : ''}`}></div>
                        <div className={`${style.line} ${style.line2} ${isActive ? style.line2Active : ''}`}></div>
                        <div className={`${style.line} ${style.line3} ${isActive ? style.line3Active : ''}`}></div>
                    </div>
                </div>
                <motion.div
                    className={style.centerBlock}
                    onHoverStart={() => setLogoHover(true)}
                    onHoverEnd={() => setLogoHover(false)}
                >
                    <img
                        src={logo}
                        alt="/"
                    />
                    <AnimatePresence>
                        {isHoveredLogo ?
                            <>
                                <motion.div
                                    className={style.textedLogo}
                                    exit={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    initial={{ width: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h2>PANDA</h2>
                                    <h2>STUDIO</h2>
                                </motion.div>
                            </> : ''
                        }
                    </AnimatePresence>

                </motion.div>
                <div className={style.rightBlock}>
                    <img src={tg} style={{ marginRight: "20px" }} alt="/" />
                    <img src={inst} alt="/" />
                </div>
            </header>
        </>
    );
};

export default Header;
