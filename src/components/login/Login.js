import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {useEffect} from 'react';
import { LoginTitle } from '../loginTitle/LoginTitle';
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './Login.scss';
import instagram from '../../assets/img/instagram.svg'
import telegram from '../../assets/img/telegram.svg'
import aboutTitle from '../../assets/img/about.png';
import aboutGirl from '../../assets/img/about_girl.jpg';
import rateTitle from '../../assets/img/rate.png';
import reviewTitle from '../../assets/img/review.png';

import reviewImg1 from '../../assets/img/review1.jpg' 
import reviewImg2 from '../../assets/img/review2.jpg' 
import reviewImg3 from '../../assets/img/review3.jpg' 

import logo from '../../assets/img/logo.png';

const Login = (props) => {

    useEffect(() => {
        console.log(props.users);
    }, [props.users])
    
    return (
        <>
        <section className="login">
            <div className="container">
                <div className="login__container">
                    <nav className="login__nav">
                        <Link to="/#about" className="login__anchor">Обо мне</Link>
                        <a href="#rate" className="login__anchor">Тарифы</a>
                        <a href="#review" className="login__anchor">Отзывы</a>
                    </nav>
                    <Link to={localStorage.getItem('You.Course__login') ? '/links' : "/login"} className="login__login">Войти</Link>
                </div> 
                <div className="login__links-container">
                    <a href='#' className="login__link">
                        <img src={instagram} alt="Instagram" className="login__link-img" />
                    </a>
                    <a href='#' className="login__link">
                        <img src={telegram} alt="Telegram" className="login__link-img" />
                    </a>
                </div>   
            </div>
        </section>
        <section className="about" id="about">
            <img className='about__title' src={aboutTitle} alt="Обо мне" />
            <div className="container">
                <div className="about__flex">
                    <div className="about__item">
                        <div className="about__name">Привет! Меня зовут <span>Диана Щербинина</span></div>
                        <div className="about__descr">Я тренер и специалист по питанию. Помогаю людям в модификации образа жизни, коррекции питания и веса</div>
                        <div className="about__works">
                            <div className="about__work-title">С кем я работаю:</div>
                            <div className="about__work-container">
                                <div className="about__work-item">Беременные девушки и девушки после родов</div>
                                <div className="about__work-item">Люди с недостатком мышечной массы и отеками</div>
                                <div className="about__work-item">Люди с лишним весом</div>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <img src={aboutGirl} alt="Мастер" className="about__master" />
                    </div>
                </div>
            </div>
        </section>
        <section className="rate">
            <div className="container">
                {LoginTitle(rateTitle, 'Тарифы')}
                <div className="rate__container">
                    <div className="rate__item">
                        <div className="rate__data-container">
                            <div className="rate__name">СОПРОВОЖДЕНИЕ</div>
                            <div className="rate__descr">Доступ на 21 день</div>
                            <ul className="rate__functions">
                                <li className="rate__function">Сопровождение куратора на всех этапах</li>
                                <li className="rate__function">Вводное анкетирование</li>
                                <li className="rate__function">Доступ к тренировкам</li>
                                <li className="rate__function">Разбор пищевого поведения и работа над ним</li>
                                <li className="rate__function">Трекер для отслеживания параметров</li>
                                <li className="rate__function">Методичка с главными темами по достижению цели</li>
                                <li className="rate__function">Работа по любому вашему запросу</li>
                                <li className="rate__function">Планеры</li>
                            </ul>
                        </div>
                        <div className="rate__price-container">
                            <div className="rate__price">3000₽</div>
                            <div className="rate__subprice">повторно 2800₽</div>
                        </div>
                    </div>
                    <div className="rate__item">
                        <div className="rate__data-container">
                            <div className="rate__name">ПАРНОЕ СОПРОВОЖЕНИЕ</div>
                            <div className="rate__descr">Доступ на 21 день</div>
                            <ul className="rate__functions">
                                <li className="rate__function">Подходит для подруг, сестёр, матери и дочери</li>
                                <li className="rate__function">Тариф “СОПРОВОЖДЕНИЕ”</li>
                            </ul>
                        </div>
                        <div className="rate__price-container">
                            <div className="rate__price">3000₽</div>
                            <div className="rate__subprice">повторно 2800₽</div>
                        </div>
                    </div>
                    <div className="rate__item">
                        <div className="rate__data-container">
                            <div className="rate__name">КОНСУЛЬТАЦИЯ</div>
                            <div className="rate__descr">Единоразово</div>
                            <ul className="rate__functions">
                                <li className="rate__function">Консультация может проходить в нескольких форматах: видеозвонок, аудиозвонок, сообщение</li>
                                <li className="rate__function">Вы формируете свой запрос, пример «Как научиться считать калории?», «С чего начать похудение?»</li>
                                <li className="rate__function">В течении суток я разбираю ваш запрос и после связываюсь с ответом и отвечаю на дополнительные вопросы</li>
                            </ul>
                        </div>
                        <div className="rate__price-container">
                            <div className="rate__price">1000₽</div>
                            <div className="rate__subprice">повторно 800₽</div>
                        </div>
                    </div>
                    <div className="rate__item">
                        <div className="rate__data-container">
                            <div className="rate__name">ТРЕНИРОВОЧНЫЙ ПЛАН</div>
                            <div className="rate__descr">Единоразово</div>
                            <ul className="rate__functions">
                                <li className="rate__function">Вы указываете место, где занимаетесь (дом или зал)</li>
                                <li className="rate__function">Инвентарь, который имеете (гантели, резинки, коврик и т. д)</li>
                                <li className="rate__function">Условия и наличие свободного времени (есть маленький ребёнок, могу заниматься 3 раза в неделю по 30 минут)</li>
                                <li className="rate__function">В течении 1-2 дней я составляю для вас программу и если надо – корректирую, если у вас возникли вопросы по упражнениям</li>
                            </ul>
                        </div>
                        <div className="rate__price-container">
                            <div className="rate__price">1000₽</div>
                            <div className="rate__subprice">повторно 800₽</div>
                        </div>
                    </div>
                </div>
                <div className="rate__links">
                    <div className="rate__link-item">Для оплаты связаться</div>
                    <div className="rate__link-item">
                        <a href='#' className="rate__link">
                            <img src={telegram} alt="Telegram" className="rate__link-img" />
                        </a>
                    </div>
                    <div className="rate__link-item">
                        <a href='#' className="rate__link">
                            <img src={instagram} alt="Instagram" className="rate__link-img" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="review">
            <div className="container">
                {LoginTitle(reviewTitle, 'Отзывы')}
                <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3}
                /* width={'80%'} */
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                centeredSlides={true}
                loop={true}
                allowTouchMove={false}
                className='review__slider'
                >
                    <SwiperSlide><img src={reviewImg1} alt="Отзыв" className="review__img" /></SwiperSlide>
                    <SwiperSlide><img src={reviewImg2} alt="Отзыв" className="review__img" /></SwiperSlide>
                    <SwiperSlide><img src={reviewImg3} alt="Отзыв" className="review__img" /></SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
        <footer className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__links">
                        <div className="footer__link">
                            <img src={telegram} alt="Telegram" className="footer__link-img" />
                        </div>
                        <div className="footer__link">
                            <img src={instagram} alt="Instagram" className="footer__link-img" />
                        </div>
                    </div>
                    <img src={logo} alt="Logo" className="footer__logo" />
                    <div className="footer__credentials">&copy; {new Date().getFullYear()} You.Course</div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Login;