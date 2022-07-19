import React from 'react'
import './index.scss'

const Back = () => {
    const img11 = "/src/components/Back/img/";
  return (
    <section className="back">
    <div className="container">
        <div className="back__content">
            <div className="back__left">
                <span className="back__promo">
                    1 + 1 = 3
                </span>
                <p className="back__proposal">
                    Закажите два товара и получите третий бесплатно
                </p>
                <div className="back__button">
                    <button className="button">
                        Перейти в каталог
                    </button>
                </div>
            </div>
            <div className="back__right">
                <img className="back__img" src={img11 + "copperr.png"} alt="" />
            </div>
            <h2 className="back__title title">
                COPPER
                <p className='back__par'>PRO</p>
            </h2>
        </div>
    </div>
</section>
  )
}

export default Back
