import React from 'react'
import { useStateValue } from '../StateProvider';
import './Products.css'

function Products({ id, name, price, score, image, }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
                price: price,
                score: score,
                image: image,
            },
        })
    };

    return (
        <section className="products">
            <div className="products__info">
                <p className="products__name">{name}</p>
                <p className="products__price">
                    <small>R$</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img
                classname="products__image"
                src={image}
                alt="" />

            <button
                className="products__button"
                onClick={addToBasket}
            >Adicionar ao carrinho</button>
        </section>
    )
}

export default Products;