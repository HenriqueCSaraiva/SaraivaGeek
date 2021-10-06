import React from 'react'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from "../../reducer"

function Frete() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div>
            <p>Frete:
                {
                    getBasketTotal(basket) >= 250 ? <strong>Grátis</strong>
                        :
                        <strong>R${basket.length * 10}</strong>
                }
            </p>

        </div>
    )
}

export default Frete
