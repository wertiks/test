import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    static path = '/';

    render(){
        return(
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <a className='navbar-brand' href="#">Заголовок</a>
                        </div>

                        <ul className='nav navbar-nav'>
                            <li> <Link to ='/home'> Главная </Link> </li>
                            <li> <Link to ='/contact'> Контакт </Link> </li>
                            <li> <Link to ='/list'> Список Todo</Link> </li>
                            <li> <Link to ='/train'> СтрТеста </Link> </li>
                            <li> <Link to ='/error'> СтрОшибки </Link> </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}
