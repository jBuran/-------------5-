import React from 'react';
import './index.scss';

const Our = () => {
    const img12 = "/src/components/Our/img/";
  return (
    <section className="our">
       <div className="container">
           <div className="our__content">
               <div className="our__details">
                   <div className="our__figure"> 
                       <img className="our__man" src={img12 + "man.png"} alt="" />
                    <h2 className="our__autor">Иван Иванов</h2>
                    <p className="our__description">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. 
                    </p>
                    <h3 className="our__date">20.10.21</h3>
                </div>
                <img className="our__comma" src={img12 + "Union.png"} alt="" />
               </div>
               <div className="our__details detail">
                   <div className="our__figure"> 
                       <img className="our__man" src={img12 + "man.png"} alt="" />
                    <h2 className="our__autor">Иван Иванов</h2>
                    <p className="our__description">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. 
                    </p>
                    <h3 className="our__date">20.10.21</h3>
                </div>
                <img className="our__comma" src={img12 + "Union.png"} alt="" />
               </div>
               <div className="our__details detail">
                   <div className="our__figure"> 
                       <img className="our__man" src={img12 + "man.png"} alt="" />
                    <h2 className="our__autor">Иван Иванов</h2>
                    <p className="our__description">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. 
                    </p>
                    <h3 className="our__date">20.10.21</h3>
                </div>
                <img className="our__comma" src={img12 + "Union.png"} alt="" />
               </div>
           </div>
       </div>
   </section>
  )
}

export default Our