import React from 'react'
import './index.scss'

const Sales = () => {
    const img10 = "/src/components/Products/img/";
  return (
    <section className="sales">
    <div className="container">
    <h2 className='sales__text'>СКИДКИ</h2>
        <div className="sales__content">
            
            <div className="sales__item">
                <div className="sales__top">
                    <img className="sales__img" src={img10 + "item.png"} alt="" />
                    <div className="sales__icon">
                        <svg className="sales__favorite" width="30" height="27" viewBox="0 0 30 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.875 0.396484C20.4674 0.418378 19.0906 0.811301 17.8834 1.53557C16.6763 2.25985 15.6817 3.28982 15 4.52148C14.3183 3.28982 13.3236 2.25985 12.1165 1.53557C10.9094 0.811301 9.53254 0.418378 8.12498 0.396484C5.88115 0.493973 3.76711 1.47555 2.24471 3.12677C0.722303 4.778 -0.0847098 6.96464 -2.16196e-05 9.20898C-2.16196e-05 14.8927 5.98248 21.1002 11 25.309C12.1203 26.2504 13.5367 26.7665 15 26.7665C16.4633 26.7665 17.8797 26.2504 19 25.309C24.0175 21.1002 30 14.8927 30 9.20898C30.0847 6.96464 29.2777 4.778 27.7552 3.12677C26.2328 1.47555 24.1188 0.493973 21.875 0.396484ZM17.3937 23.3965C16.7237 23.9607 15.8759 24.2701 15 24.2701C14.124 24.2701 13.2762 23.9607 12.6062 23.3965C6.18373 18.0077 2.49998 12.8377 2.49998 9.20898C2.41453 7.62738 2.95794 6.07615 4.01168 4.89361C5.06543 3.71107 6.54402 2.99317 8.12498 2.89648C9.70594 2.99317 11.1845 3.71107 12.2383 4.89361C13.292 6.07615 13.8354 7.62738 13.75 9.20898C13.75 9.54051 13.8817 9.85845 14.1161 10.0929C14.3505 10.3273 14.6685 10.459 15 10.459C15.3315 10.459 15.6494 10.3273 15.8839 10.0929C16.1183 9.85845 16.25 9.54051 16.25 9.20898C16.1645 7.62738 16.7079 6.07615 17.7617 4.89361C18.8154 3.71107 20.294 2.99317 21.875 2.89648C23.4559 2.99317 24.9345 3.71107 25.9883 4.89361C27.042 6.07615 27.5854 7.62738 27.5 9.20898C27.5 12.8377 23.8162 18.0077 17.3937 23.3915V23.3965Z"
                                fill="#031412" />
                        </svg>
                        <svg className="sales__favorite--animate" width="30" height="27" viewBox="0 0 30 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.8834 1.53533C19.0905 0.811057 20.4674 0.418134 21.875 0.39624C24.1188 0.493729 26.2328 1.47531 27.7552 3.12653C29.2777 4.77775 30.0847 6.9644 30 9.20874C30 14.8925 24.0175 21.1 19 25.3087C17.8797 26.2502 16.4633 26.7663 15 26.7663C13.5367 26.7663 12.1202 26.2502 11 25.3087C5.98248 21.1 -2.16197e-05 14.8925 -2.16197e-05 9.20874C-0.0847098 6.9644 0.722303 4.77775 2.24471 3.12653C3.76711 1.47531 5.88115 0.493729 8.12498 0.39624C9.53254 0.418134 10.9094 0.811057 12.1165 1.53533C13.3236 2.2596 14.3183 3.28958 15 4.52124C15.6817 3.28958 16.6763 2.2596 17.8834 1.53533Z"
                                fill="url(#paint0_linear_35_404)" />
                            <defs>
                                <linearGradient id="paint0_linear_35_404" x1="7.573" y1="-6.39264" x2="29.851" y2="-5.41773"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#5E3928" />
                                    <stop offset="0.911458" stop-color="#E4A16F" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="sales__bottom">
                    <h2 className="sales__name">Медный чайник с фарфоровой ручкой</h2>
                    <h3 className="sales__price">1 953 грн</h3>
                </div>
            </div>
            <div className="sales__item item">
                <div className="sales__top">
                    <img className="sales__img" src={img10 + "item.png"} alt="" />
                    <div className="sales__icon">
                        <svg className="sales__favorite" width="30" height="27" viewBox="0 0 30 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.875 0.396484C20.4674 0.418378 19.0906 0.811301 17.8834 1.53557C16.6763 2.25985 15.6817 3.28982 15 4.52148C14.3183 3.28982 13.3236 2.25985 12.1165 1.53557C10.9094 0.811301 9.53254 0.418378 8.12498 0.396484C5.88115 0.493973 3.76711 1.47555 2.24471 3.12677C0.722303 4.778 -0.0847098 6.96464 -2.16196e-05 9.20898C-2.16196e-05 14.8927 5.98248 21.1002 11 25.309C12.1203 26.2504 13.5367 26.7665 15 26.7665C16.4633 26.7665 17.8797 26.2504 19 25.309C24.0175 21.1002 30 14.8927 30 9.20898C30.0847 6.96464 29.2777 4.778 27.7552 3.12677C26.2328 1.47555 24.1188 0.493973 21.875 0.396484ZM17.3937 23.3965C16.7237 23.9607 15.8759 24.2701 15 24.2701C14.124 24.2701 13.2762 23.9607 12.6062 23.3965C6.18373 18.0077 2.49998 12.8377 2.49998 9.20898C2.41453 7.62738 2.95794 6.07615 4.01168 4.89361C5.06543 3.71107 6.54402 2.99317 8.12498 2.89648C9.70594 2.99317 11.1845 3.71107 12.2383 4.89361C13.292 6.07615 13.8354 7.62738 13.75 9.20898C13.75 9.54051 13.8817 9.85845 14.1161 10.0929C14.3505 10.3273 14.6685 10.459 15 10.459C15.3315 10.459 15.6494 10.3273 15.8839 10.0929C16.1183 9.85845 16.25 9.54051 16.25 9.20898C16.1645 7.62738 16.7079 6.07615 17.7617 4.89361C18.8154 3.71107 20.294 2.99317 21.875 2.89648C23.4559 2.99317 24.9345 3.71107 25.9883 4.89361C27.042 6.07615 27.5854 7.62738 27.5 9.20898C27.5 12.8377 23.8162 18.0077 17.3937 23.3915V23.3965Z"
                                fill="#031412" />
                        </svg>
                        <svg className="sales__favorite--animate" width="30" height="27" viewBox="0 0 30 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.8834 1.53533C19.0905 0.811057 20.4674 0.418134 21.875 0.39624C24.1188 0.493729 26.2328 1.47531 27.7552 3.12653C29.2777 4.77775 30.0847 6.9644 30 9.20874C30 14.8925 24.0175 21.1 19 25.3087C17.8797 26.2502 16.4633 26.7663 15 26.7663C13.5367 26.7663 12.1202 26.2502 11 25.3087C5.98248 21.1 -2.16197e-05 14.8925 -2.16197e-05 9.20874C-0.0847098 6.9644 0.722303 4.77775 2.24471 3.12653C3.76711 1.47531 5.88115 0.493729 8.12498 0.39624C9.53254 0.418134 10.9094 0.811057 12.1165 1.53533C13.3236 2.2596 14.3183 3.28958 15 4.52124C15.6817 3.28958 16.6763 2.2596 17.8834 1.53533Z"
                                fill="url(#paint0_linear_35_404)" />
                            <defs>
                                <linearGradient id="paint0_linear_35_404" x1="7.573" y1="-6.39264" x2="29.851" y2="-5.41773"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#5E3928" />
                                    <stop offset="0.911458" stop-color="#E4A16F" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="sales__bottom">
                    <h2 className="sales__name">Медный чайник с фарфоровой ручкой</h2>
                    <h3 className="sales__price">1 953 грн</h3>
                </div>
            </div>
            <div className="sales__item item">
                <div className="sales__top">
                    <img className="sales__img" src={img10 + "item.png"} alt="" />
                    <div className="sales__icon">
                        <svg className="sales__favorite" width="30" height="27" viewBox="0 0 30 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.875 0.396484C20.4674 0.418378 19.0906 0.811301 17.8834 1.53557C16.6763 2.25985 15.6817 3.28982 15 4.52148C14.3183 3.28982 13.3236 2.25985 12.1165 1.53557C10.9094 0.811301 9.53254 0.418378 8.12498 0.396484C5.88115 0.493973 3.76711 1.47555 2.24471 3.12677C0.722303 4.778 -0.0847098 6.96464 -2.16196e-05 9.20898C-2.16196e-05 14.8927 5.98248 21.1002 11 25.309C12.1203 26.2504 13.5367 26.7665 15 26.7665C16.4633 26.7665 17.8797 26.2504 19 25.309C24.0175 21.1002 30 14.8927 30 9.20898C30.0847 6.96464 29.2777 4.778 27.7552 3.12677C26.2328 1.47555 24.1188 0.493973 21.875 0.396484ZM17.3937 23.3965C16.7237 23.9607 15.8759 24.2701 15 24.2701C14.124 24.2701 13.2762 23.9607 12.6062 23.3965C6.18373 18.0077 2.49998 12.8377 2.49998 9.20898C2.41453 7.62738 2.95794 6.07615 4.01168 4.89361C5.06543 3.71107 6.54402 2.99317 8.12498 2.89648C9.70594 2.99317 11.1845 3.71107 12.2383 4.89361C13.292 6.07615 13.8354 7.62738 13.75 9.20898C13.75 9.54051 13.8817 9.85845 14.1161 10.0929C14.3505 10.3273 14.6685 10.459 15 10.459C15.3315 10.459 15.6494 10.3273 15.8839 10.0929C16.1183 9.85845 16.25 9.54051 16.25 9.20898C16.1645 7.62738 16.7079 6.07615 17.7617 4.89361C18.8154 3.71107 20.294 2.99317 21.875 2.89648C23.4559 2.99317 24.9345 3.71107 25.9883 4.89361C27.042 6.07615 27.5854 7.62738 27.5 9.20898C27.5 12.8377 23.8162 18.0077 17.3937 23.3915V23.3965Z"
                                fill="#031412" />
                        </svg>
                        <svg className="sales__favorite--animate" width="30" height="27" viewBox="0 0 30 27" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.8834 1.53533C19.0905 0.811057 20.4674 0.418134 21.875 0.39624C24.1188 0.493729 26.2328 1.47531 27.7552 3.12653C29.2777 4.77775 30.0847 6.9644 30 9.20874C30 14.8925 24.0175 21.1 19 25.3087C17.8797 26.2502 16.4633 26.7663 15 26.7663C13.5367 26.7663 12.1202 26.2502 11 25.3087C5.98248 21.1 -2.16197e-05 14.8925 -2.16197e-05 9.20874C-0.0847098 6.9644 0.722303 4.77775 2.24471 3.12653C3.76711 1.47531 5.88115 0.493729 8.12498 0.39624C9.53254 0.418134 10.9094 0.811057 12.1165 1.53533C13.3236 2.2596 14.3183 3.28958 15 4.52124C15.6817 3.28958 16.6763 2.2596 17.8834 1.53533Z"
                                fill="url(#paint0_linear_35_404)" />
                            <defs>
                                <linearGradient id="paint0_linear_35_404" x1="7.573" y1="-6.39264" x2="29.851" y2="-5.41773"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#5E3928" />
                                    <stop offset="0.911458" stop-color="#E4A16F" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div className="sales__bottom">
                    <h2 className="sales__name">Медный чайник с фарфоровой ручкой</h2>
                    <h3 className="sales__price">1 953 грн</h3>
                </div>
            </div>
        </div>
        <div className="sales__button">
            <button className='button__sale sale'>Перейти в каталог</button>
        </div>
    </div>
</section>
  )
}

export default Sales