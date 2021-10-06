import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <img
                className="banner__image"
                src="https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg"
                alt=""
            />

            <h1 className="titulo">
                Mais Vendidos 🎮
            </h1>
        </div>
    )
}

export default Banner
