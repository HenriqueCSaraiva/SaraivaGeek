import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from "../../reducer"
import Frete from './Frete';

function Total() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="total">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="total__subtotal">
                            Subtotal ({basket?.length} itens): <strong>{`${value}`}</strong>
                        </p>

                        <p className="total__frete"><Frete /></p>
                        <h3>Total: R$
                            {
                                getBasketTotal(basket) >= 250
                                    ?
                                    getBasketTotal(basket) + 0
                                    :
                                    getBasketTotal(basket) + basket?.length * 10
                            }

                        </h3>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$"}
            />
            <button className="total__button">Finalizar Compra</button>
        </div>
    )
}

export default Total
