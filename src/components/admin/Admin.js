import { Link } from 'react-router-dom';

import './Admin.scss';

const Admin = () => {
    return (
        <div className="admin">
            <div className="container">
                <Link to='/'>На главную</Link>
                <input type="text" className="admin__login" />
                <button className='admin-add-btn'>Добавить пользователя</button>
            </div>
        </div>
    )
}

export default Admin;