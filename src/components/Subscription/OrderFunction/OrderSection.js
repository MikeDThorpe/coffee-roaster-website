import React, {useState} from 'react'
import OrderRow from './OrderRow'
import OrderSummary from './OrderSummary'

let OrderSection = () => {
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

    console.log(order)
    return (
        <section className="ordering-section">
            <h3>Get started with a plan</h3>
            <OrderRow order={order} createOrder={createOrder} category={"preferences"} number="01" title="Preferences" content={[{option: "Capsule", description: "Compatible with nespresso products and similar brewers"},{option: "Filter", description: "For pouring or drip methods like Aeropress, Chemex or V60"},{option: "Espresso", description: "Dense, finely ground beans for an isntense flavour"}]}/>
            <OrderRow order={order} createOrder={createOrder} category={"type"} number="02" title="Choose your coffee" content={[{option: "Single origin", description: "Distinct, high quality coffee from a local family plantation"},{option: "Decaf", description: "Just like regular coffee, only the caffeine has been removed"},{option: "Blended", description: "A combination of dark roasted organic coffee beans"}]} />
            <OrderRow order={order} createOrder={createOrder} category={"quantity"} number="03" title="Order quantity" content={[{option: "250g", description: "Perfect ammount for the solo coffee drink. Yields around 12 declicious cups"},{option: "500g", description: "Pefect option for a pair of coffee drinkers. Yields around 40 cups"},{option: "1000g", description: "Perfect for offices and events. 90 cups from a single delivery"}]} />
            <OrderRow order={order} createOrder={createOrder} category={"grind"} number="04" title="Coffee grind" content={[{option: "Wholebean", description: "Best choice if you cherish a sensory coffee experience"},{option: "Filter", description: "For drip or pour-over coffee like V60 or Aeropress"},{option: "cafetiere", description: "Course ground coffee beans suited for a french press"}]} />
            <OrderRow order={order} createOrder={createOrder} category={"delivery"} number="05" title="Delivery options" content={[{option: "Weekly", description: "Weekly deliver from only £7.20. Includes free, first-class shipping"},{option: "Bi-weekly", description: "£9.60 per shipment delivered straight to your door every two weeks"},{option: "Monthly", description: "£12 per shipment. Fresh coffee to your door once a month"}]} />
            <OrderSummary order={order}/>
        </section>
    )
}
export default OrderSection