import React from 'react'
import Proucts from './index.scss'

const Products = () => {
    const img4 = "/src/components/Products/img/";
  return (
    <section className="product">
    <div className="container">
    
<h2 className='products__text'>НАША ПРОДУКЦИЯ</h2>
        <div className="products__content">

            <div className="products__item">
                <img src={img4 + "item.png"} alt="" className="products__img" />
                <h2 className="products__name">
                    Для эфирных масел
                </h2>
            </div>

            <div className="products__item">
                <a id="products" className="link" href="">
                    <img src={img4 + "samogon2slayd.png"} alt="" className="products__img" />
                </a>
                <h2 className="products__name">
                    Для гидролатов
                </h2>
            </div>

            <div className="products__item">
                <img src={img4 + "chainick__slayd.png"} alt="" className="products__img" />
                <h2 className="products__name">
                    Медная посуда
                </h2>
            </div>

            <div className="products__item">
                <img src={img4 + "bolonmedniy.png"} alt="" className="products__img" />
                <h2 className="products__name">
                    Аксессуары из меди
                </h2>
            </div>

            <div className="products__item">
                <img src={img4 + "ronaldo__slayd.png"} alt="" className="products__img" />
                <h2 className="products__name">
                    Индивидуальный заказ
                </h2>
            </div>

            <div className="products__item">
                <img src={img4 + "skidki slayd.png" } alt="" className="products__img" />
                <h2 className="products__name">
                    Скидки и предложения
                </h2>
            </div>
        </div>
    </div>
</section>
  )
}

export default Products