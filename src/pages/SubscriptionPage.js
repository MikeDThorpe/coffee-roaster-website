import React, { useState } from 'react'
import {HeroBanner, OrderSection} from '../components/Subscription';
import OrderModal from '../components/Subscription/OrderFunction/OrderModal'

let SubscriptionPage = () => {
    const [orderModal, setOrderModal] = useState(false);
    const [order, setOrder] = useState({
        preferences: "_____",
        type: "_____",
        quantity: "_____",
        grind: "_____",
        delivery: "_____"
    })

    let createOrder = (e, category) => {
        let value = e.currentTarget.id
        setOrder(prevOrder => ({
            ...prevOrder,
            [category]: value
        }));
    }

    return ( 
        <>
            <OrderModal toggleModal={() => setOrderModal(!orderModal)} show={orderModal} order={order}/>
            <HeroBanner />
            <OrderSection toggleModal={() => setOrderModal(!orderModal)} order={order} createOrder={createOrder}/>
        </>
    )
}

export default SubscriptionPage