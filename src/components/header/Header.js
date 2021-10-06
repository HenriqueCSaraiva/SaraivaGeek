import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './Header.css';

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <div className="header">
            {/* Logo */}
            <Link to='/'>
                <div>
                    <img className="header__logo" src="https://api.freelogodesign.org/files/732524b4b63144f991e6f05f649535b9/thumb/logo_200x200.png?v=637687957030000000" />
                </div>
            </Link>

            {/* Menu */}
            <div className="header__centerMenu">
                <Link to="" className="header__centerLink">Playstation</Link>
                <Link to="" className="header__centerLink">Xbox</Link>
                <Link to="" className="header__centerLink">Nintendo</Link>
                <Link to="" className="header__centerLink">Ofertas</Link>
                <Link to="" className="header__centerLink">Navegar</Link>
            </div>


            {/* Login e Carrinho */}
            <div className="header__rightMenu">
                <Link to="/login" className="header__rightLink">
                    <div className="header__option">
                        <span className="header__optionLineOne">Bem-vindo,</span>
                        <span className="header__optionLineTwo">Iniciar sessão</span>
                    </div>
                </Link>

                {/* 2st links*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionCarrinho">
                        {/* Icone Carrinho */}
                        <img className="header__carrinhoLogo" src='assets/cart-icon.svg' />

                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__CountCarrinho">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
