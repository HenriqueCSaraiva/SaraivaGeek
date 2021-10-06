import React from 'react'
import './Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProducts from '../checkoutProducts/CheckoutProducts'
import Total from '../total/Total'



function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">

                {basket?.length === 0 ? (
                    <div>
                        <h2>Seu Carrinho está vazio</h2>
                        <p>Seu carrinho está vazio. Para comprar algum produto clique em "Adicionar ao Carrinho"</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5y60HV_FjCwEiXvpjyyINNYoH7pJ1Kf3a2g&usqp=CAU" />
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Seu Carrinho</h2>

                        {/* Lista de Produtos */}
                        {basket?.map(item => (
                            <CheckoutProducts
                                key={item.key}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}

                            />
                        ))}

                    </div>
                )}

                {basket.length > 0 && (
                    <div className="checkout__right">
                        <h3 className="checkout__title">Valor Final</h3>
                        <Total />
                    </div>

                )}
            </div>
        </div>
    )
}

export default Checkout
