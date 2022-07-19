import React, { useState } from 'react';
import './index.scss'

const Header = () => {
    const img2 = "/src/components/Header/img/";
    const [active, setActive] = useState(false);

      return (
    <header className="header">
    <div className="container">
        <div className="header__content">
           <div className="header__row">
                <img src={img2 + "logo.svg"} alt="logo" className="header__logo" />
                <ul className="header__list">
                    <li className="header__item"><a href="#" className="header__link">Каталог</a></li>
                    <li className="header__item"><a href="#" className="header__link">Новости</a></li>
                    <li className="header__item"><a href="#" className="header__link">Доставка</a></li>
                    <li className="header__item"><a href="#" className="header__link">О нас</a></li>
                    <li className="header__item"><a href="#" className="header__link">Контакты</a></li>
                </ul>
           </div>
            <ul className="header__list--icon">
                <li className="header__item"><img src={img2 + "like-icon.svg"} alt="like-icon" className="header__img--icon header__posi-like" /></li>
                <li className="header__item"><img src={img2 + "user-icon.svg"} alt="user-icon" className="header__img--icon header__posi-user " /></li>
                <li className="header__item"><img src={img2 + "shopping-icon.svg"} alt="shopping-icon" className="header__img--icon header__posi-shop" /></li>
            </ul>
            <div className="burger">
                <div onClick={() => setActive(!active)} className={active === true ? "burger__menu active" : "burger__menu"}>
                    <div className="burger__line"></div>
                    <div className="burger__line"></div>
                    <div className="burger__line"></div>
                    <div className="burger__close">x</div>
                </div>
                <ul className="burger__list">
                    <li className="header__item"><a href="#" className="header__link">Каталог</a></li>
                    <li className="header__item"><a href="#" className="header__link">Новости</a></li>
                    <li className="header__item"><a href="#" className="header__link">Доставка</a></li>
                    <li className="header__item"><a href="#" className="header__link">О нас</a></li>
                    <li className="header__item"><a href="#" className="header__link">Контакты</a></li> 
                </ul>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header