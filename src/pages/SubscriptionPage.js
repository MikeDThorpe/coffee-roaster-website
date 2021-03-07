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
        delivery: "_____",
        price: undefined
    })
    const [orderPrice, setOrderPrice] = useState("£0.00")

    let createOrder = (e, category) => {
        let value = e.currentTarget.id
        setOrder(prevOrder => ({
            ...prevOrder,
            [category]: value,
        }));
        if(category === "delivery") {
            priceOrder(value)
        }
    }

    let priceOrder = (delivery) => {
        if(delivery === "Weekly") {
            setOrderPrice("£28.80")
        } else if (delivery === "Bi-weekly") {
            setOrderPrice("£19.20")
        } else if(delivery === "Monthly") {
            setOrderPrice("£12.00")
        }
    }

    return (
        <>
            <OrderModal toggleModal={() => setOrderModal(!orderModal)} show={orderModal} order={order} orderPrice={orderPrice}/>
            <HeroBanner />
            <OrderSection toggleModal={() => setOrderModal(!orderModal)} order={order} createOrder={createOrder}/>
        </>
    )
}

export default SubscriptionPage