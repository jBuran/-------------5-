import React from 'react';
import './index.scss';

const Hero = () => {
    const img3 = "/src/components/Hero/img/";
  return (
    <section className="hero">
    <div className="trees">
        <img className="les" src={img3 + "corner-img.png"} alt="" />
    </div>
    <div className="treestwo">
        <img className="treestwo__img" src={img3 + "trees945.png"} alt="" />
    </div>
    <div className="bulba">
        <img className="destilator" src={img3 + "hero-destilator.png"} alt="" />
        <img className="destilatormobi" src={img3 + "herofone-mobile.png"} alt="" />
    </div>
    <div className="copper">
        <img className="copperpro" src={img3 + "COPPER PRO.svg"} alt="" />
    </div>
    <div className="point__one">
        <img className="point__one--ell" src={img3 + "ell.png"} alt="" />
        <img className="point"  src={img3 + "point.png"} alt="" />
    </div>
    <div className="point__two"><img classNameName="point" src={img3 + "point.png"} alt="" />
    </div>
    <div className="point__three"><img classNameName="point"  src={img3 + "point.png"} alt="" />
    </div>

    <div className="container">
        <div className="hero__content">
            <div className="hero__left">
                <div className="hero__logo">
                ХИТ ПРОДАЖ
                </div>
                <img className="hero__line" src={img3 + "Line 1.png"} alt="" />
                <h2 className="hero__name">Дистиллятор для эфирных масел </h2>
                <p className="hero__price">Цена <strong>4906грн</strong></p>
                <button className="button text">
                 Купить
                </button>
            </div>
        </div>
    </div>
</section>
  )
}

export default Hero;