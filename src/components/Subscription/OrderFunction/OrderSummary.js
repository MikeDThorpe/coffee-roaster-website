import React, {useState} from 'react'
import {Button} from '../../global'

let OrderSummary = ({order}) => {
    let {preferences, type, quantity, grind, delivery} = order

    return (
        <section className="order-summary">
            <h3>Order Summary</h3>
            <div>
                <h5>
                    "My preferred coffee is <span className="order-summary-entry">{preferences}</span>. I would like <span className="order-summary-entry">{quantity}</span> of <span className="order-summary-entry">{type}</span> coffee delivered <span className="order-summary-entry">{delivery}</span>."
                </h5>
                <Button text="Create plan"/>
            </div>
        </section>
    )
}

export default OrderSummary