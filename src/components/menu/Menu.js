import { Link } from "react-router-dom";

import './Menu.scss';
import img1 from '../../assets/img/menu-img1.jpg';
import img2 from '../../assets/img/menu-img2.jpg';
import img3 from '../../assets/img/menu-img3.jpg';

const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className="menu__container">
                        <Link to='/table' className="menu__item">
                            <img src={img1} alt="" className="menu__img" />
                            <div className="menu__link">Трекеры</div>
                        </Link>
                        <Link to='/methodic' className="menu__item">
                            <img src={img2} alt="" className="menu__img" />
                            <div className="menu__link">Методичка</div>
                        </Link>
                        <Link to='/trainers' className="menu__item">
                            <img src={img3} alt="" className="menu__img" />
                            <div className="menu__link">Тренировки</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;