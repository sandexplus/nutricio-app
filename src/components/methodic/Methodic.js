import './Methodic.scss';
import girl1 from '../../assets/img/methodic_girl1.jpg'
import girl2 from '../../assets/img/methodic_girl2.jpg'

import milk from '../../assets/img/methodic_milk.svg'
import fitness from '../../assets/img/methodic__fitness.svg'
import head from '../../assets/img/methodic__head.svg'
import gel from '../../assets/img/methodic__gel.svg'
import download from '../../assets/img/file_download.svg'

const Methodic = () => {
    return (
        <>
            <div className="methodic">
                <div className="container">
                    <div className="methodic__container">
                        <div className="methodic__item">
                            <h1 className="methodic__title">Методичка</h1>
                            <div className="methodic__descr">
                                <p>Привет! Я рада, что вы читаете это, значит вы выбрали путь к здоровью балансу внутри себя
                                </p>
                                <p>Хочу оговориться сразу.
                                    Это не сборник диет, мы здесь для того, чтобы понять,
                                    как питаться вкусно, полезно, без запретов, как тренироваться в удовольствие и
                                    перестать корить себя за то, что ты ешь и как выглядишь
                                </p>    
                            </div>
                        </div>
                        <div className="methodic__item">
                            <img src={girl1} alt="Girl" className="methodic__img" />
                            <img src={girl2} alt="Girl" className="methodic__img" />
                        </div>
                    </div>   

                    <div className="methodic__base-data">В этой методичке мы разберём такие важные понятия, как</div>
                    <div className="methodic__flex">
                        <div className="methodic__flex-item">
                            <img src={milk} alt="Milk" className="methodic__data-img" />
                            <div className="methodic__data-descr">Питание</div>
                        </div>
                        <div className="methodic__flex-item">
                            <img src={fitness} alt="Fitness" className="methodic__data-img" />
                            <div className="methodic__data-descr">Тренировки</div>
                        </div>
                        <div className="methodic__flex-item">
                            <img src={head} alt="Head" className="methodic__data-img" />
                            <div className="methodic__data-descr">Мотивация</div>
                        </div>
                        <div className="methodic__flex-item">
                            <img src={gel} alt="Gel" className="methodic__data-img" />
                            <div className="methodic__data-descr">Уход за телом</div>
                        </div>
                    </div> 

                    <button className="methodic__download">Скачать в pdf <img src={download} alt="Download" /></button>
                </div>
            </div>
        </>
    );
}

export default Methodic;