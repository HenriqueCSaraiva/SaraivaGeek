import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__row">
                <p className="footer__text">Entre em contato</p>
            </div>

            <div className="footer__row">
                <a href="https://www.linkedin.com/in/henrique-csaraiva/">
                    <img
                        className="footer__icone"
                        src="https://cdn-icons-png.flaticon.com/512/124/124011.png"
                        alt=""
                    />
                </a>

                <a href="https://github.com/HenriqueCSaraiva">
                    <img
                        className="footer__icone"
                        src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                        alt=""
                    />
                </a>

                <a href="https://www.instagram.com/henrique_c_saraiva/">
                    <img
                        className="footer__icone"
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                        alt=""
                    />
                </a>

            </div>
        </div>
    )
}

export default Footer
