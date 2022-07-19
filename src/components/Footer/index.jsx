import React from 'react'
import './index.scss'

const Footer = () => {
    const img6 = "/src/components/Footer/img/";
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__content">
            <ul className="footer__list">
                <li className="footer__item">
            <img src={img6 + "footer-logo.svg"} alt="" className="footer__logo" />
            <h1 className="footer__item__text">
                © 2021 “Copper Pro” 
            </h1>
            <h2 className="footer__item__taxt">
                Все права защищенны
            </h2>
            <a href="#" className="footer__item__link">
                Политика конфиденциальности
            </a>
            </li>
            <li className="footer__item__two">
                <h1 className="footer__item__two__text">Навигация</h1>
                <a href="#" className="footer__item__two__link">Каталог</a>
                <a href="#" className="footer__item__two__link">Новости</a>
                <a href="#" className="footer__item__two__link">Доставка</a>
                <a href="#" className="footer__item__two__link">О нас</a>
                <a href="#" className="footer__item__two__link">Контакты</a>
            </li>
            <li className="footer__item__three">
                <h1 className="footer__item__two__text">Каталог</h1>
                <a href="#" className="footer__item__two__link">Для эфирных масел</a>
                <a href="#" className="footer__item__two__link">Для гидролатов</a>
                <a href="#" className="footer__item__two__link">Медная посуда</a>
                <a href="#" className="footer__item__two__link">Аксессуары из меди</a>
                <a href="#" className="footer__item__two__link">Индивидуальный заказ</a>
                <a href="#" className="footer__item__two__link">Скидки и предложения</a>
            </li>
            <li className="footer__item__four">
                <h1 className="footer__item__two__text">Контакты</h1>
                <a href="#" className="footer__item__two__link">Бажана 8-Б, Киев, 
                    02132 Украина</a>
                    <a href="tel:+996999040002" className="footer__item__two__link">+996(999)04-00-02</a>
                    <a href="mailto:erstan.azhibekov@mail.ru" className="footer__item__two__link">a.alambik@gmail.com</a>
                    <div className="logo__footer__block">
                        <a href="#" className="social__icon"> <img src={img6 + "footer-tw.svg"} alt="" /> </a>
                        <a href="#" className="social__icon"> <img src={img6 + "footer-fcb.svg"} alt="" /></a>
                        <a href="#" className="social__icon"> <img src={img6 + "footer-insta.svg"} alt="" /></a>
                    </div>
            </li>

          </ul>
        </div>
    </div>
    <button className="footer__button">ВВЕРХ</button>
</footer>
  )
}

export default Footer