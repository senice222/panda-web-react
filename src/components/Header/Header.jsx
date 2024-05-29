import React, {useState} from 'react';
import style from './Header.module.scss'
import logo from '../../assets/logo.png'
import tg from '../../assets/tg.png'
import inst from '../../assets/inst.png'
import burger from '../../assets/burger.png'

const Header = () => {
    const [switchMenu, setSwitchMenu] = useState(false)

    return (
        <div className={`${style.headerContainer} ${switchMenu ? style.active_header : ''}`}>
            <div className={style.leftBlock}>
                <img src={burger} alt="/" onClick={() => setSwitchMenu((prev) => !prev)}/>
            </div>
            <div className={style.centerBlock}>
                <img src={logo} alt="/"/>
            </div>
            <div className={style.rightBlock}>
                <img src={tg} style={{marginRight: "20px"}} alt="/"/>
                <img src={inst} alt="/"/>
            </div>
        </div>
    );
};

export default Header;
