import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProducts.css';

function CheckoutProducts({ key, id, name, price, score, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        })

    }

    return (
        <div className="checkoutProducts">
            <img className="checkoutProducts__image" src={image} alt="Product Image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProducts__name">{name}</p>
                <p className="checkoutProducts__price">
                    <small>R$</small>
                    <strong>{price}</strong>
                </p>

                <button onClick={removeFromBasket} className="checkoutProducts__button">Remover do Carrinho</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
