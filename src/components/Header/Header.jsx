import React, {useState} from 'react';
import style from './Header.module.scss'
import logo from '../../assets/footer_logo.png'
import tg from '../../assets/tg.png'
import inst from '../../assets/inst.png'
import burger from '../../assets/burger.png'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
    const [switchMenu, setSwitchMenu] = useState(false)
    const [isHoveredLogo, setLogoHover] = useState(false)

    return (
        <header className={`${style.headerContainer} ${switchMenu ? style.active_header : ''}`}>
            <div className={style.leftBlock}>
                <img src={burger} alt="/" onClick={() => setSwitchMenu((prev) => !prev)}/>
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
                    { isHoveredLogo ? 
                        <>
                            <motion.div 
                                className={style.textedLogo}
                                exit={{ opacity: 0, width: 0 }}
                                animate={{opacity: 1, width: 'auto'}}
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
                <img src={tg} style={{marginRight: "20px"}} alt="/"/>
                <img src={inst} alt="/"/>
            </div>
        </header>
    );
};

export default Header;
