import React from 'react';
import './index.scss';

const Choose = () => {
  const img14 = "/src/components/Choose/img/";
  return (
    <section className="choose">
        <div className="container">
            <div className="choose__content">
                <h1 className="title">ПОЧЕМУ ВЫБИРАЮТ НАС</h1>
                <div className="choose__sector">
                      
                    <div className="choose__box">                
                        
                            <div className="box__bg--img">
                                <img  src={img14 + "star (2) 1 (1).svg"} alt="" />
                            </div>
                            <h5 className="box__name">Аутентичность</h5>
                        
                        
                            <div className="box__text">
                            <span >Медное перегонное оборудование<br /> используется для получения эфирных<br /> масел с незапамятных времен.</span>
                            </div>
                            <div className="box__bottom--continuation">
                            <a href="" className="box__continuation">Читать больше </a>
                            <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                        </div>
                        
                                       
                            
                            <div className="box__bg--img">
                                <img  src={img14 + "hands 1.svg"} alt="" />
                            </div>
                            <h5 className="box__name">Доставка по всему миру</h5>
                       
                            
                                <div className="box__text">
                            <span >Вы можете получить нашу продукцию в<br /> кратчайшие сроки в любую точку земного<br /> шара.</span>
                                
                            </div>
                            <div className="box__bottom--continuation">
                            <a href="" className="box__continuation">Читать больше </a>
                            <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                        </div>
                        
                        
                    </div>


                    <div className="choose__box">                
                        
                        <div className="box__bg--img">
                            <img  src={img14 + "eye (1) 1.svg"} alt="" />
                        </div>
                        <h5 className="box__name">Изысканность</h5>
                    
                        
                            <div className="box__text">
                        <span >Наши изделия из меди являются очень<br />практичными. В то же время они наполнят<br /> особой магией ваш дом или рабочее....</span>
                        </div>
                        <div className="box__bottom--continuation">
                        <a href="" className="box__continuation">Читать больше </a>
                        <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                    </div>
                   
                                  
                        
                        <div className="box__bg--img">
                            <img  src={img14 + "shield (3) 1.svg"} alt="" />
                        </div>
                        <h5 className="box__name">Гарантия качества</h5>
                    
                        
                            <div className="box__text">
                        <span >Наше оборудование прозводится вручную<br /> Мы постоянно производим контроль<br /> качества произведенной продукции. </span>
                        </div>
                        <div className="box__bottom--continuation">
                        <a href="" className="box__continuation">Читать больше </a>
                        <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                    </div>
                    
                    
                    </div>
               

                
                    <div className="choose__box">                
                        
                        <div className="box__bg--img">
                            <img  src={img14 + "041---Raise-Money.svg"} alt="" />
                        </div>
                        <h5 className="box__name">Честная оплата</h5>
                    
                        
                            <div className="box__text">
                        <span >Мы стремимся предоставить лучший товар<br />
                                                по лучшей цене с сервисом высокого<br />
                                                уровня. Но все начинается c....</span>
                        
                        </div>
                        <div className="box__bottom--continuation">
                        <a href="" className="box__continuation">Читать больше </a>
                        <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                    </div>
                    
                                  
                        
                        <div className="box__bg--img">
                            <img  src={img14 + "potion 1.svg"} alt="" />
                        </div>
                        <h5 className="box__name">Удобство в использовании</h5>
                    
                        
                            <div className="box__text">
                        <span >Наши изделия из меди имеют уникальный<br />
                             дизайн, который разрабатывался нами с<br />
                              целью получения максимальной...</span>
                        </div>
                        <div className="box__bottom--continuation">
                        <a href="" className="box__continuation">Читать больше </a>
                        <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                    </div>
                    
                    
                    </div>
                    

                    <div className="choose__box">                
                        
                        <div className="box__bg--img">
                            <img  src={img14 + "flask 1.svg"} alt="" />
                        </div>
                        <h5 className="box__name">Большой ассортимент</h5>
                    
                        
                            <div className="box__text">
                        <span >У нас есть все от миниатюрных настольных<br />
                             паровых дистилляторов эфирных масел до<br />
                              крупногабаритного оборудования...</span>
                        </div>
                        <div className="box__bottom--continuation">
                        <a href="" className="box__continuation">Читать больше </a>
                        <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                    </div>
                    
                                    
                        
                        <div className="box__bg--img">
                            <img  src={img14 + "landscape 1.svg"} alt="" />
                        </div>
                        <h5 className="box__name">Забота об окружающей среде</h5>
                    
                        
                            <div className="box__text">
                        <span >От 2 до 5% от стоимости каждого<br />
                             приобретенного товара в нашем магазине<br /> мы направляем на защиту....</span>
                        </div>
                        <div className="box__bottom--continuation">
                        <a href="" className="box__continuation">Читать больше </a>
                        <img className="continuation__icon" src={img14 + "continuation-icon.svg"} alt="" />
                    </div>
                    
                </div>
            
        </div>
    </div>
</div>
</section>
  )
}

export default Choose;